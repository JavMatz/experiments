#!/usr/bin/env python

import argparse
import subprocess
import os
import json
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, error
from mutagen.easyid3 import EasyID3
from yt_dlp import YoutubeDL

## Change to a tmp dir to not clutter main folders
TMP_DIR = subprocess.run(['mktemp', '-d'], capture_output=True, text=True)
os.chdir(os.path.abspath(TMP_DIR.stdout.strip('\n')))

parser = argparse.ArgumentParser()
parser.add_argument('-u', '--URL', help='The YT url to get the track')
parser.add_argument('-T','--track', help='The title of the track', default='')
parser.add_argument('-t','--title', help='The title of the track', default='')
parser.add_argument('-a','--artist', help='The artist of the track', default='')
parser.add_argument('-A','--album', help='The album of the track', default='')
args = parser.parse_args()

# Just get the video title
with YoutubeDL() as ydl:
    info_dict = ydl.extract_info(args.URL, download=False)
    video_title = info_dict.get('title')

# Download the thing + cover
subprocess.run(['yt-dlp', '-o', '%(title)s', '--embed-metadata', '--ignore-errors', '--extract-audio','--audio-quality', '192K', '--audio-format', 'mp3', '--write-thumbnail',  args.URL])

# Delete date tag that breaks Amberol music player
audio_file = EasyID3(video_title+".mp3")
audio_file["date"] = u""

if args.track != '':
    audio_file["tracknumber"] = args.track
if args.title != '':
    audio_file["title"] = args.title
if args.artist != '':
    audio_file["artist"] = args.artist
if args.album != '':
    audio_file["album"] = args.album

audio_file.save()

subprocess.run(['magick', video_title+'.webp', video_title+'.jpeg'])

audio = MP3(video_title+'.mp3', ID3=ID3)    
audio.tags.add(
    APIC(
        encoding=3, # 3 is for utf-8
        mime='image/jpeg', # image/jpeg or image/png
        type=3, # 3 is for the cover image
        desc=u'Cover',
        data=open(video_title+'.jpeg', 'rb').read()
    )
)

audio.save()

# if args.album != '' and args.artist != '' and args.album != '':
#     os.system('cp ./*.mp3 ~/'+args.album+args.artist+args.title)
# else:
os.system('cp ./*.mp3 ~/')

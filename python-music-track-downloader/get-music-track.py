#!/usr/bin/env python

import argparse
import shutil
import subprocess
import os
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, TIT2, TRCK, TPE1, TALB, TDRC
from yt_dlp import YoutubeDL

file_name = []
parser = argparse.ArgumentParser()
parser.add_argument('-u', '--URL', help='The YT url to get the track')
parser.add_argument('-T','--track', help='The track number of the track', default='')
parser.add_argument('-t','--title', help='The title of the track', default='')
parser.add_argument('-a','--artist', help='The artist of the track', default='')
parser.add_argument('-A','--album', help='The album of the track', default='')
parser.add_argument('-c','--cover', help='The cover art of the track', default='')
args = parser.parse_args()

# Just get the video title
with YoutubeDL() as ydl:
    info_dict = ydl.extract_info(args.URL, download=False)
    video_title = info_dict.get('title')

## Change to a tmp dir to not clutter main folders
TMP_DIR = subprocess.run(['mktemp', '-d'], capture_output=True, text=True)
os.chdir(os.path.abspath(TMP_DIR.stdout.strip('\n')))

# Download the thing + thumbnail
subprocess.run(['yt-dlp', '-o', '%(title)s', '--embed-metadata', '--ignore-errors', '--extract-audio','--audio-quality', '192K', '--audio-format', 'mp3', '--write-thumbnail',  args.URL])

audio = MP3(video_title+'.mp3', ID3=ID3)    

# HACK: Delete RecordingTime tag that breaks Amberol music player when it tries
# to play tracks downloaded from YT
audio.tags.add(
        TDRC(
            encoding=3,
            text=u''
            )
        )

if args.track != '':
    file_name.append(args.track)
    audio.tags.add(
        TRCK(
            encoding=3, # 3 is for utf-8
            desc=u'Track',
            text=args.track
        )
    )

if args.album != '':
    file_name.append(args.album)
    audio.tags.add(
        TALB(
            encoding=3, # 3 is for utf-8
            desc=u'Album',
            text=args.album
        )
    )

if args.artist != '':
    file_name.append(args.artist)
    audio.tags.add(
        TPE1(
            encoding=3, # 3 is for utf-8
            desc=u'Artist',
            text=args.artist
        )
    )

if args.title != '':
    file_name.append(args.title)
    audio.tags.add(
        TIT2(
            encoding=3, # 3 is for utf-8
            desc=u'Title',
            text=args.title
        )
    )

if args.cover != '':
    # Use provided file for cover art
    cover_art = args.cover
else:
    # otherwise use the video thumbnail
    subprocess.run(['magick', video_title+'.webp', video_title+'.jpeg'])
    cover_art = video_title+'.jpeg'

audio.tags.add(
    APIC(
        encoding=3, # 3 is for utf-8
        mime='image/jpeg', # image/jpeg or image/png
        type=3, # 3 is for the cover image
        desc=u'Cover',
        data=open(cover_art, 'rb').read()
    )
)

audio.save()

dest_path = ['home', 'javier', 'Music', args.artist, args.album]
dest_path = '/'.join(dest_path)
dest_path = '/'+dest_path+'/'
os.makedirs(dest_path, exist_ok=True)
dest_file = ' - '.join(file_name)
shutil.copy(video_title+'.mp3', dest_path+dest_file+'.mp3')

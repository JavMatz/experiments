#!/usr/bin/env python

import argparse
import shutil
import subprocess
import os
from mutagen.easyid3 import EasyID3
from mutagen.mp3 import MP3
from mutagen.id3 import ID3, APIC, TIT2, TRCK, TPE1, TALB, TDRC, TPE2, TPOS
from yt_dlp import YoutubeDL

# Will be useful later
file_name = []

# Parse CLI arguments
parser = argparse.ArgumentParser()
parser.add_argument('-p', '--picard', help='Autotag the track with picard', action='store_true')
parser.add_argument('-u', '--URL', help='The YT url to get the track')
parser.add_argument('-d', '--disk', help='The disk number of this track', default=0)
parser.add_argument('-T','--track', help='The track number of the track', default=0)
parser.add_argument('-t','--title', help='The title of the track', default='')
parser.add_argument('-a','--artist', help='The artist of the track', default='')
parser.add_argument('-A','--album', help='The album of the track', default='')
parser.add_argument('-c','--cover', help='The cover art of the track', default='')
args = parser.parse_args()

## This part is just to get the video title
with YoutubeDL() as ydl:
    info_dict = ydl.extract_info(args.URL, download=False)
    video_title = info_dict.get('title')

## Change to a tmp dir to not clutter main folders
TMP_DIR = subprocess.run(['mktemp', '-d'], capture_output=True, text=True)
os.chdir(os.path.abspath(TMP_DIR.stdout.strip('\n')))

# Download the thing + thumbnail
subprocess.run(['yt-dlp', '-o', '%(title)s', '--embed-metadata', '--ignore-errors', '--extract-audio','--audio-quality', '192K', '--audio-format', 'mp3', '--write-thumbnail',  args.URL])

# ADD AUDIO TAGS
if args.picard:
    print('Using picard')
    subprocess.run(["picard"
                ,"-e", "LOAD", video_title+".mp3"
                ,"-e", "CLUSTER"
                ,"-e", "LOOKUP", "all"
                ])
    
    continue_tagging = input('Copy the files to Music? (y/n)')

    if continue_tagging == 'n':
        quit()
    
    audio = EasyID3(video_title+".mp3")
    
    disc_number = audio["discnumber"][0].split('/')[0]
    if len(disc_number) == 1:
        disc_number = '0'+disc_number

    track_number = audio["tracknumber"][0].split('/')[0]
    if len(track_number) == 1:
        track_number = '0'+ track_number

    artist = audio["albumartist"][0]
    album = audio["album"][0]
    title = audio["title"][0]
    
    dest_path = ['home', 'javier', 'Music', artist, album]
    file_name = [disc_number, track_number, artist, album, title]
    
    audio.save()
    
else:
    audio = MP3(video_title+'.mp3', ID3=ID3)    
    # HACK: Delete RecordingTime tag that breaks Amberol music player when it tries
    # to play tracks downloaded from YT
    audio.tags.add(
            TDRC(
                encoding=3,
                text=u''
                )
            )

    # Disk number
    if args.disk != 0:
        file_name.append(args.disk)
        audio.tags.add(
            TPOS(
                encoding=3, # 3 is for utf-8
                desc=u'Disk number',
                text=args.track
            )
        )

    # Track number
    if args.track != 0:
        file_name.append(args.track)
        audio.tags.add(
            TRCK(
                encoding=3, # 3 is for utf-8
                desc=u'Track number',
                text=args.track
            )
        )
    
    # Artist
    if args.artist != '':
        file_name.append(args.artist)
        audio.tags.add(
            TPE1(
                encoding=3, # 3 is for utf-8
                desc=u'Album Artist',
                text=args.artist
            )
        )
        audio.tags.add(
            TPE2(
                encoding=3, # 3 is for utf-8
                desc=u'Album Artist',
                text=args.artist
            )
        )
        
    # Album
        if args.album != '':
            file_name.append(args.album)
            audio.tags.add(
                TALB(
                    encoding=3, # 3 is for utf-8
                    desc=u'Album',
                    text=args.album
                )
            )

    # Track title
    if args.title != '':
        file_name.append(args.title)
        audio.tags.add(
            TIT2(
                encoding=3, # 3 is for utf-8
                desc=u'Title',
                text=args.title
            )
        )

    # Cover art
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

    if args.artist and args.album:
        dest_path = ['home', 'javier', 'Music', args.artist, args.album]
    else:
        dest_path = ['home', 'javier', 'Music']
        
    audio.save()   
    
dest_path = '/'.join(dest_path)
dest_path = '/'+dest_path+'/'
os.makedirs(dest_path, exist_ok=True)

if file_name: 
    dest_file = ' - '.join(file_name)
else:
    dest_file = video_title

shutil.copy(video_title+'.mp3', dest_path+dest_file+'.mp3')

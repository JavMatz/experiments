#!/usr/bin/env bash

# Piggy back from the smile project to get my emojis 🙏🙏
curl -O "https://raw.githubusercontent.com/mijorus/smile/refs/heads/master/src/assets/emoji_list.py"

# Generate the csv file
python main.py

# Delete some quotes for estetic purposes
sed -i 's/"//g' emojis.csv

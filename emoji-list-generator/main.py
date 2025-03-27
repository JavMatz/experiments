import csv
import emoji_list

data = []

for emoji_info in emoji_list.emojis.values():
    row = [emoji_info['emoji'], emoji_info['tags']]
    data.append(row)

with open('emojis.csv', 'w', newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile, delimiter=' ', lineterminator='\n')
    writer.writerows(data)

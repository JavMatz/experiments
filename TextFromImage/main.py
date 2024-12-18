from PIL import Image
import pytesseract
import os

if __name__ == "__main__":
    img_path = "./images"

    text_file_path = "./songs.txt"

    files_from_dir = os.listdir(img_path)
    list_of_files = []

    text_from_img = ""

    for file in files_from_dir:
        text_from_img += file+"\n"
        text_from_img += pytesseract.image_to_string(Image.open("./images/"+file), lang="spa")

    with open(text_file_path, "w") as file:
        file.write(text_from_img)

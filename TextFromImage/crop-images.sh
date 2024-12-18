#!/usr/bin/env bash

for ITEM in *.jpg; do
  magick "$ITEM" -crop 640x1136+0+144 "crop-${ITEM}"
done

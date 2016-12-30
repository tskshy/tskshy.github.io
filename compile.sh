#!/usr/bin/env sh

FILE_NAME=$1
ROOT_DIR="/root/devel/blogs/tskshy.github.io"

MD_FILE=${ROOT_DIR}/blogs/markdown/${FILE_NAME}
HTML_FILE=${ROOT_DIR}/blogs/${FILE_NAME}.html

if [ ! -f "$MD_FILE" ]; then
	echo "No such file or directory: $MD_FILE"
	exit 0
fi

pandoc $MD_FILE\
	-s \
	--mathml \
	--highlight-style pygments \
	--css ${ROOT_DIR}/css/pandoc.css \
	--toc \
       	-o $HTML_FILE

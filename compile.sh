#!/usr/bin/env sh

#e.g. ./compile.sh 2012-12-12.md

FILE_NAME=$1
ROOT_DIR="/root/devel/blogs/tskshy.github.io"

MD_FILE=${ROOT_DIR}/blogs/markdown/${FILE_NAME}
HTML_FILE=${ROOT_DIR}/blogs/${FILE_NAME}.html

if [ ! -f "$MD_FILE" ]; then
	echo "No such file or directory: $MD_FILE"
	exit 0
fi

#提交github后，css需要给出相对路径
pandoc $MD_FILE\
	-s \
	--mathml \
	--highlight-style pygments \
	--css ../css/pandoc.css \
	--toc \
       	-o $HTML_FILE


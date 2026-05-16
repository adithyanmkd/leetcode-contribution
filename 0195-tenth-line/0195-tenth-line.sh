# Read from the file file.txt and output the tenth line to stdout.

line_content=$(sed -n '10p' file.txt)
echo "${line_content}"
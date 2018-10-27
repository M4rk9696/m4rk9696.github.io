DATE=`date +%Y-%m-%d`
NAME=$DATE'-'$1
cp $1 ../website/blog/$NAME
rm $1
cd ..
git add website/blog/$NAME
git commit -m "blog: '$NAME'" --author="nimalan.m <nimalan.m@protonmail.com>"

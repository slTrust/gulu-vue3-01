rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:slTrust/gulu-website-1.git &&
git push -f -u origin main &&
cd -
echo https://sltrust.github.io/gulu-website-1/index.html
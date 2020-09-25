rm -rf dist
mkdir dist
yarn tsc
yarn css
cp src/assets/close.svg dist/css/close.svg

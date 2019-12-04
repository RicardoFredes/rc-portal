const exec = require('child_process').exec;

exec('rm -rf dist && mkdir dist && mkdir dist/css');
exec('npx tsc');
exec('npx node-sass ./src/sass/style.scss ./dist/css/style.css');
exec('cp ./src/assets/close.svg ./dist/css/close.svg');

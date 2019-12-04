const exec = require("child_process").exec;

exec("rm -rf dist && mkdir dist");
exec("npx tsc");
exec("npx node-sass ./src/style.scss ./dist/style.css");
exec("cp ./src/close.svg ./dist");

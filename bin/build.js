const exec = require("child_process").exec;

exec("rm -rf dist && mkdir dist && npx tsc");
exec("npx node-sass ./src/style ./dist/style.css");
exec("cp ./src/close.svg ./dist");

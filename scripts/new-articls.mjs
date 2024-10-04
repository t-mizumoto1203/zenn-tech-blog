const path = require("path");

let filePath = (
  await $`npm run zenn new:article -- --machine-readable | tail -1`
).stdout.trim();

let { dir, base: fileName } = path.parse(filePath);
let date = (await $`date "+%Y%m%d"`).stdout.trim();
let newPath = `${dir}/${date}-${fileName}`;

$`mv ${filePath} ${newPath}`;

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { marked } from "marked";

const root = path.dirname(fileURLToPath(new URL("../", import.meta.url)));
const md = fs.readFileSync(path.join(root, "README.md"), "utf8");

const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>README preview — IainHenn</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown-light.min.css" />
  <style>
    body { background: #f6f8fa; margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI', sans-serif; }
    .wrap { max-width: 1012px; margin: 24px auto; padding: 0 16px 48px; }
    .banner { font-size: 13px; color: #57606a; margin-bottom: 12px; text-align: center; }
    .markdown-body { box-sizing: border-box; padding: 32px 48px; background: #fff; border: 1px solid #d0d7de; border-radius: 12px; }
  </style>
</head>
<body>
  <div class="wrap">
    <p class="banner">Local preview (close to github.com markdown rendering)</p>
    <article class="markdown-body">${marked.parse(md, { gfm: true })}</article>
  </div>
</body>
</html>`;

fs.writeFileSync(path.join(root, "preview.html"), page);
console.log("Wrote preview.html");
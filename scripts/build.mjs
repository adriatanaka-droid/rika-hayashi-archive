import { mkdir, copyFile } from "node:fs/promises";

await mkdir("dist", { recursive: true });
await copyFile("index.html", "dist/index.html");
await copyFile("article.html", "dist/article.html");
await copyFile("book.html", "dist/book.html");
await copyFile("favicon.svg", "dist/favicon.svg");
await copyFile("CNAME", "dist/CNAME");
await copyFile(".nojekyll", "dist/.nojekyll");

console.log("Built dist/index.html, dist/article.html, and dist/book.html");

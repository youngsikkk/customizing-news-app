// src/lib/markdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getMarkdownContent(filename) {
  const fullPath = path.join(contentDirectory, `${filename}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matter를 이용해 메타데이터 파싱
  const matterResult = matter(fileContents);

  // remark를 이용해 마크다운을 HTML로 변환
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}

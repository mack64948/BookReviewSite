import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const chapterAnalysisDirectory = path.join(process.cwd(), 'data/chapter_analyses');

function getChapterNumbers(){
  let chapters = [];
  for(let i = 1; i <= 19; i++){
    chapters.push(i);
  }
  return chapters;
}

export function getAllChapterNumbers(){
  let chapterNumbers = getChapterNumbers();

  return chapterNumbers.map((number) => {
    return {
      params: {
        number: number.toString()
      }
    }
  });
}



export function getSortedAnalysesData() {
  // Get file names under /posts
  const chapterNumbers = getChapterNumbers();
  const allChaptersData = chapterNumbers.map((number) => {
    
    // Read markdown file as string
    const fullPath = path.join(chapterAnalysisDirectory, number.toString() + ".md");
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      number,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allChaptersData.sort((a, b) => {
    if (a.number < b.number) {
      return -1;
    } else {
      return 1;
    }
  });
}

export async function getChapterData(number) {
  const fullPath = path.join(chapterAnalysisDirectory, `${number}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  
    const contentHtml = processedContent.toString();
  // Combine the data with the id
  return {
    number,
    contentHtml,
    ...matterResult.data,
  };
}
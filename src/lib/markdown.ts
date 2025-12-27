import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface MarkdownData {
  id: string;
  content: string;
  title?: string;
  date?: string;
  description?: string;
  company?: string;
  period?: string;
  link?: string;
  issuer?: string;
  year?: string;
  tags?: string[];
  [key: string]: unknown;
}

export function getAllContent(subDirectory: string): MarkdownData[] {
  const fullPath = path.join(contentDirectory, subDirectory);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }

  const fileNames = fs.readdirSync(fullPath);
  const allContentData = fileNames.map((fileName): MarkdownData => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullFilePath = path.join(fullPath, fileName);
    const fileContents = fs.readFileSync(fullFilePath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      content: matterResult.content,
      ...matterResult.data,
    };
  });
  
  // Sort posts by date if available
  return allContentData.sort((a, b) => {
    const dateA = typeof a.date === 'string' ? a.date : '';
    const dateB = typeof b.date === 'string' ? b.date : '';
    if (dateA && dateB) {
        return dateA < dateB ? 1 : -1;
    }
    return 0;
  });
}

import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function GET(req: NextRequest, { params }: { params: { blogId: string } }) {
  const { blogId } = params;

  try {
    const fullPath = path.join(postsDirectory, `${blogId}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHtml = processedContent.toString();

    return NextResponse.json({
      id: blogId,
      contentHtml,
      ...matterResult.data,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
}

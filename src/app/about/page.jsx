// src/app/about/page.js
import { getMarkdownContent } from '../../lib/markdown';
import styles from './about.module.css';

export default async function AboutPage() {
  const aboutData = await getMarkdownContent('about');

  return (
    <div className={styles.content}>
      <div dangerouslySetInnerHTML={{ __html: aboutData.contentHtml }} />
    </div>
  );
}

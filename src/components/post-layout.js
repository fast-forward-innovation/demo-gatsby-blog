import * as React from 'react';
import { Link } from 'gatsby';
import Layout from './layout.js';

export default function PostLayout({ children, pageContent }) {x
  const { title, description } = pageContent.frontmatter;
  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; Back</Link>
    </Layout>
  )
}
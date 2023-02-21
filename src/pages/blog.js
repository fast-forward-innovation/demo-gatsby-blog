import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function Blog() {
  
  return (
    <Layout
      title="Blog"
      description="Blog with all entries"
    >
      <p>You've reached the Blog</p>
      <Link to='/'>Back to Home</Link>
    </Layout>
  )
}
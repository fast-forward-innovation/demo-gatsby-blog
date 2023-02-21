import * as React from "react";
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function IndexPage() {
  return (
    <Layout>
      <h1>Welcome to Karen's Blog!</h1>
      <Link to='/blog'>Go to Blog</Link>
    </Layout>
  )
}
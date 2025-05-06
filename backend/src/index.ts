import express, { RequestHandler } from 'express';
import cors from 'cors';
import { blogPosts } from './data/blogPosts';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// Get all blog posts
const getAllPosts: RequestHandler = (_req, res) => {
  const posts = Object.values(blogPosts);
  res.json(posts);
};

// Get a specific blog post by ID
const getPostById: RequestHandler = (req, res) => {
  const post = blogPosts[req.params.id];
  
  if (!post) {
    res.status(404).json({ message: 'Post not found' });
  } else {
    res.json(post);
  }
};

app.get('/api/posts', getAllPosts);
app.get('/api/posts/:id', getPostById);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
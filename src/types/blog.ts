export interface BlogPost {
  id: string;
  title: string;
  description: string;
}

export type BlogPosts = Record<string, BlogPost>;
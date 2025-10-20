export interface Blog {
  id: number;
  category: string;
  title: string;
  excerpt?: string;
  image: string;
  author: string;
  date: string;
  body: string;
}

export interface BlogCardProps {
  blog: Blog;
  onClick?: () => void;
}

export interface SingleBlogProps {
  blog: Blog;
}

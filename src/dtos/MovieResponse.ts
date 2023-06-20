export interface Movie {
  id: string;
  title: string;
  note: number;
  img_url: string;
  description: string;
  userId: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
  posts: Post[];
  User: User;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  note: number;
  user_name: string;
  moviesId: string;
  created_at: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at: string;
  updated_at: string;
  deleted_at?: any;
}

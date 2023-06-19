export interface MovieListResponse {
  id: string;
  title: string;
  note: number;
  img_url: string;
  description: string;
  userId: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
  posts: Post[];
}

export interface Post {
  id: string;
  title: string;
  content: string;
  note: number;
  user_name: string;
  moviesId: string;
  created_at: Date;
}

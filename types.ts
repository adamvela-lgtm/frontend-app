// types.ts

import { User, Post, Comment } from './models';

type Maybe<T> = T | null | undefined;

interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

interface UserType {
  id: number;
  name: string;
  email: string;
}

interface CommentType {
  id: number;
  postId: number;
  userId: number;
  body: string;
}

interface PaginatedPosts {
  posts: PostType[];
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}

interface PaginatedUsers {
  users: UserType[];
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}

interface PaginatedComments {
  comments: CommentType[];
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
}

interface FetchPostsResponse {
  posts: PostType[];
}

interface FetchUserResponse {
  user: UserType;
}

interface FetchCommentsResponse {
  comments: CommentType[];
}

interface FetchPostResponse {
  post: PostType;
}

interface FetchUserPostsResponse {
  posts: PostType[];
}

interface FetchUserCommentsResponse {
  comments: CommentType[];
}

type PostAction = 'create' | 'update' | 'delete';

type CommentAction = 'create' | 'update' | 'delete';

type PostFilter = 'all' | 'mine' | 'popular';

type CommentFilter = 'all' | 'mine';

type SortOrder = 'asc' | 'desc';

type SortBy = 'created_at' | 'updated_at' | 'id';

interface PostQuery {
  page?: number;
  perPage?: number;
  filter?: PostFilter;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

interface CommentQuery {
  page?: number;
  perPage?: number;
  filter?: CommentFilter;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}

interface UserQuery {
  page?: number;
  perPage?: number;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
}
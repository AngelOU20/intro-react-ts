import {
  JsonDataBaseService,
  LocalDataBaseService,
  PostProvider,
} from './05-dependency-c';

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  // Inyección de dependencia
  constructor(private postProvide: PostProvider) {}

  async getPosts() {
    this.posts = await this.postProvide.getPosts();

    return this.posts;
  }
}

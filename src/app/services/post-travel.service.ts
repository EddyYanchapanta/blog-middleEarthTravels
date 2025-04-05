import { Injectable } from '@angular/core';
import { posts } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostTravelService {
  getAll(): Post[] {
    return posts;
  }

  getById(id: number): Post | undefined {
    return posts.find((post) => post.id == id);
  }

  insert(post: Post): void {
    posts.push(post);
  }
}

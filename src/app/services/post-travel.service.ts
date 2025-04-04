import { Injectable } from '@angular/core';
import { post } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostTravelService {
  getAll(): Post[] {
    return post;
  }
}

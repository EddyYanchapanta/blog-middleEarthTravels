import { Injectable } from '@angular/core';
import { categoria, posts } from '../db/posts.db';
import { Post } from '../interfaces/post.interface';
import { ICategory } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class PostTravelService {
  //return all posts from the db
  getAll(): Post[] {
    return posts;
  }

  //return info from a single post
  getById(id: number): Post | undefined {
    return posts.find((post) => post.id == id);
  }

  insert(post: Post): void {
    console.log('insert post', post);
    posts.push(post);
  }
  getByCategoria(categoria: string): Post[] {
    return posts.filter((post) => post.categoria.titulo == categoria);
  }

  //method to get all posts by category
  getAllByCategory(category: ICategory): Post[] {
    if (!category) {
      return this.getAll();
    }
    return this.getAll().filter((post) => post.categoria.id == category.id);
  }

  //method to get all categories from the db
  getAllCategories(): ICategory[] {
    return categoria; // return all categories from the db
  }
}

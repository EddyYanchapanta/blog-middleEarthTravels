import { Category } from './category.interface';

export interface Post {
  id: number;
  Titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: Category;
}

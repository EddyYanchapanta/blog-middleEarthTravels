import { ICategory } from './category.interface';

export interface Post {
  id: number;
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  fecha: Date;
  categoria: ICategory;
}

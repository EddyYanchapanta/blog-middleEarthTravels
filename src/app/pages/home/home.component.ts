import { PostTravelService } from './../../services/post-travel.service';
import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  arrTravels: Post[] = [];
  categorias: Category[] = [];

  PostTravelService = inject(PostTravelService);

  ngOnInit() {
    this.arrTravels = this.PostTravelService.getAll();
  }

  formatFecha(fechaOriginal: string | number | Date) {
    const fecha = new Date(fechaOriginal);
    return fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}

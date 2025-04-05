import { PostTravelService } from './../../services/post-travel.service';
import { Component, inject } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ICategory } from '../../interfaces/category.interface';
import { TravelCardComponent } from '../../components/travel-card/travel-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [TravelCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  arrTravels: Post[] = [];
  categorias: ICategory[] = [];

  PostTravelService = inject(PostTravelService);

  ngOnInit() {
    this.arrTravels = this.PostTravelService.getAll();
  }

  // formatFecha(fechaOriginal: string | number | Date) {
  //   const fecha = new Date(fechaOriginal);
  //   return fecha.toLocaleDateString('es-ES', {
  //     day: '2-digit',
  //     month: 'short',
  //     year: 'numeric',
  //   });
  // }
}

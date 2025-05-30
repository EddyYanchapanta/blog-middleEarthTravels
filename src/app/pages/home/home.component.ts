import { PostTravelService } from './../../services/post-travel.service';
import { Component, inject, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ICategory } from '../../interfaces/category.interface';
import { TravelCardComponent } from '../../components/travel-card/travel-card.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [TravelCardComponent, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  arrTravels: Post[] = []; //alll travels
  categorias: ICategory[] = []; //all categories
  filteredTravels: Post[] = []; //filtered travels
  searchTitle: string = ''; //search term

  postTravelService = inject(PostTravelService);

  ngOnInit() {
    this.arrTravels = this.postTravelService.getAll();
    this.categorias = this.postTravelService.getAllCategories();
    this.filteredTravels = this.arrTravels;
  }

  getTravelByCategory(categoria: ICategory) {
    this.arrTravels = this.postTravelService.getAllByCategory(categoria);
    this.filterTravels();
  }

  onChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', selectedValue);
    // search the selected category
    const categoriaSeleccionada = this.categorias.find(
      (cat) => cat.titulo === selectedValue
    );

    // if the selected category is found, filter the travels by category
    if (categoriaSeleccionada) {
      this.getTravelByCategory(categoriaSeleccionada);
    } else {
      // if no category is selected, return all travels
      this.arrTravels = this.postTravelService.getAll();
      this.filterTravels();
    }
  }

  filterTravels(): void {
    if (!this.searchTitle) {
      // if no search term is provided, return all travels
      this.filteredTravels = this.arrTravels;
    } else {
      // filter travels by title
      this.filteredTravels = this.arrTravels.filter((travel) =>
        travel.titulo.toLowerCase().includes(this.searchTitle.toLowerCase())
      );
    }
  }
}

import { Component, Input } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { ICategory } from '../../interfaces/category.interface';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-travel-card',
  imports: [DatePipe, RouterLink],
  templateUrl: './travel-card.component.html',
  styleUrl: './travel-card.component.css',
})
export class TravelCardComponent {
  @Input() miTravel: Post | undefined;

  ngOnInit() {
    console.log(this.miTravel);
  }
  /* categoria: ICategory = {
    id: 0,
    titulo: '',
  }; */
}

import { Component, inject, Input } from '@angular/core';
import { PostTravelService } from '../../services/post-travel.service';
import { Post } from '../../interfaces/post.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-view-post',
  imports: [DatePipe],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  @Input() idTravel: number = 0;

  travelService = inject(PostTravelService);
  travel: Post | undefined;

  ngOnInit() {
    this.travel = this.travelService.getById(this.idTravel);
    console.log(this.travel);
    if (!this.travel) {
      console.error('Post not found');
    }
  }
}

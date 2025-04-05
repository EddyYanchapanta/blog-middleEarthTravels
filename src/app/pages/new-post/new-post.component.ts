import { Component } from '@angular/core';
import { FormPostComponent } from '../../components/form-post/form-post.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-post',
  imports: [FormPostComponent, RouterLink],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {}

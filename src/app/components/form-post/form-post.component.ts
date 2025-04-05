import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { PostTravelService } from '../../services/post-travel.service';

@Component({
  selector: 'app-form-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css',
})
export class FormPostComponent {
  formPost: FormGroup;
  travelService = inject(PostTravelService);
  /* id: number | undefined; */

  constructor() {
    this.formPost = new FormGroup({
      id: new FormControl('', []),
      titulo: new FormControl('', []),
      texto: new FormControl('', []),
      autor: new FormControl('', []),
      categoria: new FormGroup({
        titulo: new FormControl('', []),
      }),
      imagen: new FormControl('', []),
      fecha: new FormControl('', []),
    });
  }

  onSubmit() {
    console.log(this.formPost.value);
    const posts = this.travelService.getAll();
    // Encontrar el ID más alto en el array existente
    const maxId =
      posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 0;

    // Asignar el nuevo ID (máximo + 1)
    this.formPost.value.id = maxId + 1;
    this.travelService.insert(this.formPost.value);
    // Reiniciar el formulario después de enviar
    this.formPost.reset();
  }
}

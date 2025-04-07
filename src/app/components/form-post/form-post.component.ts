import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostTravelService } from '../../services/post-travel.service';
import { ICategory } from '../../interfaces/category.interface';

@Component({
  selector: 'app-form-post',
  imports: [ReactiveFormsModule],
  templateUrl: './form-post.component.html',
  styleUrl: './form-post.component.css',
})
export class FormPostComponent {
  formPost: FormGroup;
  postTravelService = inject(PostTravelService);
  categorias: ICategory[] = [];
  categoriaSeleccionada: ICategory | undefined;

  constructor() {
    this.formPost = new FormGroup({
      id: new FormControl('', []),
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      texto: new FormControl('', [Validators.required]),
      autor: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [
        Validators.required,
        Validators.pattern('(https?://.*.(?:png|jpg|jpeg|gif|svg))'),
      ]),
      fecha: new FormControl('', []),
    });
  }

  ngOnInit() {
    this.categorias = this.postTravelService.getAllCategories();
  }

  onSubmit() {
    this.formPost.markAllAsTouched();
    if (this.formPost.valid) {
      console.log(this.formPost.value);
      const posts = this.postTravelService.getAll();
      // find the max id from the posts array
      const maxId =
        posts.length > 0 ? Math.max(...posts.map((post) => post.id)) : 0;
      //asing the new id to the formPost value(max +1)

      // mapping object form to object post
      // this.travelService.insert(this.formPost.value);
      this.postTravelService.insert({
        //clone object
        ...this.formPost.value,
        id: maxId + 1,
        fecha: new Date(),
        // asing the selected category to the post
        categoria: this.categoriaSeleccionada,
      });
      // reset the form
      this.formPost.reset();
    }
  }

  checkError(controlName: string, errorName: string) {
    return (
      this.formPost.get(controlName)?.hasError(errorName) &&
      this.formPost.get(controlName)?.touched
    );
  }

  onChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected value:', selectedValue);
    // search the selected category
    this.categoriaSeleccionada = this.categorias.find(
      (cat) => cat.titulo === selectedValue
    );
  }
}

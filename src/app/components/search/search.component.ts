import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  standalone: true,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [ReactiveFormsModule]
})
export class SearchComponent {
  searchForm = new FormGroup({
    query: new FormControl<string>('', { nonNullable: true })
  });

  onSubmit() {
    console.log('Search:', this.searchForm.value.query); // Type: string | undefined 
  }

}

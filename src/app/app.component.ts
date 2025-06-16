import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: '<h1>Hello Angular 14 (Standalone)!</h1>'
})
export class AppComponent {
  title = 'proyek-pertamaku';
}

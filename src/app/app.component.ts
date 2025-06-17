import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaftarTugasComponent } from './components/daftar-tugas/daftar-tugas.component';

@Component({
  standalone: true,
  imports: [CommonModule, DaftarTugasComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'proyek-pertamaku';
}
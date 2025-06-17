import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TambahTugasComponent } from '../tambah-tugas/tambah-tugas.component';

@Component({
  selector: 'app-daftar-tugas',
  standalone: true,
  imports: [CommonModule, TambahTugasComponent],
  templateUrl: './daftar-tugas.component.html',
  styleUrls: ['./daftar-tugas.component.css']
})
export class DaftarTugasComponent {
  tugasList: string[] = ['Belajar Angular', 'Membuat komponen'];

  tambahTugas(tugas: any) {
    this.tugasList.push(tugas);
  }
}

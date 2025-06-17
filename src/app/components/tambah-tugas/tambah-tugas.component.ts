import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tambah-tugas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tambah-tugas.component.html',
  styleUrls: ['./tambah-tugas.component.css']
})
export class TambahTugasComponent {
  @Output() tugasDitambah = new EventEmitter<string>(); tugasBaru: string = '';

  tambahTugas() {
    if (this.tugasBaru.trim()) {
      this.tugasDitambah.emit(this.tugasBaru); this.tugasBaru = '';
    }
  }
}

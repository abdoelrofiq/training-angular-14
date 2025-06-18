import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Tambahkan ini

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}

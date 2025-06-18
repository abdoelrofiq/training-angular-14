import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-card',
  templateUrl: './responsive-card.component.html',
  styleUrls: ['./responsive-card.component.css']
})
export class ResponsiveCardComponent implements OnInit {
  @Input() title: string = 'Judul Default';
  @Input() description: string = 'Deskripsi default untuk card ini.';
  @Input() imageUrl: string = 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  isMobile: boolean = false;

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
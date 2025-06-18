import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Demo Responsive Card</h1>
    <app-responsive-card
      title="Contoh Card Responsif"
      description="Ini adalah contoh card yang menyesuaikan tampilan di perangkat mobile dan desktop."
      imageUrl="https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
    </app-responsive-card>
  `
})
export class AppComponent { }
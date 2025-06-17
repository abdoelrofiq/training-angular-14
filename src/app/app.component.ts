import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPersonaService } from './services/user-persona.service';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyek-pertamaku';
  roles = ['guest', 'auditor', 'admin'] as const;

  constructor(public persona: UserPersonaService) { }

  ngOnInit() {
    this.applyTheme();
  }

  onRoleChange(role: any) {
    this.persona.update({ role });
  }

  toggleDarkMode(dark: boolean) {
    this.persona.update({ darkMode: dark });
    this.applyTheme();
  }

  private applyTheme() {
    if (this.persona.preferences.darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
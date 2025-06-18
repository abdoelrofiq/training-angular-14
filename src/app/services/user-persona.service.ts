import { Injectable } from '@angular/core';

export interface UserPersona {
  role: 'bendahara' | 'auditor' | 'admin';
  prefersDarkMode: boolean;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserPersonaService {
  private persona: UserPersona = {
    role: 'auditor',
    prefersDarkMode: false,
    name: 'Pengguna SAKTI'
  };

  getUserPersona(): UserPersona {
    return this.persona;
  }

  setUserPersona(persona: UserPersona): void {
    this.persona = persona;
  }
}

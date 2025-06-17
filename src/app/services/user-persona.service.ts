import { Injectable } from '@angular/core';

export interface UserPreferences {
    role: 'guest' | 'auditor' | 'admin';
    darkMode: boolean;
}

const STORAGE_KEY = 'userPreferences';

@Injectable({ providedIn: 'root' })
export class UserPersonaService {
    private prefs: UserPreferences = { role: 'guest', darkMode: false };

    constructor() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            this.prefs = JSON.parse(stored);
        }
    }

    get preferences(): UserPreferences {
        return this.prefs;
    }

    update(prefs: Partial<UserPreferences>) {
        this.prefs = { ...this.prefs, ...prefs };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.prefs));
    }
}

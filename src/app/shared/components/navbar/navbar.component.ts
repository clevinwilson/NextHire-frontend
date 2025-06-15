import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { OutlineButtonComponent } from '../outline-button/outline-button.component';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, OutlineButtonComponent]
})

export class NavbarComponent {
    user = input<any>();
    isAuthenticated = input<boolean>();

    route = inject(Router);
    authService = inject(AuthService);

    logout() {
        this.authService.logout();
    }
}

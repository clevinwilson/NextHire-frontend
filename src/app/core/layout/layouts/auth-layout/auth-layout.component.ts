import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-auth-layout',
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class AuthLayoutComponent {}

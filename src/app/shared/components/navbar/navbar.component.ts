import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OutlineButtonComponent } from '../outline-button/outline-button.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, OutlineButtonComponent]
})
export class NavbarComponent {}

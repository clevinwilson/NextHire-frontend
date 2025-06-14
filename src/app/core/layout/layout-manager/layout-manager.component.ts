import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { PublicLayoutComponent } from '../layouts/public-layout/public-layout.component';
import { AuthLayoutComponent } from '../layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';

@Component({
    selector: 'app-layout-manager',
    templateUrl: './layout-manager.component.html',
    styleUrl: './layout-manager.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, PublicLayoutComponent, AuthLayoutComponent, AdminLayoutComponent]
})
export class LayoutManagerComponent {
    layoutType: string = 'main';

    constructor(private router: Router) {
        this.router.events.subscribe(() => {
            this.setLayout();
        });
    }

    private setLayout() {
        const route = this.router.url;
        if (route.startsWith('/auth')) {
            this.layoutType = 'auth';
        } else if (route.startsWith('/admin')) {
            this.layoutType = 'admin';
        } else {
            this.layoutType = 'main';
        }
    }
}

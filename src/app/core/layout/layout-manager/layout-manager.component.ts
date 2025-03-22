import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout-manager',
    templateUrl: './layout-manager.component.html',
    styleUrl: './layout-manager.component.css'
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

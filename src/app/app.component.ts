import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutManagerComponent } from './core/layout/layout-manager/layout-manager.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, LayoutManagerComponent]
})
export class AppComponent {
    title = 'NextHire';
}

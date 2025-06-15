import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { selectCurrentUser, selectIsAuthenticated } from '../../../../store/selectors/auth.selectors';

@Component({
    selector: 'app-public-layout',
    templateUrl: './public-layout.component.html',
    styleUrl: './public-layout.component.scss',
    standalone: true,
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent]
})
export class PublicLayoutComponent implements OnInit {
    private store = inject(Store);
    private subscription = new Subscription();
    private user$ = this.store.select(selectCurrentUser);
    private selectIsAuthenticated$ = this.store.select(selectIsAuthenticated);

    public user: any;
    public isAuthenticated: boolean = false;

    ngOnInit(): void {
        this.subscription.add(
            this.user$.subscribe((user) => {
                if (user) {
                    this.user = user;
                }
            })
        );

        this.subscription.add(
            this.selectIsAuthenticated$.subscribe((isAuthenticated) => {
                this.isAuthenticated = isAuthenticated;
            })
        );
    }
}

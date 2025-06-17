import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-outline-button',
    templateUrl: './outline-button.component.html',
    styleUrl: './outline-button.component.scss',
    standalone: true,
    imports: [CommonModule]
})
export class OutlineButtonComponent {
    router = inject(Router);
    label = input.required<string>();
    color = input<string>('primary');
    type = input<string>('button');
    disabled = input<boolean>(false);
    customClasses = input<string>('');
    buttonClicked = output<boolean>();

    handleClick(): void {
        this.buttonClicked.emit(true);
    }
}

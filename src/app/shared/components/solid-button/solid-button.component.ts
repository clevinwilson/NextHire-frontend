import { Component, input } from '@angular/core';

@Component({
    selector: 'app-solid-button',
    templateUrl: './solid-button.component.html',
    styleUrl: './solid-button.component.scss'
})
export class SolidButtonComponent {
    color = input<string>('primary');
    type = input<string>('button');
    disabled = input<boolean>(false);
    customClasses = input<string>('');
}

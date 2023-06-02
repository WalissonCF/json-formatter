import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() isDisabled: boolean = false;
  @Input() ariaLabel: string = 'Teste';
  @Input() buttonType: string = '';
  @Input() cssClass: string = '';

  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.clicked.emit();
  }
}

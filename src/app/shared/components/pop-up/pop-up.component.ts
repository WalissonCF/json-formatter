import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() showPopUp: boolean = false;
  @Output() closePopUp = new EventEmitter<void>();

  public close(): void {
    this.closePopUp.emit();
  }
}

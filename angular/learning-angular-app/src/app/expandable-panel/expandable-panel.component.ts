import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-expandable-panel',
  standalone: true,
  imports: [],
  template: ` <p>expandable-panel works!</p> `,
})
export class ExpandablePanelComponent {
  @Output() panelClosed = new EventEmitter<void>();

  ngOnInit() {
    this.panelClosed.emit();
  }
}

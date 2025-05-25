import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side',
  imports: [CommonModule],
  templateUrl: './side.component.html',
  styleUrl: './side.component.css',
})
export class SideComponent {
  @Output() navItemClicked = new EventEmitter<string>();

  onNavItemClick(event: Event, item: string) {
    // Added event param
    event.preventDefault(); // Prevent default anchor behavior
    this.navItemClicked.emit(item);
  }
}

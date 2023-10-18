import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mk-draw-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ascii-drawing';
}

import { Component } from '@angular/core';
import macShortcuts from '../assets/macShortcuts.json';
import windowsShortcuts from '../assets/windowsShortcuts.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shortcutHelper';

macShortcuts = macShortcuts;



}

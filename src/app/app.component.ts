import { Component } from '@angular/core'
import macShortcuts from '../assets/macShortcuts.json'
import windowsShortcuts from '../assets/windowsShortcuts.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shortcutHelper'
  typeDisplay: InfoObject[] = [
    {keys: '',
    description: '',
    category: '',
    computerType: '',
  }
]

  macShortcuts: InfoObject[] = macShortcuts
  windowsShortcuts: InfoObject[] = windowsShortcuts

  clickedButton(event) {
    event === 'Mac' ?
    this.typeDisplay = macShortcuts : this.typeDisplay = windowsShortcuts
  }



}

interface InfoObject {
  keys: string
  description: string
  category: string
  computerType: string
}


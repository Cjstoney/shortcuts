import macShortcuts from '../assets/macShortcuts.json'
import windowsShortcuts from '../assets/windowsShortcuts.json'
import {Component, Input, OnInit} from '@angular/core'
import {FormControl, FormGroup} from '@angular/forms'
import {Observable} from 'rxjs'
import {startWith, map, tap} from 'rxjs/operators'
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 inputSubmission: FormGroup

  title = 'shortcutHelper'
  typeDisplay: InfoObject[] = [
    {keys: null,
    description: null,
    category: null,
    computerType: null,
  }
]

macShortcuts: InfoObject[] = macShortcuts
windowsShortcuts: InfoObject[] = windowsShortcuts
itemToShow: InfoObject
inputString: string[] = []
control = new FormControl()
filteredShortCuts: Observable<string []>

constructor(private formBuilder: FormBuilder) {
this.inputSubmission = this.formBuilder.group({input: ''})
}

  ngOnInit(): void {
    this.filteredShortCuts = this.startValueChanges()
  }

  startValueChanges(): Observable<string[]> {
    return this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    )
  }

  onEnterKey(event) {
    if (event.keyCode === 13) {
      this.selectedShortcut(event.originalTarget.value)
   }
  }

  selectedShortcut(something: string) {
    this.itemToShow = this.typeDisplay
    .filter(x => x.description === something)
    .slice(0, 1)
    .pop()
    this.control.setValue(this.itemToShow.description)
  }

  clickedButton(event) {
    event === 'Mac' ?
    this.typeDisplay = macShortcuts : this.typeDisplay = windowsShortcuts
  }

  // sets the values to default when the user clicks the x button
  resetDefaults() {
    this.control.setValue('')
    this.itemToShow = null
    const computerType = this.typeDisplay[0].computerType
    computerType === 'Mac' ?
     this.typeDisplay = macShortcuts :
     this.typeDisplay = windowsShortcuts

  }

/**
 * Matches the input value against any of the shortcut descriptions that
 * include the input value
 */
  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value)
    return this.typeDisplay.map(x => x.description)
    .filter(shortcutDescription => this._normalizeValue(shortcutDescription)
    .includes(filterValue))
  }

  // takes the value and lower cases all and removes white spaces
  // NOTE: this is not the safest regex for whitespace
  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '')
  }
}

interface InfoObject {
  keys: string
  description: string
  category: string
  computerType: string
}


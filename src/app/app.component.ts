import macShortcuts from '../assets/macShortcuts.json'
import windowsShortcuts from '../assets/windowsShortcuts.json'
import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map, tap} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
itemToShow: InfoObject
inputString: string[] = []
control = new FormControl()
filteredShortCuts: Observable<string []>

ngOnInit(): void {
  this.filteredShortCuts = this.control.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value))
  );
}

selectedShortcut(something){
  this.itemToShow = this.typeDisplay.filter(x=>x.description === something).slice(0,1).pop()
  console.log(this.itemToShow)
}
  clickedButton(event) {
    event === 'Mac' ?
    this.typeDisplay = macShortcuts : this.typeDisplay = windowsShortcuts
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.typeDisplay.map(x=>x.description).filter(shortcutDescription => this._normalizeValue(shortcutDescription).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}

interface InfoObject {
  keys: string
  description: string
  category: string
  computerType: string
}


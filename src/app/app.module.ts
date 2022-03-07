import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListViewComponent } from './list-view/list-view.component';
import { SearchViewComponent } from './search-view/search-view.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    SearchViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'list-view',component:ListViewComponent},
      {path:'search-view', component:SearchViewComponent}
    ]),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

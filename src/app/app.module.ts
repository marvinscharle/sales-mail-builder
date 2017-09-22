import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BuildingBlockComponent} from './components/building-block.component';
import {FormsModule} from '@angular/forms';
import {LinebreakToBrPipe} from './pipes/linebreak-to-br.pipe';
import {ReplaceFragmentsPipe} from './pipes/replace-fragments.pipe';
import {FragmentsService} from './service/fragments.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    BuildingBlockComponent,
    LinebreakToBrPipe,
    ReplaceFragmentsPipe
  ],
  providers: [FragmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

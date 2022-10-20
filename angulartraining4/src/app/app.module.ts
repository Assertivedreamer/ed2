import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Stocks1Component } from './components/stocks1/stocks1.component';
import { Stocks2Component } from './components/stocks2/stocks2.component';
import { Stocks3Component } from './components/stocks3/stocks3.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';
import { HighlightDirective } from './shared/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    Stocks1Component,
    Stocks2Component,
    Stocks3Component,
    ParentComponent,
    ChildComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

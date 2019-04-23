import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppShellComponent} from './app-shell/app-shell.component';
import { NgxTinySliderModule } from 'ngx-tiny-slider';

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgxTinySliderModule,
    RouterModule
  ],
  exports: [ NgxTinySliderModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

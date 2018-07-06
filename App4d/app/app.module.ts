import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OSComponent } from './os/os.component';
import { PROsComponent } from './pros/pros.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    OSComponent,
    PROsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

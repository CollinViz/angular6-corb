import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,MatFormFieldModule,MatTableModule,MatButtonModule,MatProgressSpinnerModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TestCorbComponent } from './test-corb/test-corb.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCorbComponent    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,FormsModule,
    MatTableModule,MatFormFieldModule,MatInputModule,
    HttpClientModule,MatButtonModule,MatProgressSpinnerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

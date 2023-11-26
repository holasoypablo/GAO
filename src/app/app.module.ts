import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './app.state';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AliensListComponent } from './modules/aliens/components/aliens-list/aliens-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AliensListComponent
  ],
  imports: [
    SecurityModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([]),
    HttpClientModule,
    CommonModule,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

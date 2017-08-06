import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
  imports: []
})
export class FooModule {}

export function root(state, action) {
  return state;
}

export function reducer(state, action) {
  return state;
}

@NgModule({
  imports: [
    StoreModule.forFeature('user', { reducer })
  ]
})
export class UserModule {}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ root }),
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

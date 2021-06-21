import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomepageComponent,
    SignupPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

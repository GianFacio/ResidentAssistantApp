import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StudentDatabaseComponent } from './student-database/student-database.component';
import { OpenComponent } from './open/open.component'

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    TeamComponent,
    CalendarComponent,
    StudentDatabaseComponent,
    OpenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

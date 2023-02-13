import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OpenComponent } from './open/open.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IgxCalendarModule, IgxDialogModule } from "igniteui-angular";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    TeamComponent,
    CalendarComponent,
    OpenComponent,
    ListStudentComponent,
    DisplayStudentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    IgxCalendarModule,
    IgxDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

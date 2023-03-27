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
import { ListTeamComponent } from './list-team/list-team.component';
import { ListCalendarComponent } from './list-calendar/list-calendar.component';
import { CreateCalendarComponent } from './create-calendar/create-calendar.component';
import { UpdateCalendarComponent } from './update-calendar/update-calendar.component';
import { DeleteCalendarComponent } from './delete-calendar/delete-calendar.component';

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
    ListTeamComponent,
    ListCalendarComponent,
    CreateCalendarComponent,
    UpdateCalendarComponent,
    DeleteCalendarComponent,

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

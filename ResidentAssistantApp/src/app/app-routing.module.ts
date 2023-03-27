import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInService } from './sign-in.service';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CalendarComponent } from './calendar/calendar.component';
import { OpenComponent } from './open/open.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { ListTeamComponent } from './list-team/list-team.component';
import { ListCalendarComponent } from './list-calendar/list-calendar.component';
import { CreateCalendarComponent } from './create-calendar/create-calendar.component';
import { DeleteCalendarComponent } from './delete-calendar/delete-calendar.component';
// Routing for the navigation of the app
// With the open component being the first thing to open when the app launches
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'list-team', component: ListTeamComponent },
  { path: 'list-calendar', component: ListCalendarComponent },
  { path: 'create-calendar', component: CreateCalendarComponent },
  { path: 'delete-calendar/:id', component: DeleteCalendarComponent },
  { path: 'student-database', component: ListStudentComponent },
  { path: 'open', component: OpenComponent },
  { path: '', redirectTo: 'open', pathMatch: 'full' },
  { path: 'list-students', component: ListStudentComponent },
  { path: 'display/:id', component: DisplayStudentComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

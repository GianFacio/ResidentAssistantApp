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

// Routing for the navigation of the app
// With the open component being the first thing to open when the app launches
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'calendar', component: CalendarComponent },
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

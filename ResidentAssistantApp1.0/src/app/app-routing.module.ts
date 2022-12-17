import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInService } from './sign-in.service';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StudentDatabaseComponent } from './student-database/student-database.component';
import { OpenComponent } from './open/open.component';



const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path: 'team', component: TeamComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'student-database', component: StudentDatabaseComponent },
  { path: 'open', component: OpenComponent },
  { path: '', redirectTo: 'open', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

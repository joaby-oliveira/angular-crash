import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { TasksComponent } from './pages/tasks/tasks.component';

export const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'about', component: AboutComponent },
];

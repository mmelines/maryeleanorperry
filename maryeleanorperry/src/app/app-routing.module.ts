import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './home/home.component';
import { NavigationRoutesComponent } from './navigation-routes/navigation-routes.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { WritingComponent } from './writing/writing.component';
import { VisualComponent } from './visual/visual.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  {path: 'resume', component:ResumeComponent, pathMatch: 'full'},
  {path: '', component:HomeComponent, pathMatch: 'full'},
  {path: 'navigation', component:NavigationRoutesComponent, pathMatch: 'full'},
  {path: 'writing', component:WritingComponent, pathMatch: 'full'},
  {path: 'visual', component:VisualComponent, pathMatch: 'full'},
  {path: 'about', component:AboutComponent, pathMatch: 'full'},
  {path: 'contact', component:ContactComponent, pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//module imports
import { ResumeModule } from './resume/resume.module';
//form imports
import { ResumeComponent } from './resume/resume.component';
import { NavigationComponent } from './navigation/navigation.component'
import { NavigationRoutesComponent } from './navigation-routes/navigation-routes.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, ResumeComponent, NavigationComponent, NavigationRoutesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }), ResumeModule, AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}

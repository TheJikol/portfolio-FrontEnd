import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MoonflipComponent } from './components/moonflip/moonflip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BiographyComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    MoonflipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

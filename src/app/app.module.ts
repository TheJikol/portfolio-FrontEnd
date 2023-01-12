import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BiographyComponent } from './components/biography/biography.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BiographyService } from './services/biography.service';
import { InterceptorService } from './services/interceptor.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BiographymodalComponent } from './components/dashboard/modals/biographymodal/biographymodal.component';
import { ExpmodalComponent } from './components/dashboard/modals/expmodal/expmodal.component';
import { EdumodalComponent } from './components/dashboard/modals/edumodal/edumodal.component';
import { PromodalComponent } from './components/dashboard/modals/promodal/promodal.component';
import { SkimodalComponent } from './components/dashboard/modals/skimodal/skimodal.component';
import { ContactService } from './services/contact.service';
import { EducationService } from './services/education.service';
import { ProjectService } from './services/project.service';
import { SkillService } from './services/skill.service';
import { ExperienceService } from './services/experience.service';
import { ConmodalComponent } from './components/dashboard/modals/conmodal/conmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BiographyComponent,
    ExperienceComponent,
    EducationComponent,
    ProjectsComponent,
    ContactComponent,
    SkillsComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    BiographymodalComponent,
    ExpmodalComponent,
    EdumodalComponent,
    PromodalComponent,
    SkimodalComponent,
    ConmodalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BiographyService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ContactService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ProjectService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    EducationService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    SkillService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    ExperienceService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

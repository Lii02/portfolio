import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RootComponent } from './root.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    RootComponent,
    TitlebarComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [RootComponent]
})

export class AppModule { }
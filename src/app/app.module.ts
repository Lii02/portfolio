import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { MediaComponent } from './media/media.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    ProjectComponent,
    MediaComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
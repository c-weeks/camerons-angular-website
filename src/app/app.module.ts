import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavLinkComponent } from './nav-link/nav-link.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ResumeComponent } from './pages/resume/resume.component';
import { NavSubDropdownComponent } from './nav-sub-dropdown/nav-sub-dropdown.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { BakingComponent } from './pages/baking/baking.component';
import { SliderComponent } from './slider/slider.component';
import { ClickOutsideDirective } from './layout/click-outside/click-outside.directive';
import { ChocolateComponent } from './pages/chocolate/chocolate.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLinkComponent,
    NavComponent,
    AboutComponent,
    ResumeComponent,
    PhotographyComponent,
    BakingComponent,
    ChocolateComponent,
    NavSubDropdownComponent,
    PhotographyComponent,
    SliderComponent,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

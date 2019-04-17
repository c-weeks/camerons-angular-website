import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PhotographyComponent } from './pages/photography/photography.component';
import { BakingComponent } from './pages/baking/baking.component';
import { ChocolateComponent } from './pages/chocolate/chocolate.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'hobbies/photography', component: PhotographyComponent },
  { path: 'hobbies/baking', component: BakingComponent },
  { path: 'hobbies/chocolate', component: ChocolateComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

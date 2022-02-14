import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { SurveyComponent } from './survey/survey.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {path: "", redirectTo:"disclaimer", pathMatch:"full"},
  {path: "disclaimer", component:DisclaimerComponent},
  {path: "survey", component:SurveyComponent},
  {path: "results", component:ResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

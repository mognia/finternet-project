import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ImageStepComponent} from "./components/image-step/image-step.component";
import {FormStepComponent} from "./components/form-step/form-step.component";
import {TableStepComponent} from "./components/table-step/table-step.component";
import {SummaryStepComponent} from "./components/summary-step/summary-step.component";

const appRoutes: Routes = [
  { path: '', component: ImageStepComponent },
  { path: 'second-step',component: FormStepComponent },
  { path: 'third-step',component: TableStepComponent },
  { path: 'summary',component: SummaryStepComponent },
  // { path: '',   redirectTo: '/first-step', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

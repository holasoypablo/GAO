import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './security/components/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./security/security.module').then((module) => module.SecurityModule)
  },
  {
    path: 'gao',
    loadChildren: () =>
      import('./modules/modules.module').then((module) => module.ModulesModule)
  },
  { path: '**', redirectTo: '' },
  {path:'register', component: SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

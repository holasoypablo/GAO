import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./security/security.module').then((module) => module.SecurityModule)
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/modules.module').then((module) => module.ModulesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

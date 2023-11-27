import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AliensComponent } from './pages/aliens/aliens/aliens.component';
import { AliensDetailComponent } from './pages/aliens-detail/aliens-detail/aliens-detail.component';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  { path: '', component: AliensComponent },
  { path: 'alien', component: AliensComponent },
  { path: 'alien/:id', component: AliensDetailComponent },
  { path: 'signin', component: LoginComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

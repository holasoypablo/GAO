import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { OmnitrixComponent } from '../modules/omnitrix/omnitrix.component';
import { AlienDetailComponent } from '../modules/aliens/components/alien-detail/alien-detail.component';
import { AliensListComponent } from '../modules/aliens/components/aliens-list/aliens-list.component';
import { HomeComponent } from '../modules/home/home.component';
import { ProfileComponent } from '../modules/profile/profile.component';
const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'prefix'
    },
    {
        path: 'omnitrix-status',
        component: OmnitrixComponent
    },
    {
        path: 'alien/cuatrobrazos',
        component: AlienDetailComponent
    },
    {
        path: 'alien',
        component: AliensListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'account',
        component: ProfileComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityRoutingModule { }
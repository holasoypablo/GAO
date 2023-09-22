import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AliensListComponent } from './aliens/components/aliens-list/aliens-list.component';
import { StatsComponent } from './stats/stats.component';
import { OmnitrixComponent } from './omnitrix/omnitrix.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'aliens-list', component: AliensListComponent },
            { path: 'omnitrix-status', component: OmnitrixComponent },
            { path: 'stats', component: StatsComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'stats', component: StatsComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ModulesRoutingModule { }
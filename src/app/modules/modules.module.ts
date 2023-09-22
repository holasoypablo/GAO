import { ModulesRoutingModule } from './modules-routing.model';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent
    ],
    imports: [
        ModulesRoutingModule,
    ],
    providers: [],
})
export class ModulesModule { }

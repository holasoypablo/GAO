import { ModulesRoutingModule } from './modules-routing.model';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileComponent } from './profile/profile.component';
import { OmnitrixComponent } from './omnitrix/omnitrix.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        HomeComponent,
        StatsComponent,
        ProfileComponent,
        OmnitrixComponent,
        FooterComponent
    ],
    imports: [
        ModulesRoutingModule,
    ],
    providers: [],
})
export class ModulesModule { }

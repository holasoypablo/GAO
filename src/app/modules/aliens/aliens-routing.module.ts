import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlienDetailComponent } from "./components/alien-detail/alien-detail.component";
import { AliensListComponent } from "./components/aliens-list/aliens-list.component";

const routes: Routes = [
    {
        path: '',
        component: AliensListComponent
    },
    {
        path: 'alien-detail/:id',
        component: AlienDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AliensRoutingModule { }
import { NgModule } from "@angular/core";
import { AliensListComponent } from "./components/aliens-list/aliens-list.component";
import { AlienDetailComponent } from "./components/alien-detail/alien-detail.component";
import { AlienCommentsComponent } from "./components/alien-comments/alien-comments.component";
import { AliensRoutingModule } from "./aliens-routing.module";

@NgModule({
    declarations: [
        AliensListComponent,
        AlienDetailComponent,
        AlienCommentsComponent
    ],
    imports: [
        AliensRoutingModule
    ]
})

export class AliensModule { }
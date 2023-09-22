import { NgModule } from '@angular/core';
import { SigninComponent } from './components/signin/signin.component';
import { SecurityRoutingModule } from './security-routing.module';

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        SecurityRoutingModule
    ]
})
export class SecurityModule { }
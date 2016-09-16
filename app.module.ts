import { NgModule } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { AppComponent } from './app.component';
import { routes, routableComponents } from './app.routes';
import {KivaService} from './services/kiva.service';
import {MethodComponent} from './pages/methods/components/method/method.component';

@NgModule({
    declarations: [
        AppComponent,
        MethodComponent,
        ...routableComponents,
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    providers: [
        KivaService
    ]
})
export class AppComponentModule { }

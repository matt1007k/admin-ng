import { NgModule } from '@angular/core';
// rutas
import { PAGES_ROUTER } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';


// Mòdulo
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        NopagefoundComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        NopagefoundComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTER
    ]
})
export class PagesModule { }
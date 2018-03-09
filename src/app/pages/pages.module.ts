import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// rutas
import { PAGES_ROUTER } from './pages.routes';

//ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';


// Mòdulo
import { SharedModule } from '../shared/shared.module';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        NopagefoundComponent,
        IncrementadorComponent,
        GraficaDonaComponent,
        AccountSettingsComponent
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
        PAGES_ROUTER,
        FormsModule,
        ChartsModule
    ]
})
export class PagesModule { }
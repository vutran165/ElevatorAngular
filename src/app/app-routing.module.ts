import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule'},
    // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
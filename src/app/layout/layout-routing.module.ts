import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard'},
            // { path: '', redirectTo: 'dashboard'},
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule],
})
export class LayoutRoutingModule {}
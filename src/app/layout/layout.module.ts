import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';
import { LayoutRoutingModule } from '../layout/layout-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent]
})

export class LayoutModule { }

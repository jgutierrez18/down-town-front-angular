import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TitleComponent } from '../core/components/title/title.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { SidebarComponent } from '../core/components/sidebar/sidebar.component';
import { FooterComponent } from '../core/components/footer/footer.component';


@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent, 
    TitleComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

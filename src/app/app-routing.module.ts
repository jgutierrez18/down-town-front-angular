import { DashboardModule } from './@admin/pages/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:() => import('./@public/pages/home/home.module')
          .then(m => m.HomeModule)
  },
  {
    path: 'contact',
    loadChildren:() => import('./@public/pages/contact/contact.module')
          .then(m => m.ContactModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: true,
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

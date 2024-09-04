import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'internal-server-error',
    title: 'Internal Server Error',
    loadComponent: () => import('./internal-server-error/internal-server-error.component').then(c => c.InternalServerErrorComponent)
  },
  {
    path: 'forbidden',
    title: 'Forbidden',
    loadComponent: () => import('./forbidden/forbidden.component').then(c => c.ForbiddenComponent)
  },
  {
    path: 'not-found',
    title: 'Not Found',
    loadComponent: () => import('./not-found/not-found.component').then(c => c.NotFoundComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }

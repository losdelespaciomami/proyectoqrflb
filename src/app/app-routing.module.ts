import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./page/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./page/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./page/generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./page/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'docenteinicio',
    loadChildren: () => import('./page/docenteinicio/docenteinicio.module').then( m => m.DocenteinicioPageModule)
  },
  {
    path: 'cursosdocente',
    loadChildren: () => import('./page/cursosdocente/cursosdocente.module').then( m => m.CursosdocentePageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./page/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'reprobados',
    loadChildren: () => import('./page/reprobados/reprobados.module').then( m => m.ReprobadosPageModule)
  },
  {
    path: 'asistenciaalumno',
    loadChildren: () => import('./page/asistenciaalumno/asistenciaalumno.module').then( m => m.AsistenciaalumnoPageModule)
  },
  {
    path: 'scanearqr',
    loadChildren: () => import('./page/scanearqr/scanearqr.module').then( m => m.ScanearqrPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

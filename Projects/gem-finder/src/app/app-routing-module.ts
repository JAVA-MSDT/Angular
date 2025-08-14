import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profile/:id',
    loadComponent: () => import('./pages/profile/profile').then(c => c.Profile),
    title: (route: ActivatedRouteSnapshot) => `Gem Finder | Profile: ${route.paramMap.get('id')}`
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players-module').then(m => m.PlayersModule),
    title: 'Gem Finder | All Players',
    data: { preload: true }
  },
  {
    path: 'leaderboards',
    loadChildren: () => import('./pages/leaderboards/leaderboards-module').then(m => m.LeaderboardsModule),
    title: 'Gem Finder | Leaderboards'
  },
  {
    path: '',
    redirectTo: `/players`,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/players'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

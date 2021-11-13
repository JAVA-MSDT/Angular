import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ROUTER_PATH } from './appConfig/router-path-const';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';

export const routes: Routes = [
  { path: ROUTER_PATH.homePage, component: HomePageComponent },
  { path: ROUTER_PATH.loginPage, component: LoginComponent },
  {
    path: ROUTER_PATH.coursesPage,
    canActivate: [AuthGuard],
    component: CoursesComponent,
  },
  {
    path: ROUTER_PATH.coursesPage + '/:id',
    canActivate: [AuthGuard],
    component: CourseDetailsComponent,
  },
  { path: ROUTER_PATH.invalidPage, component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  HomePageComponent,
  LoginComponent,
  CoursesComponent,
  CourseDetailsComponent,
  PageNotFoundComponent,
];

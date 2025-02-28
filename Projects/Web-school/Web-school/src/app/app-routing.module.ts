import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { ROUTER_PATH } from './appConfig/router-path-const';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/guard/auth.guard';
import { CoursesComponent } from './course/courses/courses.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { BREADCRUMB_CONST } from './appConfig/breadcrumb-const';

export const routes: Routes = [
  {
    path: ROUTER_PATH.homePage,
    component: HomePageComponent,
    data: { breadcrumb: BREADCRUMB_CONST.HOME },
  },
  {
    path: ROUTER_PATH.loginPage,
    component: LoginComponent,
    data: { breadcrumb: BREADCRUMB_CONST.LOGIN },
  },
  {
    path: ROUTER_PATH.coursesPage,
    data: { breadcrumb: BREADCRUMB_CONST.COURSES },
    children: [
      {
        path: ROUTER_PATH.homePage,
        canActivate: [AuthGuard],
        component: CoursesComponent,
        data: { breadcrumb: null },
      },
      {
        path: `${ROUTER_PATH.courseAdd}`,
        canActivate: [AuthGuard],
        component: CourseDetailsComponent,
        data: { breadcrumb: BREADCRUMB_CONST.NEW_COURSE },
      },
      {
        path: ROUTER_PATH.id,
        canActivate: [AuthGuard],
        component: CourseDetailsComponent,
        data: { breadcrumb: BREADCRUMB_CONST.EDIT_COURSE},
      },
    ],
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

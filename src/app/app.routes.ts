import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CowadoptionComponent } from './pages/cowadoption/cowadoption.component';
import { DonationComponent } from './pages/donation/donation.component';
import { EventsComponent } from './pages/events/events.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
   {
    path:'',redirectTo:'login',pathMatch:'full'
   },
   {
    path:'login',component:LoginComponent
   },
   {
    path:'',component:LayoutComponent,
    children:[
        {
            path:'dashboard',component:DashboardComponent
        },
        {
            path:'cowadoption',component:CowadoptionComponent
        },
        {
            path:'donation',component:DonationComponent
        },
        {
            path:'events',component:EventsComponent
        },
        {
            path:'about',component:AboutComponent
        }
    ]
   }
];

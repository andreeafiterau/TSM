﻿import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_components/home';
import { LoginComponent } from './_components/login';
import { RegisterComponent } from './_components/register';
import { AuthGuard } from './_guards';
import {ChangePasswordComponent} from './_components/change-password/change-password.component';
import { AddTimesheetComponent } from './_components/add-timesheet/add-timesheet.component';
import {ViewPersonalTimesheetsComponent} from './_components/view-personal-timesheets/view-personal-timesheets.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'changePassword', component: ChangePasswordComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'addTimesheet', component: AddTimesheetComponent },
    { path: 'viewPersonalTimesheets', component: ViewPersonalTimesheetsComponent }   ,

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
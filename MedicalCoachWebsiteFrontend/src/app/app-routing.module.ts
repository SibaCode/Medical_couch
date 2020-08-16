import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from "src/app/layouts/client/client.component";

import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/helpers/auth.guard';
// import { AuthGuard } from './helpers';
// import { ClientModule} from'./layouts/client/client.module';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', redirectTo: '/client', pathMatch: 'full' },
    // { path: 'client', loadChildren: () => import('src/app/layouts/client/client.module').then(m => m.ClientModule) },
    { path: "client", component: ClientComponent },

    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    // { path: 'account', loadChildren: accountModule },
    //
    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule ]
})
export class AppRoutingModule { }

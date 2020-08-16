import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AccountModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
// used to create fake backend
// import { fakeBackendProvider } from 'src/app/helpers'/;

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from 'src/app/helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/helpers/error.interceptor';

import { AppComponent } from './app.component';
import { AlertComponent } from './components/alert.component';
import { HomeComponent } from './home/home.component';
import { AccountModule } from 'src/app/account/account.module';
import { UsersModule } from 'src/app/users/users.module';
import { ClientModule } from 'src/app/layouts/client/client.module';

import { ClientComponent } from './layouts/client/client.component';
// import { LayoutComponent } from 'src/app/account/layout.component';

@NgModule({
    imports: [
      FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AccountModule,
        UsersModule,
        ClientModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        ClientComponent,
      //  LayoutComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };

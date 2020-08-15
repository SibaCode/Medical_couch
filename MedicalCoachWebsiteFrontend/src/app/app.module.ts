import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AccountModule } from '@angular/forms';

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
// import { LayoutComponent } from 'src/app/account/layout.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        AccountModule,
        UsersModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
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

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientComponent } from "./client.component";
import { HomeComponent } from "src/app/home/home.component";

import { LandingComponent } from "src/app/components/landing/landing.component";
import { LoginComponent } from "src/app/components/login/login.component";
const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      { path: "", component: HomeComponent },
      // { path: "/home", component: HomeComponent },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}

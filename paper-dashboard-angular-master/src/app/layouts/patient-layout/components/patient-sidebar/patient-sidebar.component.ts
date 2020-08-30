import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/patient/dashboard',     title: 'Find Doctors',         icon:'nc-bank',       class: '' },
    // { path: '/patient/booking',       title: 'Make Booking',         icon:'nc-bank',    class: '' },
    { path: '/patient/appointments',          title: 'Appointments ',      icon:'nc-single-02',  class: '' },
    { path: '/patient/profile',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/logout',          title: 'Login',      icon:'fa fa-pencil',  class: '' },
];
@Component({
  // selector: 'app-patient-sidebar',
  selector: 'patient-sidebar-cmp',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.css']
})
export class PatientSidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}

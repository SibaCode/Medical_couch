import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/Doctor/dashboard',     title: 'Find Doctors',         icon:'nc-bank',       class: '' },
    // { path: '/booking',       title: 'Make Booking',         icon:'nc-bank',    class: '' },
    { path: '/doctor/appointments',          title: 'Appointments ',      icon:'nc-single-02',  class: '' },
  { path: '/doctor/profile',          title: ' Profile',      icon:'nc-single-02',  class: '' },
  { path: '/doctor/practice-profile',          title: ' Profile',      icon:'nc-single-02',  class: '' },

    // { path: '/login',          title: 'Login',      icon:'nc-single-02',  class: '' },
];
@Component({
  // selector: 'app-doctor-sidebar',
  selector: 'doctor-sidebar-cmp',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.css']
})
export class DoctorSidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-patient-layout-patient-layout-module"],{

/***/ "./src/app/layouts/patient-layout/patient-layout.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layouts/patient-layout/patient-layout.module.ts ***!
  \*****************************************************************/
/*! exports provided: PatientLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientLayoutModule", function() { return PatientLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _patient_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-layout.routing */ "./src/app/layouts/patient-layout/patient-layout.routing.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");






// import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
// import { AppointmentsComponent } from '../../pages/PatientDashboard/appointments/appointments.component';
// import { ProfileComponent } from '../../pages/PatientDashboard/profile/profile.component';
// import { UserComponent }            from '../../pages/user/user.component';
// import { TableComponent }           from '../../pages/table/table.component';
// import { TypographyComponent }      from '../../pages/typography/typography.component';
// import { IconsComponent }           from '../../pages/icons/icons.component';
// import { MapsComponent }            from '../../pages/maps/maps.component';
// import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
// import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

// import { PatientSidebarComponent } from './components/patient-sidebar/patient-sidebar.component';
// import { PatientNavbarComponent } from './components/patient-navbar/patient-navbar.component';
let PatientLayoutModule = class PatientLayoutModule {
};
PatientLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_patient_layout_routing__WEBPACK_IMPORTED_MODULE_5__["PatientLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ],
        declarations: [
        // DashboardComponent,
        // AppointmentsComponent,
        // ProfileComponent
        // PatientSidebarComponent,
        // PatientNavbarComponent,
        // UserComponent,
        // TableComponent,
        // UpgradeComponent,
        // TypographyComponent,
        // IconsComponent,
        // MapsComponent,
        // NotificationsComponent,
        ]
    })
], PatientLayoutModule);



/***/ }),

/***/ "./src/app/layouts/patient-layout/patient-layout.routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/patient-layout/patient-layout.routing.ts ***!
  \******************************************************************/
/*! exports provided: PatientLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientLayoutRoutes", function() { return PatientLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_PatientDashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/PatientDashboard/dashboard/dashboard.component */ "./src/app/pages/PatientDashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_PatientDashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/PatientDashboard/booking/booking.component */ "./src/app/pages/PatientDashboard/booking/booking.component.ts");
/* harmony import */ var _pages_PatientDashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/PatientDashboard/appointments/appointments.component */ "./src/app/pages/PatientDashboard/appointments/appointments.component.ts");
/* harmony import */ var _pages_PatientDashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/PatientDashboard/profile/profile.component */ "./src/app/pages/PatientDashboard/profile/profile.component.ts");





// import { TableComponent } from '../../pages/table/table.component';
// import { TypographyComponent } from '../../pages/typography/typography.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { NotificationsComponent } from '../../pages/notifications/notifications.component';
// import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
const PatientLayoutRoutes = [
    { path: 'dashboard', component: _pages_PatientDashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'booking', component: _pages_PatientDashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_2__["BookingComponent"] },
    { path: 'appointments', component: _pages_PatientDashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentsComponent"] },
    { path: 'profile', component: _pages_PatientDashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
];


/***/ })

}]);
//# sourceMappingURL=layouts-patient-layout-patient-layout-module-es2015.js.map
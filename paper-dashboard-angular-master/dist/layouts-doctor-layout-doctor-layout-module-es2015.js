(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-doctor-layout-doctor-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/appointments/appointments.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/appointments/appointments.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Main Wrapper -->\n        <div class=\"main-wrapper\">\n\n          <div class=\"\">\n        \t\t\t\t<div class=\"\">\n                  <div class=\"col-md-12 col-lg-12 col-xl-12\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"card\">\n                          <div class=\"card-header\">\n                            <!-- <h4 class=\"card-t?itle\"> Simple Table</h4> -->\n                          </div>\n                          <div class=\"card-body\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                  <th>Patient Name</th>\n                                  <th>Appt Date</th>\n                                  <th>Notes</th>\n                                  <th>Practice Name</th>\n                                  <th>Status</th>\n                                    <th>Action</th>\n                                </thead>\n                                <tbody>\n                                  <tr>\n                                    <td>\n                                      Dakota Rice\n                                    </td>\n                                    <td>11 Nov 2019 <span class=\"d-block text-info\">10.00 AM - 11-00 AM</span></td>\n                                    <td>General</td>\n                                    <td> PTA Branch</td>\n                                    <td> <button type=\"button\" class=\"btn bg-info-light btn-sm\" id=\"topup_status\">Completed</button></td>\n                                    <td class=\"\">\n                                      <div class=\"table-action\">\n\n                                        <!-- <a class=\"btn btn-sm bg-info-light\" routerLink=\"/booking\"><i class=\"fa fa-eye\"></i> View</a> -->\n                                        <a class=\"btn btn-sm bg-info-light\" (click)=\"open(mymodal)\"><i class=\"fa fa-eye\"></i> View</a>\n\n                                      <ng-template #mymodal let-modal>\n                                          <div class=\"modal-header\">\n                                            <h4 class=\"modal-title\" id=\"modal-basic-title\">Appointment Details</h4>\n                                            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                                              <span aria-hidden=\"true\">×</span>\n                                            </button>\n                                          </div>\n                                          <div class=\"modal-body\">\n                                                <ul class=\"info-details\">\n\n                                                  <li>\n                                                    <span class=\"title\">Patient Name:</span>\n                                                    <span class=\"text\">Siba</span>\n                                                  </li>\n                                                  <li>\n                                                    <span class=\"title\">Confirm Date:</span>\n                                                    <span class=\"text\">29 Jun 2019</span>\n                                                  </li>\n                                                  <li>\n                                                    <span class=\"title\">Notes</span>\n                                                    <span class=\"text\">Flue</span>\n                                                  </li>\n                                                </ul>\n                                              </div>\n\n                                          <div class=\"modal-footer\">\n                                            <a href=\"javascript:void(0);\" class=\"btn btn-sm bg-info-light\">\n                        \t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-check\"></i> Accept\n                        \t\t\t\t\t\t\t\t\t\t</a>\n                        \t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-sm bg-danger-light\">\n                        \t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-times\"></i> Cancel\n                        \t\t\t\t\t\t\t\t\t\t</a>\n                                          </div>\n                                        </ng-template>\n                                      </div>\n                                    </td>\n                                  </tr>\n\n\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n\n  \t\t\t\t\t\t</div>\n        \t\t\t\t</div>\n\n        \t\t\t</div>\n\n\n        </div>\n\t\t<!-- /Main Wrapper -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/profile/profile.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/profile/profile.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n            <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                <div class=\"card card-user\">\n                  <div class=\"card-header\">\n                    <h5 class=\"card-title\">Edit Profile</h5>\n                  </div>\n                  <div class=\"card-body\">\n                    <form>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                <div class=\"change-avatar\">\n                                  <div class=\"profile-img\">\n                                    <img src=\"assets/images/doctors/Doctor-01.jpeg\" alt=\"User Image\">\n                                  </div>\n\n                                  <div class=\"upload-img\">\n                                    <div class=\"change-photo-btn\">\n                                      <button class=\"btn btn-primary btn-round\"><i class=\"fa fa-upload\"></i> Upload Photo</button>\n\n                                      <input type=\"file\" class=\"upload\">\n                                    </div>\n\n                                    <small class=\"form-text text-muted\">Allowed JPG, GIF or PNG. Max size of 2MB</small>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-6 pr-1\">\n                          <div class=\"form-group\">\n                            <label>First Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Chet\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-6 pl-1\">\n                          <div class=\"form-group\">\n                            <label>Last Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Faker\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <label>Address</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-4 pr-1\">\n                          <div class=\"form-group\">\n                            <label>City</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Melbourne\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 px-1\">\n                          <div class=\"form-group\">\n                            <label>Country</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Australia\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 pl-1\">\n                          <div class=\"form-group\">\n                            <label>Postal Code</label>\n                            <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"update ml-auto mr-auto\">\n                          <button type=\"submit\" class=\"btn btn-primary btn-round\">Update Profile</button>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n");

/***/ }),

/***/ "./src/app/layouts/doctor-layout/doctor-layout.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layouts/doctor-layout/doctor-layout.module.ts ***!
  \***************************************************************/
/*! exports provided: DoctorLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorLayoutModule", function() { return DoctorLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _doctor_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doctor-layout.routing */ "./src/app/layouts/doctor-layout/doctor-layout.routing.ts");







// import { DoctorSidebarComponent } from './components/doctor-sidebar/doctor-sidebar.component';
// import { DoctorNavbarComponent } from './components/doctor-navbar/doctor-navbar.component';
let DoctorLayoutModule = class DoctorLayoutModule {
};
DoctorLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_doctor_layout_routing__WEBPACK_IMPORTED_MODULE_6__["DoctorLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]
    })
], DoctorLayoutModule);



/***/ }),

/***/ "./src/app/layouts/doctor-layout/doctor-layout.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/doctor-layout/doctor-layout.routing.ts ***!
  \****************************************************************/
/*! exports provided: DoctorLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorLayoutRoutes", function() { return DoctorLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_DoctorDashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/DoctorDashboard/appointments/appointments.component */ "./src/app/pages/DoctorDashboard/appointments/appointments.component.ts");
/* harmony import */ var _pages_DoctorDashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/DoctorDashboard/profile/profile.component */ "./src/app/pages/DoctorDashboard/profile/profile.component.ts");
/* harmony import */ var _pages_DoctorDashboard_practice_profile_practice_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/DoctorDashboard/practice-profile/practice-profile.component */ "./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.ts");




const DoctorLayoutRoutes = [
    { path: '', component: _pages_DoctorDashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_1__["AppointmentsComponent"] },
    { path: 'profile', component: _pages_DoctorDashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'practice-profile', component: _pages_DoctorDashboard_practice_profile_practice_profile_component__WEBPACK_IMPORTED_MODULE_3__["PracticeProfileComponent"] },
];


/***/ }),

/***/ "./src/app/pages/DoctorDashboard/appointments/appointments.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/DoctorDashboard/appointments/appointments.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJEb2N0b3JEYXNoYm9hcmQvYXBwb2ludG1lbnRzL2FwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/DoctorDashboard/appointments/appointments.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/DoctorDashboard/appointments/appointments.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



let AppointmentsComponent = class AppointmentsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
AppointmentsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
AppointmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/appointments/appointments.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appointments.component.css */ "./src/app/pages/DoctorDashboard/appointments/appointments.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
], AppointmentsComponent);



/***/ }),

/***/ "./src/app/pages/DoctorDashboard/profile/profile.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/DoctorDashboard/profile/profile.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJEb2N0b3JEYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/DoctorDashboard/profile/profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/DoctorDashboard/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/DoctorDashboard/profile/profile.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProfileComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-doctor-layout-doctor-layout-module-es2015.js.map
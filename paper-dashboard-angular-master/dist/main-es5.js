function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminLayoutAdminLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <sidebar-cmp></sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <footer-cmp></footer-cmp>\n    </div>\n</div>\n<fixedplugin-cmp></fixedplugin-cmp>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/components/sidebar/sidebar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/components/sidebar/sidebar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminLayoutComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/angular2-logo.png\">\n      </div>\n    </a>\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\n      Creative Timnhjg\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDoctorLayoutComponentsDoctorNavbarDoctorNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n\n      <ul class=\"navbar-nav\">\n\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-single-02\"></i>Sibahlehhhgvh\n\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDoctorLayoutComponentsDoctorSidebarDoctorSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\" width=\"1500px\">\n        <img src=\"assets/images/logo.png\" >\n\n      </div>\n    </a>\n    <a  class=\"simple-text logo-normal\">\n      Medical Couch\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/doctor-layout.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/doctor-layout.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsDoctorLayoutDoctorLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <doctor-sidebar-cmp></doctor-sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <doctor-navbar-cmp></doctor-navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <!-- <footer-cmp></footer-cmp> -->\n    </div>\n</div>\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/navbar/navbar.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/navbar/navbar.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsPatientLayoutComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}ugyug</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n      <form>\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <div class=\"input-group-append\">\n            <div class=\"input-group-text\">\n              <i class=\"nc-icon nc-zoom-split\"></i>\n            </div>\n          </div>\n        </div>\n      </form>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-layout-11\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Stats</span>\n            </p>\n          </a>\n        </li>\n\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\" >\n            <i class=\"nc-icon nc-bell-55\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\n            </p>\n          </a>\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\n            <p>\n              <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsPatientLayoutComponentsPatientNavbarPatientNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\">\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\"\n      [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n\n      <ul class=\"navbar-nav\">\n\n\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-rotate\" routerLink=\"/patient/profile\">\n            <i class=\"nc-icon nc-single-02\"></i>{{user.name}} {{user.surname}}\n\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsPatientLayoutComponentsPatientSidebarPatientSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\" width=\"1500px\">\n        <img src=\"assets/images/logo.png\" >\n\n      </div>\n    </a>\n    <a  class=\"simple-text logo-normal\">\n      Medical Couch\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/sidebar/sidebar.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/sidebar/sidebar.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsPatientLayoutComponentsSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"sidebar-wrapper\">\n  <div class=\"logo\">\n    <a href=\"http://www.creative-tim.com\" class=\"simple-text logo-mini\">\n      <div class=\"logo-image-small\">\n        <img src=\"assets/img/angular2-logo.png\">\n      </div>\n    </a>\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\n      Creative TESTINF\n    </a>\n  </div>\n    <ul class=\"nav\">\n        <li *ngFor=\"let menuItem of menuItems\" routerLinkActive=\"active\" class=\"{{menuItem.class}}\">\n            <a [routerLink]=\"[menuItem.path]\">\n                <i class=\"nc-icon {{menuItem.icon}}\"></i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/patient-layout.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/patient-layout.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsPatientLayoutPatientLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\n        <patient-sidebar-cmp></patient-sidebar-cmp>\n    </div>\n    <div class=\"main-panel\">\n        <patient-navbar-cmp></patient-navbar-cmp>\n        <div class=\"content\">\n            <router-outlet></router-outlet>\n        </div>\n        <!-- <footer-cmp></footer-cmp> -->\n    </div>\n</div>\n<!-- <fixedplugin-cmp></fixedplugin-cmp> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorDashboardPracticeProfilePracticeProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-7 col-lg-8 col-xl-9\">\n\n\t\t\t\t\t\t\t<!-- Basic Information -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Basic Information</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"row form-row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"change-avatar\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"profile-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/doctors/doctor-thumb-02.jpg\" alt=\"User Image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-img\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"change-photo-btn\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span><i class=\"fa fa-upload\"></i> Upload Photo</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" class=\"upload\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">Allowed JPG, GIF or PNG. Max size of 2MB</small>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Username <span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Email <span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" readonly>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>First Name <span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Last Name <span class=\"text-danger\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Phone Number</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Gender</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<select class=\"form-control select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Male</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<option>Female</option>\n\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Date of Birth</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Basic Information -->\n\n\t\t\t\t\t\t\t<!-- About Me -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">About Me</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t\t\t\t\t\t<label>Biography</label>\n\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /About Me -->\n\n\t\t\t\t\t\t\t<!-- Clinic Info -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Clinic Info</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"row form-row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Clinic Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Clinic Address</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Clinic Images</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<form action=\"#\" class=\"dropzone\"></form>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-wrap\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-images\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/features/feature-01.jpg\" alt=\"Upload Image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-icon btn-danger btn-sm\"><i class=\"far fa-trash-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"upload-images\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/features/feature-02.jpg\" alt=\"Upload Image\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"btn btn-icon btn-danger btn-sm\"><i class=\"far fa-trash-alt\"></i></a>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Clinic Info -->\n\n\t\t\t\t\t\t\t<!-- Contact Details -->\n\t\t\t\t\t\t\t<div class=\"card contact-card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Contact Details</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"row form-row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Address Line 1</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Address Line 2</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">City</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">State / Province</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Country</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"control-label\">Postal Code</label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Contact Details -->\n\n\t\t\t\t\t\t\t<!-- Pricing -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Pricing</h4>\n\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"pricing_select\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"price_free\" name=\"rating_option\" class=\"custom-control-input\" value=\"price_free\" checked>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"price_free\">Free</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"custom-control custom-radio custom-control-inline\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" id=\"price_custom\" name=\"rating_option\" value=\"custom_price\" class=\"custom-control-input\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"price_custom\">Custom Price (per hour)</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"row custom_price_cont\" id=\"custom_price_cont\" style=\"display: none;\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"custom_rating_input\" name=\"custom_rating_count\" value=\"\" placeholder=\"20\">\n\t\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">Custom price you can add</small>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Pricing -->\n\n\t\t\t\t\t\t\t<!-- Services and Specialization -->\n\t\t\t\t\t\t\t<div class=\"card services-card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Services and Specialization</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Services</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" data-role=\"tagsinput\" class=\"input-tags form-control\" placeholder=\"Enter Services\" name=\"services\" value=\"Tooth cleaning \" id=\"services\">\n\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">Note : Type & Press enter to add new services</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mb-0\">\n\t\t\t\t\t\t\t\t\t\t<label>Specialization </label>\n\t\t\t\t\t\t\t\t\t\t<input class=\"input-tags form-control\" type=\"text\" data-role=\"tagsinput\" placeholder=\"Enter Specialization\" name=\"specialist\" value=\"Children Care,Dental Care\" id=\"specialist\">\n\t\t\t\t\t\t\t\t\t\t<small class=\"form-text text-muted\">Note : Type & Press  enter to add new specialization</small>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Services and Specialization -->\n\n\t\t\t\t\t\t\t<!-- Education -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Education</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"education-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row education-cont\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-10 col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Degree</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>College/Institute</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Year of Completion</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"add-more\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"add-education\"><i class=\"fa fa-plus-circle\"></i> Add More</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Education -->\n\n\t\t\t\t\t\t\t<!-- Experience -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Experience</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"experience-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row experience-cont\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-10 col-lg-11\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Hospital Name</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>From</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>To</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Designation</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"add-more\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"add-experience\"><i class=\"fa fa-plus-circle\"></i> Add More</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Experience -->\n\n\t\t\t\t\t\t\t<!-- Awards -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Awards</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"awards-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row awards-cont\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Awards</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Year</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"add-more\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"add-award\"><i class=\"fa fa-plus-circle\"></i> Add More</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Awards -->\n\n\t\t\t\t\t\t\t<!-- Memberships -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Memberships</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"membership-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row membership-cont\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-10 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Memberships</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"add-more\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"add-membership\"><i class=\"fa fa-plus-circle\"></i> Add More</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Memberships -->\n\n\t\t\t\t\t\t\t<!-- Registrations -->\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\t\t<h4 class=\"card-title\">Registrations</h4>\n\t\t\t\t\t\t\t\t\t<div class=\"registrations-info\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row form-row reg-cont\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Registrations</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12 col-md-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Year</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"add-more\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0);\" class=\"add-reg\"><i class=\"fa fa-plus-circle\"></i> Add More</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- /Registrations -->\n\n\t\t\t\t\t\t\t<div class=\"submit-section submit-btn-bottom\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary submit-btn\">Save Changes</button>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n            <div class=\"row\">\n\n              <div class=\"col-md-12\">\n                <div class=\"card card-user\">\n                  <div class=\"card-header\">\n                    <h5 class=\"card-title\">Edit Profile</h5>\n                  </div>\n                  <div class=\"card-body\">\n                    <form>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                <div class=\"change-avatar\">\n                                  <div class=\"profile-img\">\n                                    <img src=\"assets/images/doctors/Doctor-01.jpeg\" alt=\"User Image\">\n                                  </div>\n\n                                  <div class=\"upload-img\">\n                                    <div class=\"change-photo-btn\">\n                                      <button class=\"btn btn-primary btn-round\"><i class=\"fa fa-upload\"></i> Upload Photo</button>\n\n                                      <input type=\"file\" class=\"upload\">\n                                    </div>\n\n                                    <small class=\"form-text text-muted\">Allowed JPG, GIF or PNG. Max size of 2MB</small>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-6 pr-1\">\n                          <div class=\"form-group\">\n                            <label>Clinic Name</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Company\" value=\"Chet\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-6 pl-1\">\n                          <div class=\"form-group\">\n                            <label>Clinic Address</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" value=\"Faker\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                            <label>Address</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Home Address\" value=\"Melbourne, Australia\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-4 pr-1\">\n                          <div class=\"form-group\">\n                            <label>City</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"City\" value=\"Melbourne\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 px-1\">\n                          <div class=\"form-group\">\n                            <label>Country</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Country\" value=\"Australia\">\n                          </div>\n                        </div>\n                        <div class=\"col-md-4 pl-1\">\n                          <div class=\"form-group\">\n                            <label>Postal Code</label>\n                            <input type=\"number\" class=\"form-control\" placeholder=\"ZIP Code\">\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"row\">\n                        <div class=\"update ml-auto mr-auto\">\n                          <button type=\"submit\" class=\"btn btn-primary btn-round\">Update Profile</button>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/appointments/appointments.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/appointments/appointments.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientDashboardAppointmentsAppointmentsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main Wrapper -->\n        <div class=\"main-wrapper\">\n\n          <div class=\"\">\n        \t\t\t\t<div class=\"\">\n                  <div class=\"col-md-12 col-lg-12 col-xl-12\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\">\n                        <div class=\"card\">\n                          <div class=\"card-header\">\n                            <!-- <h4 class=\"card-t?itle\"> Simple Table</h4> -->\n                          </div>\n                          <div class=\"card-body\">\n                            <div class=\"table-responsive\">\n                              <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                  <th>Doctors Name</th>\n                                  <th>Appt Date</th>\n                                  <th>Notes</th>\n                                  <th>Practice Name</th>\n                                  <th>Status</th>\n                                    <th>Action </th>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let app of appointment\">\n                                    <td>\n                                      {{app.doctor}}\n                                    </td>\n                                    <td>{{app.date}} <span class=\"d-block text-info\">10.00 AM - 11-00 AM</span></td>\n                                    <td>{{ app.symptoms }}</td>\n                                    <td> {{app.pratice}}</td>\n                                    <td> <button type=\"button\" class=\"btn bg-info-light btn-sm\" id=\"topup_status\">Completed</button></td>\n                                    <td> <button type=\"button\" class=\"btn bg-info-light btn-sm\" id=\"topup_status\">Approved</button></td>\n                                    <td> <button type=\"button\" class=\"btn bg-info-light btn-sm\" id=\"topup_status\">Pending</button></td>\n                                    <td> <button type=\"button\" class=\"btn bg-danger-light btn-sm\" id=\"topup_status\">Cancel</button></td>\n\n                                    <td class=\"\">\n                                      <div class=\"table-action\">\n                                        <a class=\"btn btn-sm bg-info-light\" routerLink=\"/patient/booking\"><i class=\"fa fa-pencil\"></i> Edit</a>\n                                      \n                                      </div>\n\n                                    </td>\n                                  </tr>\n\n\n                                </tbody>\n                              </table>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n\n  \t\t\t\t\t\t</div>\n        \t\t\t\t</div>\n\n        \t\t\t</div>\n\n\n        </div>\n\t\t<!-- /Main Wrapper -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/booking/booking.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/booking/booking.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientDashboardBookingBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Previous\n      </div>\n      <div\n        class=\"btn btn-outline-secondary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\"\n      >\n        Today\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\n      >\n        Next\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Month)\"\n        [class.active]=\"view === CalendarView.Month\"\n      >\n        Month\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Week)\"\n        [class.active]=\"view === CalendarView.Week\"\n      >\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary\"\n        (click)=\"setView(CalendarView.Day)\"\n        [class.active]=\"view === CalendarView.Day\"\n      >\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"CalendarView.Month\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"CalendarView.Week\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"CalendarView.Day\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\n  >\n  </mwl-calendar-day-view>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientDashboardDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Main Wrapper -->\n        <div class=\"main-wrapper\">\n\n\n          <div class=\"\">\n        \t\t\t\t<div class=\"\">\n        \t\t\t\t\t<div class=\"row\">\n\n        \t\t\t\t\t\t<div class=\"col-md-12 col-lg-12 col-xl-12\" >\n        \t\t\t\t\t\t\t<div class=\"row row-grid\">\n        \t\t\t\t\t\t\t\t<div class=\"col-md-6 col-lg-4 col-xl-3\" *ngFor=\"let practice of practices\">\n                          <div class=\"profile-widget\">\n        \t\t\t\t\t\t\t\t\t\t<div class=\"doc-img\">\n        \t\t\t\t\t\t\t\t\t\t\t<a>\n        \t\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-fluid\" alt=\"User Image\" src=\"assets/images/doctors/Doctor-01.jpeg\">\n        \t\t\t\t\t\t\t\t\t\t\t</a>\n\n        \t\t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t\t\t<div class=\"pro-content\">\n        \t\t\t\t\t\t\t\t\t\t\t<h3 class=\"title\">\n        \t\t\t\t\t\t\t\t\t\t\t\t<a >Dr {{ practice.Dr_surname }}</a>\n        \t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fas fa-check-circle verified\"></i> -->\n        \t\t\t\t\t\t\t\t\t\t\t</h3>\n        \t\t\t\t\t\t\t\t\t\t\t<!-- <p class=\"speciality\">MDS - Periodontology and Oral Implantology, BDS</p> -->\n        \t\t\t\t\t\t\t\t\t\t\t<div class=\"rating\">\n        \t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star filled\"></i>\n        \t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star fildashboardled\"></i>\n        \t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star filled\"></i>\n        \t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star filled\"></i>\n        \t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star filled\"></i>\n        \t\t\t\t\t\t\t\t\t\t\t\t<span class=\"d-inline-block average-rating\">(17)</span>\n        \t\t\t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t\t\t\t<ul class=\"available-info\">\n        \t\t\t\t\t\t\t\t\t\t\t\t<li>\n        \t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-map-marker\"></i> {{ practice.practice_address}}\n        \t\t\t\t\t\t\t\t\t\t\t\t</li>\n        \t\t\t\t\t\t\t\t\t\t\t\t<li>\n        \t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i> {{practice.number}}\n        \t\t\t\t\t\t\t\t\t\t\t\t</li>\n        \t\t\t\t\t\t\t\t\t\t\t\t<li>\n        \t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <i class=\"fas fa-li\"></i> $300 - $1000 <i class=\"fas fa-info-circle\" data-toggle=\"tooltip\" title=\"Lorem Ipsum\"></i> -->\n        \t\t\t\t\t\t\t\t\t\t\t\t</li>\n        \t\t\t\t\t\t\t\t\t\t\t</ul>\n        \t\t\t\t\t\t\t\t\t\t\t<div class=\"row row-sm\">\n\n        \t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-12\">\n        \t\t\t\t\t\t\t\t\t\t\t\t\t<a routerLink=\"/patient/booking\"class=\"btn book-btn btn-block btn-outline-primary active\">Book Now</a>\n        \t\t\t\t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t\t\t</div>\n\n        \t\t\t\t\t\t\t</div>\n        \t\t\t\t\t\t</div>\n        \t\t\t\t\t</div>\n        \t\t\t\t</div>\n\n        \t\t\t</div>\n\n\n        </div>\n\t\t<!-- /Main Wrapper -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/profile/profile.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/profile/profile.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientDashboardProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"row\">\n\n  <div class=\"col-md-12\">\n    <div class=\"card card-user\">\n      <div class=\"card-header\">\n        <h5 class=\"card-title\">{{user.name}} {{user.surname}}</h5>\n      </div>\n      <div class=\"card-body\">\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"update()\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <div class=\"change-avatar\">\n                      <div class=\"profile-img\">\n                        <img src=\"assets/images/doctors/Doctor-01.jpeg\" alt=\"User Image\">\n                      </div>\n                      <div class=\"upload-img\">\n                        <div class=\"change-photo-btn\">\n                          <button class=\"btn btn-primary btn-round\"><i class=\"fa fa-upload\"></i> Upload Photo</button>\n\n                          <input type=\"file\" class=\"upload\">\n                        </div>\n                        <small class=\"form-text text-muted\">Allowed JPG, GIF or PNG. Max size of 2MB</small>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                </div>\n                <div class=\"row\">\n                <div class=\"col-md-4 pr-1\">\n                  <div class=\"form-group\">\n                    <label>Title </label>\n                    <select class=\"form-control select\">\n                             <option>Mr</option>\n                             <option>Miss</option>\n                             <option>Mrs</option>\n                             <option>Prof</option>\n                             <option>Dr</option>\n                           </select>\n                  </div>\n                </div>\n                <div class=\"col-md-5 pr-1\">\n                  <div class=\"form-group\">\n                    <label>First Name</label>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n                  </div>\n                </div>\n\n                  <div class=\"col-md-3 pr-1\">\n                    <div class=\"form-group\">\n                      <label>Last Name</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"surname\">\n                    </div>\n                  </div>\n\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 pr-1\">\n              <div class=\"form-group\">\n                <label>ID Number</label>\n                        <input type=\"email\" class=\"form-control\" formControlName=\"idno\">\n              </div>\n            </div>\n            <div class=\"col-md-6 pr-1\">\n              <div class=\"form-group\">\n                <label>Mobile</label>\n                     <input type=\"text\" class=\"form-control\" value=\"+1 202-555-0125\" formControlName=\"cell\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Address</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"address\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n          <div class=\"col-md-4 pr-1\">\n            <div class=\"form-group\">\n              <label>Aid Number</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"aid_number\">\n            </div>\n          </div>\n          <div class=\"col-md-5 pr-1\">\n            <div class=\"form-group\">\n              <label>Medical Aid </label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"medical_aid\">\n            </div>\n          </div>\n\n            <div class=\"col-md-3 pr-1\">\n              <div class=\"form-group\">\n                <label>Medical Aid Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"medical_name\">\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"update ml-auto mr-auto\">\n              <button type=\"submit\" class=\"btn btn-primary btn-round\">Update Profile</button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-info/doctor-info.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-info/doctor-info.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorInfoDoctorInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\t<!--================Header Menu Area =================-->\n<header class=\"header_area\">\n\t<div class=\"top_menu row m0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<ul class=\"left_side\">\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"instagram\">\n\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"right_side\" style=\"text-transform: lowercase;\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-phone-handset\"></i>\n\t\t\t\t\t\t\t081 472 4471 / 081 722 3199\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-envelope\"></i>\n\t\t\t\t\t\t\tsandymashele.sm@gmail.com\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"main_menu\" style=\"position: fixed;width: 100%;top: 0; \">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light\" >\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t<a class=\"navbar-brand logo_h\" routerLink=\"/home\">\n\t\t\t\t\t<img src=\"assets/images/logo.png\" class=\"logo\">\n\t\t\t\t</a>\n        <button class=\"navbar-toggler\" style=\"border: 10px solid transparent;    width: 80px;\"type=\"button\" data-toggle=\"collapse\"data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n\t\t\t\t\taria-label=\"Toggle navigation\">\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t<div class=\"row ml-0 w-100\">\n\t\t\t\t\t\t<div class=\"col-lg-12 pr-0\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav center_nav pull-right\">\n\t\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"index.html\">About Us</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item submenu dropdown\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n\t\t\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/patient-info\">Patients</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/doctor-info\">Doctors</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/pharmacy-info\">Pharmacy</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">Login</a>\n\t\t\t\t\t\t\t\t</li>\n\n\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t</div>\n</header>\n\t<!--================Header Menu Area =================-->\n\t<section class=\"banner_area\">\n\t\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t\t<div class=\"container\">\n\t\t\t\t\t<div class=\"banner_content text-left\">\n\t\t\t\t\t\t<h2>Doctors</h2>\n\t\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t\t<a href=\"index.html\">Home</a>\n\t\t\t\t\t\t\t<a href=\"doctors.html\">Doctors</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</section>\n\t\t<!--================End Banner Area =================-->\n\n\t<section class=\"team-area section_gap\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<h1>Our Offered Services</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMedical Couch is a website that caters for patients, doctors and pharmacies. It is designed to make\n\t\t\t\t\t\tpatient-doctor\n\t\t\t\t\t\tconsultations easier through online bookings.\n\n\t\t\t\t\t\tMedical Couch enables doctors to upload patient’s prescription at nearby pharmacies in accordance to\n\t\t\t\t\t\tthe patient’s\n\t\t\t\t\t\tpreferred pick up date and time.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t<span class=\"lnr lnr-rocket\"></span>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tHelps doctors organize their daily schedule through\n\t\t\t\t\t\t\tonline calendars.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t<span class=\"lnr lnr-heart-pulse\"></span>\n\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tHelps doctors to connect with their patients even before consultations.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t<span class=\"lnr lnr-bug\"></span>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAdvertises the doctors practice.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t<span class=\"lnr lnr-paperclip\"></span>\n\t\t\t\t\t\t<p>\n\t                     Reduces admin work for the practice </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</section>\n\t<section class=\"about-us section_gap\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<h1>PRICELIST</h1>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<!-- item -->\n\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t<div class=\"panel panel-danger panel-pricing\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<i class=\"fa fa-feed\"></i>\n\t\t\t\t\t\t\t<h3>Online Prescription upload site</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t<p><strong>R85 / Month</strong></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"> Enables the pharmacy to receive prescriptions together with patient\n\t\t\t\t\t\t\t\tinformation and data to enter on their system.</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"> It will be user friendly and allow full control over the\n\t\t\t\t\t\t\t\tprescription upload process.</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- /item -->\n\n\t\t\t\t<!-- item -->\n\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t<div class=\"panel panel-warning panel-pricing\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<i class=\"fa fa-chain\"></i>\n\t\t\t\t\t\t\t<h3>Website redirecting LINK</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t<p><strong>R50 / Month</strong></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy has a choice to re-direct patient to the website to\n\t\t\t\t\t\t\t\tget more information.</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\"> It can re-direct doctors uploading prescriptions to their\n\t\t\t\t\t\t\t\twebsite, which creates exposure for the pharmacy’s website.</li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- /item -->\n\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<i class=\"fa fa-trophy\"></i>\n\t\t\t\t\t\t\t<h3>Advertising & Marketing space</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t<p><strong>20c / click</strong></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy may advertise tests done, medication and products on\n\t\t\t\t\t\t\t\tour website for more exposure.</li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- item -->\n\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t<i class=\"fa fa-camera-retro\"></i>\n\t\t\t\t\t\t\t<h3>Professional Photoshoot </h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t<p><strong>R250 / Once-off</strong></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\"> The Pharmacy will have proffesional , clear photos for social media\n\t\t\t\t\t\t\t\tadvertising and for our website.</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- /item -->\n\n\t\t\t</div>\n\n\t\t</div>\n\t</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\t<!--================Header Menu Area =================-->\n<header class=\"header_area\">\n\t<div class=\"top_menu row m0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<ul class=\"left_side\">\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"instagram\">\n\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"right_side\" style=\"text-transform: lowercase;\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-phone-handset\"></i>\n\t\t\t\t\t\t\t081 472 4471 / 081 722 3199\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-envelope\"></i>\n\t\t\t\t\t\t\tsandymashele.sm@gmail.com\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"main_menu\" style=\"position: fixed;width: 100%;top: 0; \">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light\" >\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t<a class=\"navbar-brand logo_h\" routerLink=\"/home\">\n\t\t\t\t\t<img src=\"assets/images/logo.png\" class=\"logo\">\n\t\t\t\t</a>\n\t\t\t\t<button class=\"navbar-toggler\" style=\"border: 10px solid transparent;    width: 80px;\"type=\"button\" data-toggle=\"collapse\"\n\t\t\t\t\tdata-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n\t\t\t\t\taria-label=\"Toggle navigation\">\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t<div class=\"row ml-0 w-100\">\n\t\t\t\t\t\t<div class=\"col-lg-12 pr-0\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav center_nav pull-right\">\n\t\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"index.html\">About Us</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item submenu dropdown\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n\t\t\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/patient-info\">Patients</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/doctor-info\">Doctors</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/pharmacy-info\">Pharmacy</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">Login</a>\n\t\t\t\t\t\t\t\t</li>\n\n\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t</div>\n</header>\n\t<!--================Header Menu Area =================-->\n\n\t<!--================ Home Banner Area =================-->\n\t<section class=\"home_banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t<a  class=\"typewrite\" data-period=\"2000\" data-type='[ \"Designed for Patients.\", \"Designed for Doctors.\", \"Designed for  Pharmacy.\"\n\t\t\t\t\t\t\t\t]'>\n\t\t\t\t\t\t\t\t<span class=\"wrap\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<p>Designed to make patient-doctor consultations easier through online bookings.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Home Banner Area =================-->\n\n\t<!--================ Procedure Category Area =================-->\n\t<section class=\"about_us section_gap our-services\" id=\"our-services\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row justify-content-center text-center mb-5 w-border section-title-wrap\">\n\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t<h1>ABOUT US</h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMedical Couch is a website that caters for patients, doctors and pharmacies. It is designed to make\n\t\t\t\t\t\tpatient-doctor\n\t\t\t\t\t\tconsultations easier through online bookings.\n\t\t\t\t\t\t<br> <br>\n\t\t\t\t\t\tMedical Couch enables doctors to upload patient’s prescription at nearby pharmacies in accordance to the\n\t\t\t\t\t\tpatient’s\n\t\t\t\t\t\tpreferred pick up date and time. </p>\n\t\t\t\t</div>\n\t\t\t</div>\n<div class=\"row\">\n\t<div class=\"col-lg-6 pr-0\">\n\t\t<div class=\"about_img\">\n\t\t\t<img class=\"img-fluid w-100\" src=\"assets/website2/img/about-us.jpg\" alt=\"\">\n\t\t</div>\n\t</div>\n\n\t<div class=\"col-lg-6 pl-0\">\n\t\t<div class=\"about_box\">\n\n\n\t\t\t<div class=\"activity\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-12 px-4\">\n\t\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t\t<span class=\"fa fa-plus-circle\"></span>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<h4>Mission</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tMedical aid intends to build a relationship amongst patients, doctor and pharmacies\n\t\t\t\t\t\t\t\tthrough a user\n\t\t\t\t\t\t\t\tfriendly, reliable\n\t\t\t\t\t\t\t\tand innovative system\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-12 px-4\">\n\t\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t\t<span class=\"fa fa-bullseye\"></span>\n\t\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t\t<h4>Vision</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tTo be the first choice booking website to patients, doctors and pharmacies in South\n\t\t\t\t\t\t\t\tAfrica and\n\t\t\t\t\t\t\t\textend globally.\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-lg-12 px-4\">\n\t\t\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t\t\t<span class=\"fa fa-trophy\"></span>\n\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t<h4>Goal</h4>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\tTo achieve loyalty from all three parties; patients, doctors and pharmacies\n\t\t\t\t\t\t\t\tTo be the number 1 solution to online booking and online prescription uploads\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\t\t</div>\n\t</section>\n\t<!--================ End Procedure Category Area =================-->\n\n\t<!--================ About Myself Area =================-->\n\t\t<section class=\"about-us section_gap\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<h1>SERVICES</h1>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<!-- item -->\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t\t<div class=\"panel panel-danger panel-pricing\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-feed\"></i>\n\t\t\t\t\t\t\t\t<h3>Online Prescription upload site</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t\t<p><strong>R85 / Month</strong></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"> Enables the pharmacy to receive prescriptions together with\n\t\t\t\t\t\t\t\t\tpatient information and data to enter on their system.</li>\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"> It will be user friendly and allow full control over the\n\t\t\t\t\t\t\t\t\tprescription upload process.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" >CLICK FOR MORE</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /item -->\n\n\t\t\t\t\t<!-- item -->\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t\t<div class=\"panel panel-warning panel-pricing\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-chain\"></i>\n\t\t\t\t\t\t\t\t<h3>Website redirecting LINK</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t\t<p><strong>R50 / Month</strong></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy has a choice to re-direct patient to the website to\n\t\t\t\t\t\t\t\t\tget more information.</li>\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"> It can re-direct doctors uploading prescriptions to their\n\t\t\t\t\t\t\t\t\twebsite, which creates exposure for the pharmacy’s website.</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" >CLICK FOR MORE</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- /item -->\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-trophy\"></i>\n\t\t\t\t\t\t\t\t<h3>Advertising & Marketing space</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t\t<p><strong>20c / click</strong></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy may advertise tests done, medication and products on\n\t\t\t\t\t\t\t\t\tour website for more exposure.</li>\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" >CLICK FOR MORE</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- item -->\n\t\t\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-camera-retro\"></i>\n\t\t\t\t\t\t\t\t<h3>Professional Photoshoot </h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t\t\t<p><strong>R250 / Once-off</strong></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"> The Pharmacy will have proffesional , clear photos for social\n\t\t\t\t\t\t\t\t\tmedia advertising and for our website.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" >CLICK FOR MORE</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- /item -->\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</section>\n\n<section class=\"procedure_category section_gap_custom\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1>CONTACT</h1>\n\t\t\t\t<br>\n\t\t\t\t<p>\n\t\t\t\t\tFor any queries or arrangements for meetings. </p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-3\">\n\t\t\t\t<div class=\"contact_info\">\n\n\t\t\t\t\t<div class=\"info_item\">\n\t\t\t\t\t\t<i class=\"lnr lnr-phone-handset\"></i>\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<a >081 472 4471 / 081 722 3199</a>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\t\t\t\t\t<div class=\"info_item\">\n\t\t\t\t\t\t<i class=\"lnr lnr-envelope\"></i>\n\t\t\t\t\t\t<h6>\n\t\t\t\t\t\t\t<a>sandymashele.sm@gmail.com</a>\n\t\t\t\t\t\t</h6>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<br>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-9\">\n\t\t\t\t<form class=\"row contact_form\" action=\"contact_process.php\" method=\"post\" id=\"contactForm\"\n\t\t\t\t\tnovalidate=\"novalidate\">\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter your name\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter email address\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"subject\" name=\"subject\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter Subject\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<textarea class=\"form-control\" name=\"message\" id=\"message\" rows=\"1\"\n\t\t\t\t\t\t\t\tplaceholder=\"Enter Message\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-12 text-right\">\n\t\t\t\t\t\t<button type=\"submit\" value=\"submit\" class=\"btn submit_btn\">Send Message</button>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</section>\n\n\n\t<!--================ Optional JavaScript =================-->\n\t<!--================ jQuery first, then Popper.js, then Bootstrap JS =================-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-wrapper\">\n\n    <div class=\"content\">\n      <div class=\"container-fluid\">\n\n        <div class=\"row\">\n          <div class=\"col-md-8 offset-md-2\">\n\n            <!-- Login Tab Content -->\n            <div class=\"account-content\">\n              <div class=\"row align-items-center justify-content-center\">\n                <div class=\"col-md-7 col-lg-6 login-left\">\n                  <img src=\"assets/images/logo.png\" class=\"img-fluid\" alt=\"Doccure Login\">\n                </div>\n                <div class=\"col-md-12 col-lg-6 login-right\">\n\n                  <div class=\"login-header\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Patient Login <a routerLink=\"\">Are you a Doctor?</a></h3>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n                    <hr>\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" >\n                    <div class=\"info-widget\">\n\n                    <div class=\"col-12 col-md-12\">\n                      <div class=\"form-group card-label\">\n                        <label class=\"focus-label\">Email</label>\n                        <input type=\"email\" class=\"form-control floating\" formControlName=\"email\">\n                        </div>\n                      </div>\n                    <div class=\"col-12 col-md-12\">\n                      <div class=\"form-group card-label\">\n                        <label class=\"focus-label\">Password</label>\n                        <input type=\"password\" class=\"form-control floating\" formControlName=\"password\">\n                        </div>\n                      </div>\n\n                    <div class=\"text-right\">\n                      <a class=\"forgot-link\" routerLink=\"forgot-password\" >Forgot Password ?</a>\n                    </div>\n                    <button class=\"btn btn-primary btn-block btn-lg login-btn btn-block btn-outline-primary active\" type=\"submit\">Login</button>\n                    <div class=\"login-or\">\n                      <span class=\"or-line\"></span>\n                      <span class=\"span-or\">or</span>\n                    </div>\n                    <div class=\"text-center dont-have\">Don’t have an account? <a routerLink=\"/register\" >Register</a></div>\n                    </div>\n                  </form>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient-info/patient-info.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient-info/patient-info.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPatientInfoPatientInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\t<!--================Header Menu Area =================-->\n<header class=\"header_area\">\n\t<div class=\"top_menu row m0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<ul class=\"left_side\">\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"instagram\">\n\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"right_side\" style=\"text-transform: lowercase;\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-phone-handset\"></i>\n\t\t\t\t\t\t\t081 472 4471 / 081 722 3199\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-envelope\"></i>\n\t\t\t\t\t\t\tsandymashele.sm@gmail.com\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"main_menu\" style=\"position: fixed;width: 100%;top: 0; \">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light\" >\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t<a class=\"navbar-brand logo_h\" routerLink=\"/home\">\n\t\t\t\t\t<img src=\"assets/images/logo.png\" class=\"logo\">\n\t\t\t\t</a>\n<button class=\"navbar-toggler\" style=\"border: 10px solid transparent;    width: 80px;\"type=\"button\" data-toggle=\"collapse\"0\t\t\t\t\tdata-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n\t\t\t\t\taria-label=\"Toggle navigation\">\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t<div class=\"row ml-0 w-100\">\n\t\t\t\t\t\t<div class=\"col-lg-12 pr-0\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav center_nav pull-right\">\n\t\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"index.html\">About Us</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item submenu dropdown\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n\t\t\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/patient-info\">Patients</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/doctor-info\">Doctors</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/pharmacy-info\">Pharmacy</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">Login</a>\n\t\t\t\t\t\t\t\t</li>\n\n\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t</div>\n</header>\n\t<!--================Header Menu Area =================-->\n\n\t<section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-left\">\n\t\t\t\t\t<h2>Find A Doctor</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a href=\"index.html\">Location</a>\n\t\t\t\t\t\t<a href=\"doctors.html\">Midrand</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\n\t<section class=\"team-area section_gap\">\n\t<div class=\"container\">\n\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1>Our Offered Services</h1>\n\t\t\t\t<p>\n\t\t\t\t\tMedical Couch is a website that caters for patients, doctors and pharmacies. It is designed to make patient-doctor\n\t\t\t\t\tconsultations easier through online bookings.\n\n\t\t\t\t\tMedical Couch enables doctors to upload patient’s prescription at nearby pharmacies in accordance to the patient’s\n\t\t\t\t\tpreferred pick up date and time.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n<div class=\"row\">\n\n<div class=\"col-lg-12 col-md-6 mb-60\">\n\t<div class=\"single_service\">\n\t\t<span class=\"lnr lnr-rocket\"></span>\n\t\t<p>\n\t\t\tHelps patients to make online bookings by giving them\n\t\t\tthe nearest doctors availability schedule.\n\t\t</p>\n\t</div>\n</div>\n<div class=\"col-lg-12 col-md-6 mb-60\">\n\t<div class=\"single_service\">\n\t\t<span class=\"lnr lnr-heart-pulse\"></span>\n\n\t\t<p>\n\t\t\tIt filters out the doctors, giving patients the nearest doctors that cater for\n\t\t\ttheir medical aid network.\n\t\t</p>\n\t</div>\n</div>\n<div class=\"col-lg-12 col-md-6 mb-60\">\n\t<div class=\"single_service\">\n\t\t<span class=\"lnr lnr-bug\"></span>\n\t\t<p>\n\t\t\tIt allows patients to skip queues and receive their prescription and receive\n\t\t\tyour prescription already packed at the nearby pharmacy in accordance to\n\t\t\tthe patients preferred collection date and time.\n\t\t</p>\n\t</div>\n</div>\n\n</div>\n\n\t</div>\n</section>\n\n<section class=\"about-us section_gap\">\n<div class=\"container\">\n\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h1>PRICELIST</h1>\n\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"row\">\n\n\t\t<!-- item -->\n\t\t<div class=\"col-md-6 text-center\">\n\t\t\t<div class=\"panel panel-danger panel-pricing\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<i class=\"fa fa-feed\"></i>\n\t\t\t\t\t<h3>Online Prescription upload site</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t<p><strong>R85 / Month</strong></p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t<li class=\"list-group-item\"> Enables the pharmacy to receive prescriptions together with patient\n\t\t\t\t\t\tinformation and data to enter on their system.</li>\n\t\t\t\t\t<li class=\"list-group-item\"> It will be user friendly and allow full control over the\n\t\t\t\t\t\tprescription upload process.</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /item -->\n\n\t\t<!-- item -->\n\t\t<div class=\"col-md-6 text-center\">\n\t\t\t<div class=\"panel panel-warning panel-pricing\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<i class=\"fa fa-chain\"></i>\n\t\t\t\t\t<h3>Website redirecting LINK</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t<p><strong>R50 / Month</strong></p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy has a choice to re-direct patient to the website to\n\t\t\t\t\t\tget more information.</li>\n\t\t\t\t\t<li class=\"list-group-item\"> It can re-direct doctors uploading prescriptions to their\n\t\t\t\t\t\twebsite, which creates exposure for the pharmacy’s website.</li>\n\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- /item -->\n\t\t<div class=\"col-md-6 text-center\">\n\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<i class=\"fa fa-trophy\"></i>\n\t\t\t\t\t<h3>Advertising & Marketing space</h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t<p><strong>20c / click</strong></p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy may advertise tests done, medication and products on\n\t\t\t\t\t\tour website for more exposure.</li>\n\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- item -->\n\t\t<div class=\"col-md-6 text-center\">\n\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t<i class=\"fa fa-camera-retro\"></i>\n\t\t\t\t\t<h3>Professional Photoshoot </h3>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t<p><strong>R250 / Once-off</strong></p>\n\t\t\t\t</div>\n\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t<li class=\"list-group-item\"> The Pharmacy will have proffesional , clear photos for social media\n\t\t\t\t\t\tadvertising and for our website.</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- /item -->\n\n\t</div>\n\n</div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pharmacy-info/pharmacy-info.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pharmacy-info/pharmacy-info.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPharmacyInfoPharmacyInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\t<!--================Header Menu Area =================-->\n<header class=\"header_area\">\n\t<div class=\"top_menu row m0\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<ul class=\"left_side\">\n\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"instagram\">\n\t\t\t\t\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\n\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"right_side\" style=\"text-transform: lowercase;\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-phone-handset\"></i>\n\t\t\t\t\t\t\t081 472 4471 / 081 722 3199\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a >\n\t\t\t\t\t\t\t<i class=\"lnr lnr-envelope\"></i>\n\t\t\t\t\t\t\tsandymashele.sm@gmail.com\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"main_menu\" style=\"position: fixed;width: 100%;top: 0; \">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light\" >\n\t\t\t<div class=\"container\">\n\t\t\t\t<!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t\t<a class=\"navbar-brand logo_h\" routerLink=\"/home\">\n\t\t\t\t\t<img src=\"assets/images/logo.png\" class=\"logo\">\n\t\t\t\t</a>\n\t\t\t\t<button class=\"navbar-toggler\" style=\"border: 10px solid transparent;    width: 80px;\"type=\"button\" data-toggle=\"collapse\"\t\t\t\t\t8data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\"\n\t\t\t\t\taria-label=\"Toggle navigation\">\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t</button>\n\t\t\t\t<!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t\t<div class=\"collapse navbar-collapse offset\" id=\"navbarSupportedContent\">\n\t\t\t\t\t<div class=\"row ml-0 w-100\">\n\t\t\t\t\t\t<div class=\"col-lg-12 pr-0\">\n\t\t\t\t\t\t\t<ul class=\"nav navbar-nav center_nav pull-right\">\n\t\t\t\t\t\t\t\t<li class=\"nav-item active\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"index.html\">About Us</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item submenu dropdown\">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\"\n\t\t\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n\t\t\t\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/patient-info\">Patients</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/doctor-info\">Doctors</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/pharmacy-info\">Pharmacy</a>\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"nav-item \">\n\t\t\t\t\t\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\">Login</a>\n\t\t\t\t\t\t\t\t</li>\n\n\n\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t</div>\n</header>\n\t<!--================Header Menu Area =================-->\n\n\t<!--================ Home Banner Area =================-->\n\t<section class=\"home_banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content row\">\n\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t<h1>\n\t\t\t\t\t\t\t<a  class=\"typewrite\" data-period=\"2000\" data-type='[ \"Designed for Patients.\", \"Designed for Doctors.\", \"Designed for  Pharmacy.\"\n\t\t\t\t\t\t\t\t]'>\n\t\t\t\t\t\t\t\t<span class=\"wrap\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</h1>\n\t\t\t\t\t\t<p>Designed to make patient-doctor consultations easier through online bookings.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================ End Home Banner Area =================-->\n  <section class=\"banner_area\">\n\t\t<div class=\"banner_inner d-flex align-items-center\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"banner_content text-left\">\n\t\t\t\t\t<h2>Pharmacy</h2>\n\t\t\t\t\t<div class=\"page_link\">\n\t\t\t\t\t\t<a href=\"index.html\">Home</a>\n\t\t\t\t\t\t<a href=\"doctors.html\">Pharmacy</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!--================End Banner Area =================-->\n\n<section class=\"team-area section_gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1>Our Offered Services</h1>\n\t\t\t\t<p>\n\t\t\t\t\tMedical Couch is a website that caters for patients, doctors and pharmacies. It is designed to make\n\t\t\t\t\tpatient-doctor consultations easier through online bookings.\n\n\t\t\t\t\tMedical Couch enables doctors to upload patient’s prescription at nearby pharmacies in accordance to\n\t\t\t\t\tthe patient’s\n\t\t\t\t\tpreferred pick up date and time.\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t<span class=\"lnr lnr-laptop\"></span>\n\t\t\t\t\t<p>\n\t\t\t\t\tHelps pharmacies not to only have an organised online prescription upload system which\n\t\t\t\t\thelps to make hand out easy, but to be advertised to the new platforms of social media.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t<span class=\"lnr lnr-rocket\"></span>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tOrganises prescription for pharmacies by preparing a list with patients\n\t\t\t\t\t\tinformation to help pack beforehand.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t<span class=\"lnr lnr-heart-pulse\"></span>\n\n\t\t\t\t\t<p>\n\t\t\t\t\t\tMakes prescription hand outs much faster by providing patients information\n\t\t\t\t\t\tto enter on the pharmacy system\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-12 col-md-6 mb-60\">\n\t\t\t\t<div class=\"single_service\">\n\t\t\t\t\t<span class=\"lnr lnr-bug\"></span>\n\t\t\t\t\t<p>\n\t\t\t\t\t It provides a pack-handout system without any delays </p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</section>\n\n<section class=\"about-us section_gap\">\n\t<div class=\"container\">\n\t\t<div class=\"row justify-content-center text-center mb-5 w-border  mx-auto section-title-wrap\">\n\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t<h1>PRICELIST</h1>\n\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class=\"row\">\n\n\t\t\t<!-- item -->\n\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t<div class=\"panel panel-danger panel-pricing\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<i class=\"fa fa-feed\"></i>\n\t\t\t\t\t\t<h3>Online Prescription upload site</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p><strong>R85 / Month</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"> Enables the pharmacy to receive prescriptions together with patient\n\t\t\t\t\t\t\tinformation and data to enter on their system.</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"> It will be user friendly and allow full control over the\n\t\t\t\t\t\t\tprescription upload process.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- /item -->\n\n\t\t\t<!-- item -->\n\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t<div class=\"panel panel-warning panel-pricing\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<i class=\"fa fa-chain\"></i>\n\t\t\t\t\t\t<h3>Website redirecting LINK</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p><strong>R50 / Month</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy has a choice to re-direct patient to the website to\n\t\t\t\t\t\t\tget more information.</li>\n\t\t\t\t\t\t<li class=\"list-group-item\"> It can re-direct doctors uploading prescriptions to their\n\t\t\t\t\t\t\twebsite, which creates exposure for the pharmacy’s website.</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- /item -->\n\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<i class=\"fa fa-trophy\"></i>\n\t\t\t\t\t\t<h3>Advertising & Marketing space</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p><strong>20c / click</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"> The pharmacy may advertise tests done, medication and products on\n\t\t\t\t\t\t\tour website for more exposure.</li>\n\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- item -->\n\t\t\t<div class=\"col-md-6 text-center\">\n\t\t\t\t<div class=\"panel panel-success panel-pricing\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<i class=\"fa fa-camera-retro\"></i>\n\t\t\t\t\t\t<h3>Professional Photoshoot </h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body text-center\">\n\t\t\t\t\t\t<p><strong>R250 / Once-off</strong></p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"list-group text-center\">\n\t\t\t\t\t\t<li class=\"list-group-item\"> The Pharmacy will have proffesional , clear photos for social media\n\t\t\t\t\t\t\tadvertising and for our website.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"panel-footer\">\n\t\t\t\t\t\t<a class=\"btn btn-lg btn-block \" href=\"#\">CLICK FOR MORE</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- /item -->\n\n\t\t</div>\n\n\t</div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-wrapper\">\n\n    <!-- Header -->\n\n    <!-- /Header -->\n\n    <!-- Page Content -->\n    <div class=\"content\">\n      <div class=\"container-fluid\">\n\n        <div class=\"row\">\n          <div class=\"col-md-8 offset-md-2\">\n\n            <!-- Login Tab Content -->\n            <div class=\"account-content\">\n              <div class=\"row align-items-center justify-content-center\">\n                <div class=\"col-md-7 col-lg-6 login-left\">\n                    <img src=\"assets/images/logo.png\" class=\"img-fluid\" alt=\"Doccure Login\">\n                </div>\n                <div class=\"col-md-12 col-lg-6 login-right\">\n\n                  <div class=\"login-header\">\n\t\t\t\t\t\t\t\t\t\t\t<h3>Patient Register <a href=\"doctor-register.html\">Are you a Doctor?</a></h3>\n\n\t\t\t\t\t\t\t\t\t\t</div>\n                    <hr>\n                  <form  [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" >\n                      <div class=\" form-row info-widget\">\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>First Name</label>\n                            <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"name\">\n                            <div *ngIf=\"registerForm.controls['name']?.invalid && ( registerForm.controls['name']?.dirty || registerForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['name'].errors.required\">\n                                Name is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Surname</label>\n                            <input type=\"text\" class=\"form-control\" name=\"surname\" formControlName=\"surname\">\n                            <div *ngIf=\"registerForm.controls['surname']?.invalid && ( registerForm.controls['surname']?.dirty || registerForm.controls['surname'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['surname'].errors.required\">\n                                surname is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Title</label>\n                            <select class=\"form-control select\" formControlName=\"title\">\n                              <option value=\"Mr\">Mr</option>\n                              <option value=\"Miss\">Miss</option>\n                              <option value=\"Mrs\">Mrs</option>\n                              <option value=\"Prof\">Prof</option>\n                              <option value=\"Dr\">Dr</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Gender</label>\n                            <select class=\"form-control select\" formControlName=\"gender\">\n                              <option value=\"Male\">Male</option>\n                              <option value=\"Female\">Female</option>\n                              <option value=\"Rather Not Say\">Rather Not Say</option>\n                            </select>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-12\">\n                          <div class=\"form-group card-label\">\n                            <label>Email </label>\n                            <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\">\n                            <div *ngIf=\"registerForm.controls['email']?.invalid && ( registerForm.controls['email']?.dirty || registerForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['email'].errors?.required\">\n                                email is required.\n                              </div>\n                              <div *ngIf=\"registerForm.controls['email']?.errors.email\">Email must be a valid email address</div>\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"col-12 col-md-12\">\n                          <div class=\"form-group card-label\">\n                            <label>Address </label>\n                            <input type=\"email\" class=\"form-control\" name=\"address\" formControlName=\"address\">\n                            <div *ngIf=\"registerForm.controls['address']?.invalid && ( registerForm.controls['address']?.dirty || registerForm.controls['address'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['address'].errors?.required\">\n                                address is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\">\n                            <div *ngIf=\"registerForm.controls['password']?.invalid && ( registerForm.controls['password']?.dirty || registerForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['password'].errors?.required\">\n                                password is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Confirm Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"confirm\">\n                            <div *ngIf=\"registerForm.controls['confirm']?.invalid && ( registerForm.controls['confirm']?.dirty || registerForm.controls['confirm'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['confirm'].errors?.required\">\n                                confirm is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Phone Number</label>\n                            <input type=\"number\" class=\"form-control\" name=\"number\" formControlName=\"cell\">\n                            <div *ngIf=\"registerForm.controls['cell']?.invalid && ( registerForm.controls['cell']?.dirty || registerForm.controls['cell'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['cell'].errors?.required\">\n                                Phone number is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>ID Number</label>\n                            <input type=\"text\" minlength=\"13\" class=\"form-control\" name=\"number\" formControlName=\"idno\">\n                            <div *ngIf=\"registerForm.controls['idno']?.invalid && ( registerForm.controls['idno']?.dirty || registerForm.controls['idno'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['idno'].errors?.required\">\n                                idno is required.\n                              </div>\n                              <div *ngIf=\"registerForm.controls['idno'].errors?.minlength\">\n                                idno is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Medical Aid</label>\n                            <select class=\"form-control select\" formControlName=\"medical_name\">\n                              <option value=\"{{x.id}}\" *ngFor=\"let x  of medicalAid\">{{x.name}}</option>\n  \n                            </select>\n                          </div>\n                        </div>\n  \n                        <div class=\"col-12 col-md-6\">\n                          <div class=\"form-group card-label\">\n                            <label>Medical Aid Number</label>\n                            <input type=\"text\" class=\"form-control\" name=\"number\"  formControlName=\"aid_number\">\n                            <div *ngIf=\"registerForm.controls['aid_number']?.invalid && ( registerForm.controls['aid_number']?.dirty || registerForm.controls['aid_number'].touched)\" class=\"alert alert-danger\">\n                              <div *ngIf=\"registerForm.controls['aid_number'].errors?.required\">\n                                medical_name is required.\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n\n\n\n\n                    <button class=\"btn btn-primary btn-block btn-lg login-btn btn-block btn-outline-primary active\" type=\"submit\">Login</button>\n\n                    <div class=\"text-center dont-have\">Already have an account?<a routerLink=\"/login\" >Login</a></div>\n                    </form>\n                </div>\n              </div>\n            </div>\n            <!-- /Login Tab Content -->\n\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n    <!-- /Page Content -->\n\n    <!-- Footer -->\n\n    <!-- /Footer -->\n\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFixedpluginFixedpluginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"fixed-plugin\">\n    <div class=\"show-dropdown\" ngbDropdown>\n        <a href=\"javascript:void(0)\" ngbDropdownToggle id=\"dropdownConfig\">\n          <i class=\"fa fa-cog fa-2x\"> </i>\n        </a>\n        <ul class=\"\" ngbDropdownMenu aria-labelledby=\"dropdownConfig\">\n            <li class=\"header-title\">Sidebar Background</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\n                    <span class=\"badge filter badge-light active\" [ngClass]=\"{'active':sidebarColor==='white'}\" (click)=\"changeSidebarColor('white')\"></span>\n                    <span class=\"badge filter badge-dark\" [ngClass]=\"{'active':sidebarColor==='black'}\" (click)=\"changeSidebarColor('black')\"></span>\n                </a>\n            </li>\n\n\t          <li class=\"header-title\">Sidebar Active Color</li>\n            <li class=\"adjustments-line text-center\">\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                    <span class=\"badge filter badge-primary\" [ngClass]=\"{'active':sidebarActiveColor==='primary'}\" (click)=\"changeSidebarActiveColor('primary')\"></span>\n                    <span class=\"badge filter badge-info\" [ngClass]=\"{'active':sidebarActiveColor==='info'}\" (click)=\"changeSidebarActiveColor('info')\"></span>\n                    <span class=\"badge filter badge-success\" [ngClass]=\"{'active':sidebarActiveColor==='success'}\" (click)=\"changeSidebarActiveColor('success')\"></span>\n                    <span class=\"badge filter badge-warning\" [ngClass]=\"{'active':sidebarActiveColor==='warning'}\" (click)=\"changeSidebarActiveColor('warning')\"></span>\n                    <span class=\"badge filter badge-danger active\" [ngClass]=\"{'active':sidebarActiveColor==='danger'}\" (click)=\"changeSidebarActiveColor('danger')\"></span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                       Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by <a href=\"https://www.creative-tim.com\">Creative Tim</a>\n        </div>\n    </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./layouts/doctor-layout/doctor-layout.module": ["./src/app/layouts/doctor-layout/doctor-layout.module.ts", "layouts-doctor-layout-doctor-layout-module"],
      "./layouts/patient-layout/patient-layout.module": ["./src/app/layouts/patient-layout/patient-layout.module.ts", "layouts-patient-layout-patient-layout-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/register/register.component */
    "./src/app/pages/register/register.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _layouts_patient_layout_patient_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/patient-layout/patient-layout.component */
    "./src/app/layouts/patient-layout/patient-layout.component.ts");
    /* harmony import */


    var _layouts_doctor_layout_doctor_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/doctor-layout/doctor-layout.component */
    "./src/app/layouts/doctor-layout/doctor-layout.component.ts");
    /* harmony import */


    var _pages_doctor_info_doctor_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/doctor-info/doctor-info.component */
    "./src/app/pages/doctor-info/doctor-info.component.ts");
    /* harmony import */


    var _pages_patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/patient-info/patient-info.component */
    "./src/app/pages/patient-info/patient-info.component.ts");
    /* harmony import */


    var _pages_pharmacy_info_pharmacy_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/pharmacy-info/pharmacy-info.component */
    "./src/app/pages/pharmacy-info/pharmacy-info.component.ts"); // import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';


    var routes = [{
      path: '',
      component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'login',
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'register',
      component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'doctor-info',
      component: _pages_doctor_info_doctor_info_component__WEBPACK_IMPORTED_MODULE_8__["DoctorInfoComponent"]
    }, {
      path: 'patient-info',
      component: _pages_patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_9__["PatientInfoComponent"]
    }, {
      path: 'pharmacy-info',
      component: _pages_pharmacy_info_pharmacy_info_component__WEBPACK_IMPORTED_MODULE_10__["PharmacyInfoComponent"]
    }, {
      path: 'patient',
      component: _layouts_patient_layout_patient_layout_component__WEBPACK_IMPORTED_MODULE_6__["PatientLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/patient-layout/patient-layout.module#PatientLayoutModule'
      }]
    }, {
      path: 'doctor',
      component: _layouts_doctor_layout_doctor_layout_component__WEBPACK_IMPORTED_MODULE_7__["DoctorLayoutComponent"],
      children: [{
        path: '',
        loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _layouts_admin_layout_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layouts/admin-layout/components/sidebar/sidebar.module */
    "./src/app/layouts/admin-layout/components/sidebar/sidebar.module.ts");
    /* harmony import */


    var _layouts_patient_layout_components_patient_sidebar_patient_sidebar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layouts/patient-layout/components/patient-sidebar/patient-sidebar.module */
    "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.module.ts");
    /* harmony import */


    var _layouts_doctor_layout_components_doctor_sidebar_doctor_sidebar_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.module */
    "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.module.ts");
    /* harmony import */


    var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/footer/footer.module */
    "./src/app/shared/footer/footer.module.ts");
    /* harmony import */


    var _layouts_patient_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/patient-layout/components/navbar/navbar.module */
    "./src/app/layouts/patient-layout/components/navbar/navbar.module.ts");
    /* harmony import */


    var _layouts_patient_layout_components_patient_navbar_patient_navbar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layouts/patient-layout/components/patient-navbar/patient-navbar.module */
    "./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.module.ts");
    /* harmony import */


    var _layouts_doctor_layout_components_doctor_navbar_doctor_navbar_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layouts/doctor-layout/components/doctor-navbar/doctor-navbar.module */
    "./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.module.ts");
    /* harmony import */


    var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/fixedplugin/fixedplugin.module */
    "./src/app/shared/fixedplugin/fixedplugin.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./layouts/admin-layout/admin-layout.component */
    "./src/app/layouts/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _layouts_patient_layout_patient_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layouts/patient-layout/patient-layout.component */
    "./src/app/layouts/patient-layout/patient-layout.component.ts");
    /* harmony import */


    var _pages_PatientDashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/PatientDashboard/dashboard/dashboard.component */
    "./src/app/pages/PatientDashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_PatientDashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/PatientDashboard/booking/booking.component */
    "./src/app/pages/PatientDashboard/booking/booking.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/register/register.component */
    "./src/app/pages/register/register.component.ts");
    /* harmony import */


    var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/home/home.component */
    "./src/app/pages/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _pages_PatientDashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/PatientDashboard/appointments/appointments.component */
    "./src/app/pages/PatientDashboard/appointments/appointments.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _pages_PatientDashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/PatientDashboard/profile/profile.component */
    "./src/app/pages/PatientDashboard/profile/profile.component.ts");
    /* harmony import */


    var _pages_DoctorDashboard_practice_profile_practice_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/DoctorDashboard/practice-profile/practice-profile.component */
    "./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.ts");
    /* harmony import */


    var _layouts_doctor_layout_doctor_layout_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./layouts/doctor-layout/doctor-layout.component */
    "./src/app/layouts/doctor-layout/doctor-layout.component.ts");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! angular-calendar/date-adapters/date-fns */
    "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
    /* harmony import */


    var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_29___default =
    /*#__PURE__*/
    __webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_29__);
    /* harmony import */


    var _pages_doctor_info_doctor_info_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/doctor-info/doctor-info.component */
    "./src/app/pages/doctor-info/doctor-info.component.ts");
    /* harmony import */


    var _pages_patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/patient-info/patient-info.component */
    "./src/app/pages/patient-info/patient-info.component.ts");
    /* harmony import */


    var _pages_pharmacy_info_pharmacy_info_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/pharmacy-info/pharmacy-info.component */
    "./src/app/pages/pharmacy-info/pharmacy-info.component.ts"); // import { AppRoutes } from './app.routing';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"], _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_14__["AdminLayoutComponent"], _layouts_patient_layout_patient_layout_component__WEBPACK_IMPORTED_MODULE_15__["PatientLayoutComponent"], _pages_PatientDashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"], _pages_PatientDashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_17__["BookingComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"], _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], _pages_PatientDashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_23__["AppointmentsComponent"], _pages_PatientDashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"], _pages_DoctorDashboard_practice_profile_practice_profile_component__WEBPACK_IMPORTED_MODULE_26__["PracticeProfileComponent"], _layouts_doctor_layout_doctor_layout_component__WEBPACK_IMPORTED_MODULE_27__["DoctorLayoutComponent"], _pages_doctor_info_doctor_info_component__WEBPACK_IMPORTED_MODULE_30__["DoctorInfoComponent"], _pages_patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_31__["PatientInfoComponent"], _pages_pharmacy_info_pharmacy_info_component__WEBPACK_IMPORTED_MODULE_32__["PharmacyInfoComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _layouts_admin_layout_components_sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"], _layouts_patient_layout_components_patient_sidebar_patient_sidebar_module__WEBPACK_IMPORTED_MODULE_5__["PatientSidebarModule"], _layouts_patient_layout_components_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_8__["NavbarModule"], _layouts_patient_layout_components_patient_navbar_patient_navbar_module__WEBPACK_IMPORTED_MODULE_9__["PatientNavbarModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"].forRoot(), _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"], _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_11__["FixedPluginModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"], _layouts_doctor_layout_components_doctor_sidebar_doctor_sidebar_module__WEBPACK_IMPORTED_MODULE_6__["DoctorSidebarModule"], _layouts_doctor_layout_components_doctor_navbar_doctor_navbar_module__WEBPACK_IMPORTED_MODULE_10__["DoctorNavbarModule"], angular_calendar__WEBPACK_IMPORTED_MODULE_28__["CalendarModule"].forRoot({
        provide: angular_calendar__WEBPACK_IMPORTED_MODULE_28__["DateAdapter"],
        useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_29__["adapterFactory"]
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sYXlvdXRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/admin-layout.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppLayoutsAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminLayoutComponent =
    /*#__PURE__*/
    function () {
      function AdminLayoutComponent() {
        _classCallCheck(this, AdminLayoutComponent);
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-layout.component.scss */
      "./src/app/layouts/admin-layout/admin-layout.component.scss"))["default"]]
    })], AdminLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ROUTES, SidebarComponent */

  /***/
  function srcAppLayoutsAdminLayoutComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ROUTES = [{
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'nc-bank',
      "class": ''
    }, {
      path: '/icons',
      title: 'Icons',
      icon: 'nc-diamond',
      "class": ''
    }, {
      path: '/maps',
      title: 'Maps',
      icon: 'nc-pin-3',
      "class": ''
    }, {
      path: '/notifications',
      title: 'Notifications',
      icon: 'nc-bell-55',
      "class": ''
    }, {
      path: '/user',
      title: 'User Profile',
      icon: 'nc-single-02',
      "class": ''
    }, {
      path: '/table',
      title: 'Table List',
      icon: 'nc-tile-56',
      "class": ''
    }, {
      path: '/typography',
      title: 'Typography',
      icon: 'nc-caps-small',
      "class": ''
    }, {
      path: '/upgrade',
      title: 'Upgrade to PRO',
      icon: 'nc-spaceship',
      "class": 'active-pro'
    }];

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sidebar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/components/sidebar/sidebar.component.html"))["default"]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/admin-layout/components/sidebar/sidebar.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layouts/admin-layout/components/sidebar/sidebar.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SidebarModule */

  /***/
  function srcAppLayoutsAdminLayoutComponentsSidebarSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarModule", function () {
      return SidebarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sidebar.component */
    "./src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts");

    var SidebarModule = function SidebarModule() {
      _classCallCheck(this, SidebarModule);
    };

    SidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]],
      exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"]]
    })], SidebarModule);
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: DoctorNavbarComponent */

  /***/
  function srcAppLayoutsDoctorLayoutComponentsDoctorNavbarDoctorNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorNavbarComponent", function () {
      return DoctorNavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_layouts_doctor_layout_components_doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component */
    "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts
    // import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
    // import { ROUTES } from 'app/layouts/admin-layout/components/sidebar/sidebar.component';
    // // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts


    var DoctorNavbarComponent =
    /*#__PURE__*/
    function () {
      function DoctorNavbarComponent(location, renderer, element, router) {
        _classCallCheck(this, DoctorNavbarComponent);

        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
      }

      _createClass(DoctorNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.listTitles = app_layouts_doctor_layout_components_doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) {
            return listTitle;
          });
          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
          this.router.events.subscribe(function (event) {
            _this.sidebarClose();
          });
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
          }

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          if (this.sidebarVisible === false) {
            this.sidebarOpen();
          } else {
            this.sidebarClose();
          }
        }
      }, {
        key: "sidebarOpen",
        value: function sidebarOpen() {
          var toggleButton = this.toggleButton;
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];
          setTimeout(function () {
            toggleButton.classList.add('toggled');
          }, 500);
          html.classList.add('nav-open');

          if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
          }

          this.sidebarVisible = true;
        }
      }, {
        key: "sidebarClose",
        value: function sidebarClose() {
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];

          if (window.innerWidth < 991) {
            setTimeout(function () {
              mainPanel.style.position = '';
            }, 500);
          }

          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.isCollapsed = !this.isCollapsed;
          var navbar = document.getElementsByTagName('nav')[0];
          console.log(navbar);

          if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
          } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
          }
        }
      }]);

      return DoctorNavbarComponent;
    }();

    DoctorNavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("doctor-navbar-cmp", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], DoctorNavbarComponent.prototype, "button", void 0);
    DoctorNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'doctor-navbar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doctor-navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], DoctorNavbarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: DoctorNavbarModule */

  /***/
  function srcAppLayoutsDoctorLayoutComponentsDoctorNavbarDoctorNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorNavbarModule", function () {
      return DoctorNavbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _doctor_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./doctor-navbar.component */
    "./src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.ts"); // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/doctor-layout/components/doctor-navbar/doctor-navbar.component.ts


    var DoctorNavbarModule = function DoctorNavbarModule() {
      _classCallCheck(this, DoctorNavbarModule);
    };

    DoctorNavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
      declarations: [_doctor_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorNavbarComponent"]],
      exports: [_doctor_navbar_component__WEBPACK_IMPORTED_MODULE_5__["DoctorNavbarComponent"]]
    })], DoctorNavbarModule);
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsDoctorLayoutComponentsDoctorSidebarDoctorSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sYXlvdXRzL2RvY3Rvci1sYXlvdXQvY29tcG9uZW50cy9kb2N0b3Itc2lkZWJhci9kb2N0b3Itc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ROUTES, DoctorSidebarComponent */

  /***/
  function srcAppLayoutsDoctorLayoutComponentsDoctorSidebarDoctorSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSidebarComponent", function () {
      return DoctorSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ROUTES = [// { path: '/Doctor/dashboard',     title: 'Find Doctors',         icon:'nc-bank',       class: '' },
    // { path: '/booking',       title: 'Make Booking',         icon:'nc-bank',    class: '' },
    {
      path: '/doctor/appointments',
      title: 'Appointments ',
      icon: 'nc-single-02',
      "class": ''
    }, {
      path: '/doctor/profile',
      title: ' Profile',
      icon: 'nc-single-02',
      "class": ''
    }, {
      path: '/doctor/practice-profile',
      title: ' Profile',
      icon: 'nc-single-02',
      "class": ''
    }];

    var DoctorSidebarComponent =
    /*#__PURE__*/
    function () {
      function DoctorSidebarComponent() {
        _classCallCheck(this, DoctorSidebarComponent);
      }

      _createClass(DoctorSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
        }
      }]);

      return DoctorSidebarComponent;
    }();

    DoctorSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // selector: 'app-doctor-sidebar',
      selector: 'doctor-sidebar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doctor-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doctor-sidebar.component.css */
      "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.css"))["default"]]
    })], DoctorSidebarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: DoctorSidebarModule */

  /***/
  function srcAppLayoutsDoctorLayoutComponentsDoctorSidebarDoctorSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorSidebarModule", function () {
      return DoctorSidebarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./doctor-sidebar.component */
    "./src/app/layouts/doctor-layout/components/doctor-sidebar/doctor-sidebar.component.ts");

    var DoctorSidebarModule = function DoctorSidebarModule() {
      _classCallCheck(this, DoctorSidebarModule);
    };

    DoctorSidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSidebarComponent"]],
      exports: [_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["DoctorSidebarComponent"]]
    })], DoctorSidebarModule);
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/doctor-layout.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/doctor-layout.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsDoctorLayoutDoctorLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sYXlvdXRzL2RvY3Rvci1sYXlvdXQvZG9jdG9yLWxheW91dC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/doctor-layout/doctor-layout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/doctor-layout/doctor-layout.component.ts ***!
    \******************************************************************/

  /*! exports provided: DoctorLayoutComponent */

  /***/
  function srcAppLayoutsDoctorLayoutDoctorLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorLayoutComponent", function () {
      return DoctorLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DoctorLayoutComponent =
    /*#__PURE__*/
    function () {
      function DoctorLayoutComponent() {
        _classCallCheck(this, DoctorLayoutComponent);
      }

      _createClass(DoctorLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorLayoutComponent;
    }();

    DoctorLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doctor-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/doctor-layout/doctor-layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doctor-layout.component.css */
      "./src/app/layouts/doctor-layout/doctor-layout.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DoctorLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/navbar/navbar.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/navbar/navbar.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutsPatientLayoutComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_layouts_patient_layout_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/layouts/patient-layout/components/sidebar/sidebar.component */
    "./src/app/layouts/patient-layout/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts


    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(location, renderer, element, router) {
        _classCallCheck(this, NavbarComponent);

        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.listTitles = app_layouts_patient_layout_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) {
            return listTitle;
          });
          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
          this.router.events.subscribe(function (event) {
            _this2.sidebarClose();
          });
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
          }

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          if (this.sidebarVisible === false) {
            this.sidebarOpen();
          } else {
            this.sidebarClose();
          }
        }
      }, {
        key: "sidebarOpen",
        value: function sidebarOpen() {
          var toggleButton = this.toggleButton;
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];
          setTimeout(function () {
            toggleButton.classList.add('toggled');
          }, 500);
          html.classList.add('nav-open');

          if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
          }

          this.sidebarVisible = true;
        }
      }, {
        key: "sidebarClose",
        value: function sidebarClose() {
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];

          if (window.innerWidth < 991) {
            setTimeout(function () {
              mainPanel.style.position = '';
            }, 500);
          }

          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.isCollapsed = !this.isCollapsed;
          var navbar = document.getElementsByTagName('nav')[0];
          console.log(navbar);

          if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
          } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("navbar-cmp", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'navbar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/navbar/navbar.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/navbar/navbar.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/navbar/navbar.module.ts ***!
    \***************************************************************************/

  /*! exports provided: NavbarModule */

  /***/
  function srcAppLayoutsPatientLayoutComponentsNavbarNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarModule", function () {
      return NavbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar.component */
    "./src/app/layouts/patient-layout/components/navbar/navbar.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var NavbarModule = function NavbarModule() {
      _classCallCheck(this, NavbarModule);
    };

    NavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]],
      exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]]
    })], NavbarModule);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: PatientNavbarComponent */

  /***/
  function srcAppLayoutsPatientLayoutComponentsPatientNavbarPatientNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientNavbarComponent", function () {
      return PatientNavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_layouts_patient_layout_components_patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component */
    "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts
    // import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
    // import { ROUTES } from 'app/layouts/admin-layout/components/sidebar/sidebar.component';
    // // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/admin-layout/components/sidebar/sidebar.component.ts


    var PatientNavbarComponent =
    /*#__PURE__*/
    function () {
      function PatientNavbarComponent(location, renderer, element, router) {
        _classCallCheck(this, PatientNavbarComponent);

        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.isCollapsed = true;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.getUser();
      }

      _createClass(PatientNavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.listTitles = app_layouts_patient_layout_components_patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) {
            return listTitle;
          });
          var navbar = this.element.nativeElement;
          this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
          this.router.events.subscribe(function (event) {
            _this3.sidebarClose();
          });
        }
      }, {
        key: "getTitle",
        value: function getTitle() {
          var titlee = this.location.prepareExternalUrl(this.location.path());

          if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
          }

          for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
              return this.listTitles[item].title;
            }
          }

          return 'Dashboard';
        }
      }, {
        key: "sidebarToggle",
        value: function sidebarToggle() {
          if (this.sidebarVisible === false) {
            this.sidebarOpen();
          } else {
            this.sidebarClose();
          }
        }
      }, {
        key: "sidebarOpen",
        value: function sidebarOpen() {
          var toggleButton = this.toggleButton;
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];
          setTimeout(function () {
            toggleButton.classList.add('toggled');
          }, 500);
          html.classList.add('nav-open');

          if (window.innerWidth < 991) {
            mainPanel.style.position = 'fixed';
          }

          this.sidebarVisible = true;
        }
      }, {
        key: "sidebarClose",
        value: function sidebarClose() {
          var html = document.getElementsByTagName('html')[0];
          var mainPanel = document.getElementsByClassName('main-panel')[0];

          if (window.innerWidth < 991) {
            setTimeout(function () {
              mainPanel.style.position = '';
            }, 500);
          }

          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          html.classList.remove('nav-open');
        }
      }, {
        key: "collapse",
        value: function collapse() {
          this.isCollapsed = !this.isCollapsed;
          var navbar = document.getElementsByTagName('nav')[0];
          console.log(navbar);

          if (!this.isCollapsed) {
            navbar.classList.remove('navbar-transparent');
            navbar.classList.add('bg-white');
          } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('bg-white');
          }
        }
      }, {
        key: "getUser",
        value: function getUser() {
          this.user = JSON.parse(localStorage.getItem('user'));
        }
      }]);

      return PatientNavbarComponent;
    }();

    PatientNavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("patient-navbar-cmp", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], PatientNavbarComponent.prototype, "button", void 0);
    PatientNavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'patient-navbar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./patient-navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], PatientNavbarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PatientNavbarModule */

  /***/
  function srcAppLayoutsPatientLayoutComponentsPatientNavbarPatientNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientNavbarModule", function () {
      return PatientNavbarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _patient_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./patient-navbar.component */
    "./src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.ts"); // /home/sibathedev/Videos/paper-dashboard-angular-master/src/app/layouts/patient-layout/components/patient-navbar/patient-navbar.component.ts


    var PatientNavbarModule = function PatientNavbarModule() {
      _classCallCheck(this, PatientNavbarModule);
    };

    PatientNavbarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
      declarations: [_patient_navbar_component__WEBPACK_IMPORTED_MODULE_5__["PatientNavbarComponent"]],
      exports: [_patient_navbar_component__WEBPACK_IMPORTED_MODULE_5__["PatientNavbarComponent"]]
    })], PatientNavbarModule);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsPatientLayoutComponentsPatientSidebarPatientSidebarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sYXlvdXRzL3BhdGllbnQtbGF5b3V0L2NvbXBvbmVudHMvcGF0aWVudC1zaWRlYmFyL3BhdGllbnQtc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ROUTES, PatientSidebarComponent */

  /***/
  function srcAppLayoutsPatientLayoutComponentsPatientSidebarPatientSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSidebarComponent", function () {
      return PatientSidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ROUTES = [{
      path: '/patient/dashboard',
      title: 'Find Doctors',
      icon: 'nc-bank',
      "class": ''
    }, // { path: '/patient/booking',       title: 'Make Booking',         icon:'nc-bank',    class: '' },
    {
      path: '/patient/appointments',
      title: 'Appointments ',
      icon: 'nc-single-02',
      "class": ''
    }, {
      path: '/patient/profile',
      title: 'User Profile',
      icon: 'nc-single-02',
      "class": ''
    }, {
      path: '/logout',
      title: 'Login',
      icon: 'fa fa-pencil',
      "class": ''
    }];

    var PatientSidebarComponent =
    /*#__PURE__*/
    function () {
      function PatientSidebarComponent() {
        _classCallCheck(this, PatientSidebarComponent);
      }

      _createClass(PatientSidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
        }
      }]);

      return PatientSidebarComponent;
    }();

    PatientSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      // selector: 'app-patient-sidebar',
      selector: 'patient-sidebar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./patient-sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./patient-sidebar.component.css */
      "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.css"))["default"]]
    })], PatientSidebarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: PatientSidebarModule */

  /***/
  function srcAppLayoutsPatientLayoutComponentsPatientSidebarPatientSidebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientSidebarModule", function () {
      return PatientSidebarModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _patient_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./patient-sidebar.component */
    "./src/app/layouts/patient-layout/components/patient-sidebar/patient-sidebar.component.ts");

    var PatientSidebarModule = function PatientSidebarModule() {
      _classCallCheck(this, PatientSidebarModule);
    };

    PatientSidebarModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSidebarComponent"]],
      exports: [_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["PatientSidebarComponent"]]
    })], PatientSidebarModule);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/components/sidebar/sidebar.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/layouts/patient-layout/components/sidebar/sidebar.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ROUTES, SidebarComponent */

  /***/
  function srcAppLayoutsPatientLayoutComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ROUTES = [{
      path: '/dashboard',
      title: 'Dashboard',
      icon: 'nc-bank',
      "class": ''
    }, {
      path: '/icons',
      title: 'Icons',
      icon: 'nc-diamond',
      "class": ''
    }, {
      path: '/maps',
      title: 'Maps',
      icon: 'nc-pin-3',
      "class": ''
    }, {
      path: '/notifications',
      title: 'Notifications',
      icon: 'nc-bell-55',
      "class": ''
    }, {
      path: '/user',
      title: 'User Profile',
      icon: 'nc-single-02',
      "class": ''
    }, {
      path: '/table',
      title: 'Table List',
      icon: 'nc-tile-56',
      "class": ''
    }, {
      path: '/typography',
      title: 'Typography',
      icon: 'nc-caps-small',
      "class": ''
    }, {
      path: '/upgrade',
      title: 'Upgrade to PRO',
      icon: 'nc-spaceship',
      "class": 'active-pro'
    }];

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menuItems = ROUTES.filter(function (menuItem) {
            return menuItem;
          });
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sidebar-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/components/sidebar/sidebar.component.html"))["default"]
    })], SidebarComponent);
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/patient-layout.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/layouts/patient-layout/patient-layout.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsPatientLayoutPatientLayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9sYXlvdXRzL3BhdGllbnQtbGF5b3V0L3BhdGllbnQtbGF5b3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/patient-layout/patient-layout.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layouts/patient-layout/patient-layout.component.ts ***!
    \********************************************************************/

  /*! exports provided: PatientLayoutComponent */

  /***/
  function srcAppLayoutsPatientLayoutPatientLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientLayoutComponent", function () {
      return PatientLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PatientLayoutComponent =
    /*#__PURE__*/
    function () {
      function PatientLayoutComponent() {
        _classCallCheck(this, PatientLayoutComponent);
      }

      _createClass(PatientLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientLayoutComponent;
    }();

    PatientLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-layout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./patient-layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/patient-layout/patient-layout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./patient-layout.component.css */
      "./src/app/layouts/patient-layout/patient-layout.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PatientLayoutComponent);
    /***/
  },

  /***/
  "./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.css":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.css ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDoctorDashboardPracticeProfilePracticeProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJEb2N0b3JEYXNoYm9hcmQvcHJhY3RpY2UtcHJvZmlsZS9wcmFjdGljZS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PracticeProfileComponent */

  /***/
  function srcAppPagesDoctorDashboardPracticeProfilePracticeProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PracticeProfileComponent", function () {
      return PracticeProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PracticeProfileComponent =
    /*#__PURE__*/
    function () {
      function PracticeProfileComponent() {
        _classCallCheck(this, PracticeProfileComponent);
      }

      _createClass(PracticeProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PracticeProfileComponent;
    }();

    PracticeProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-practice-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./practice-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./practice-profile.component.css */
      "./src/app/pages/DoctorDashboard/practice-profile/practice-profile.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PracticeProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/appointments/appointments.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/appointments/appointments.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPatientDashboardAppointmentsAppointmentsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJQYXRpZW50RGFzaGJvYXJkL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/appointments/appointments.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/appointments/appointments.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AppointmentsComponent */

  /***/
  function srcAppPagesPatientDashboardAppointmentsAppointmentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function () {
      return AppointmentsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);

    var AppointmentsComponent =
    /*#__PURE__*/
    function () {
      function AppointmentsComponent(patientService) {
        _classCallCheck(this, AppointmentsComponent);

        this.patientService = patientService;
      }

      _createClass(AppointmentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.patientService.getBooking().subscribe(function (res) {
            _this4.appointment = res.data;
            console.log(res);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          });
        }
      }]);

      return AppointmentsComponent;
    }();

    AppointmentsComponent.ctorParameters = function () {
      return [{
        type: _services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]
      }];
    };

    AppointmentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-appointments',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./appointments.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/appointments/appointments.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./appointments.component.css */
      "./src/app/pages/PatientDashboard/appointments/appointments.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_patient_service__WEBPACK_IMPORTED_MODULE_2__["PatientService"]])], AppointmentsComponent);
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/booking/booking.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/booking/booking.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPatientDashboardBookingBookingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  margin: 0 0 10px;\n}\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhdGllbnREYXNoYm9hcmQvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtBQUNmIiwiZmlsZSI6IlBhdGllbnREYXNoYm9hcmQvYm9va2luZy9ib29raW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5cbnByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/booking/booking.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/booking/booking.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BookingComponent */

  /***/
  function srcAppPagesPatientDashboardBookingBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingComponent", function () {
      return BookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! date-fns */
    "./node_modules/date-fns/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-calendar */
    "./node_modules/angular-calendar/__ivy_ngcc__/fesm2015/angular-calendar.js");

    var colors = {
      red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
      },
      yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
      }
    };

    var BookingComponent =
    /*#__PURE__*/
    function () {
      function BookingComponent(modal) {
        var _this5 = this;

        _classCallCheck(this, BookingComponent);

        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [{
          label: '<i class="fas fa-fw fa-pencil-alt"></i>',
          a11yLabel: 'Edit',
          onClick: function onClick(_ref) {
            var event = _ref.event;

            _this5.handleEvent('Edited', event);
          }
        }, {
          label: '<i class="fas fa-fw fa-trash-alt"></i>',
          a11yLabel: 'Delete',
          onClick: function onClick(_ref2) {
            var event = _ref2.event;
            _this5.events = _this5.events.filter(function (iEvent) {
              return iEvent !== event;
            });

            _this5.handleEvent('Deleted', event);
          }
        }];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [{
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 1),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(new Date(), 1),
          title: 'A 3 day event',
          color: colors.red,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
          title: 'An event with no end date',
          color: colors.yellow,
          actions: this.actions
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfMonth"])(new Date()), 3),
          title: 'A long event that spans 2 months',
          color: colors.blue,
          allDay: true
        }, {
          start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), 2),
          end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addHours"])(new Date(), 2),
          title: 'A draggable and resizable event',
          color: colors.yellow,
          actions: this.actions,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }];
        this.activeDayIsOpen = true;
      }

      _createClass(BookingComponent, [{
        key: "dayClicked",
        value: function dayClicked(_ref3) {
          var date = _ref3.date,
              events = _ref3.events;

          if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true || events.length === 0) {
              this.activeDayIsOpen = false;
            } else {
              this.activeDayIsOpen = true;
            }

            this.viewDate = date;
          }
        }
      }, {
        key: "eventTimesChanged",
        value: function eventTimesChanged(_ref4) {
          var event = _ref4.event,
              newStart = _ref4.newStart,
              newEnd = _ref4.newEnd;
          this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
              return Object.assign(Object.assign({}, event), {
                start: newStart,
                end: newEnd
              });
            }

            return iEvent;
          });
          this.handleEvent('Dropped or resized', event);
        }
      }, {
        key: "handleEvent",
        value: function handleEvent(action, event) {
          this.modalData = {
            event: event,
            action: action
          };
          this.modal.open(this.modalContent, {
            size: 'lg'
          });
        }
      }, {
        key: "addEvent",
        value: function addEvent() {
          this.events = [].concat(_toConsumableArray(this.events), [{
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
              beforeStart: true,
              afterEnd: true
            }
          }]);
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(eventToDelete) {
          this.events = this.events.filter(function (event) {
            return event !== eventToDelete;
          });
        }
      }, {
        key: "setView",
        value: function setView(view) {
          this.view = view;
        }
      }, {
        key: "closeOpenMonthViewDay",
        value: function closeOpenMonthViewDay() {
          this.activeDayIsOpen = false;
        }
      }]);

      return BookingComponent;
    }();

    BookingComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], BookingComponent.prototype, "modalContent", void 0);
    BookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/booking/booking.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./booking.component.css */
      "./src/app/pages/PatientDashboard/booking/booking.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])], BookingComponent);
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/dashboard/dashboard.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/dashboard/dashboard.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPatientDashboardDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJQYXRpZW50RGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/dashboard/dashboard.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/dashboard/dashboard.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesPatientDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/doctor.service */
    "./src/app/services/doctor.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(doctor) {
        _classCallCheck(this, DashboardComponent);

        this.doctor = doctor;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.doctor.getPractices().subscribe(function (res) {
            _this6.practices = res.data;
          }, function (err) {// Handle error here
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/pages/PatientDashboard/dashboard/dashboard.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_doctor_service__WEBPACK_IMPORTED_MODULE_2__["DoctorService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/profile/profile.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/profile/profile.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPatientDashboardProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJQYXRpZW50RGFzaGJvYXJkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/PatientDashboard/profile/profile.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/PatientDashboard/profile/profile.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppPagesPatientDashboardProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(fb, patServ) {
        _classCallCheck(this, ProfileComponent);

        this.fb = fb;
        this.patServ = patServ;
        this.user = JSON.parse(localStorage.getItem('user'));
        ;
        this.user.idLoc = "sbdua";
        this.userForm = fb.group(this.user);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log(this.user);
        }
      }, {
        key: "update",
        value: function update() {
          var _this7 = this;

          this.patServ.update(this.userForm.value).subscribe(function (res) {
            localStorage.setItem('user', JSON.stringify(_this7.userForm.value));
            var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              onOpen: function onOpen(toast) {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.resumeTimer);
              }
            });
            Toast.fire({
              icon: 'success',
              title: 'Updated successfully'
            });
          }, function (err) {
            console.log(err);
          });
          console.log(this.userForm.value);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
      }];
    };

    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/PatientDashboard/profile/profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/pages/PatientDashboard/profile/profile.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]])], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/pages/doctor-info/doctor-info.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/pages/doctor-info/doctor-info.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDoctorInfoDoctorInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N0b3ItaW5mby9kb2N0b3ItaW5mby5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/doctor-info/doctor-info.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/doctor-info/doctor-info.component.ts ***!
    \************************************************************/

  /*! exports provided: DoctorInfoComponent */

  /***/
  function srcAppPagesDoctorInfoDoctorInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorInfoComponent", function () {
      return DoctorInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DoctorInfoComponent =
    /*#__PURE__*/
    function () {
      function DoctorInfoComponent() {
        _classCallCheck(this, DoctorInfoComponent);
      }

      _createClass(DoctorInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DoctorInfoComponent;
    }();

    DoctorInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-doctor-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./doctor-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-info/doctor-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./doctor-info.component.css */
      "./src/app/pages/doctor-info/doctor-info.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DoctorInfoComponent);
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.css":
  /*!***********************************************!*\
    !*** ./src/app/pages/home/home.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/home/home.component.ts ***!
    \**********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppPagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/pages/home/home.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.css":
  /*!*************************************************!*\
    !*** ./src/app/pages/login/login.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    padding-top: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFSSxhQUFhO0lBRWIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImxvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_auth_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth-patient.service */
    "./src/app/services/auth-patient.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, route) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.route = route;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this8 = this;

          this.auth.loginPatient(this.loginForm.value).subscribe(function (res) {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            localStorage.setItem('token', JSON.stringify(res.data.token));
            var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              onOpen: function onOpen(toast) {
                toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.stopTimer);
                toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.resumeTimer);
              }
            });
            Toast.fire({
              icon: 'success',
              title: 'Signed in successfully'
            });

            _this8.route.navigate(['/patient/dashboard']);
          }, function (error) {
            console.log(error.error.message);
            var msg = error.error.message;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Error', error.error.message, 'error'); // error handle here
          });
          console.log(this.loginForm.value);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_auth_patient_service__WEBPACK_IMPORTED_MODULE_3__["AuthPatientService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/pages/login/login.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_patient_service__WEBPACK_IMPORTED_MODULE_3__["AuthPatientService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/app/pages/patient-info/patient-info.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/pages/patient-info/patient-info.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPatientInfoPatientInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXRpZW50LWluZm8vcGF0aWVudC1pbmZvLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/patient-info/patient-info.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/patient-info/patient-info.component.ts ***!
    \**************************************************************/

  /*! exports provided: PatientInfoComponent */

  /***/
  function srcAppPagesPatientInfoPatientInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientInfoComponent", function () {
      return PatientInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PatientInfoComponent =
    /*#__PURE__*/
    function () {
      function PatientInfoComponent() {
        _classCallCheck(this, PatientInfoComponent);
      }

      _createClass(PatientInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PatientInfoComponent;
    }();

    PatientInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-patient-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./patient-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/patient-info/patient-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./patient-info.component.css */
      "./src/app/pages/patient-info/patient-info.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PatientInfoComponent);
    /***/
  },

  /***/
  "./src/app/pages/pharmacy-info/pharmacy-info.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/pharmacy-info/pharmacy-info.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPharmacyInfoPharmacyInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaGFybWFjeS1pbmZvL3BoYXJtYWN5LWluZm8uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/pharmacy-info/pharmacy-info.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/pharmacy-info/pharmacy-info.component.ts ***!
    \****************************************************************/

  /*! exports provided: PharmacyInfoComponent */

  /***/
  function srcAppPagesPharmacyInfoPharmacyInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PharmacyInfoComponent", function () {
      return PharmacyInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PharmacyInfoComponent =
    /*#__PURE__*/
    function () {
      function PharmacyInfoComponent() {
        _classCallCheck(this, PharmacyInfoComponent);
      }

      _createClass(PharmacyInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PharmacyInfoComponent;
    }();

    PharmacyInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pharmacy-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pharmacy-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pharmacy-info/pharmacy-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pharmacy-info.component.css */
      "./src/app/pages/pharmacy-info/pharmacy-info.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PharmacyInfoComponent);
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/pages/register/register.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n    padding-top: 100px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFFSSxhQUFhO0lBRWIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InJlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/register/register.component.ts ***!
    \******************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppPagesRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_patient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/patient.service */
    "./src/app/services/patient.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(fb, patientService) {
        var _this9 = this;

        _classCallCheck(this, RegisterComponent);

        this.fb = fb;
        this.patientService = patientService;
        this.patientService.getMedicalAid().subscribe(function (res) {
          _this9.medicalAid = res.data;
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            medical_aid: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            medical_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            idno: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            cell: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            aid_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Mr'),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Male')
          });
        }
      }, {
        key: "register",
        value: function register() {
          console.log(this.registerForm.value);
          this.patientService.register(this.registerForm.value).subscribe(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', 'Registration successful', 'success');
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', error.error.message, 'error');
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]
      }];
    };

    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.css */
      "./src/app/pages/register/register.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_patient_service__WEBPACK_IMPORTED_MODULE_3__["PatientService"]])], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/services/auth-patient.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/auth-patient.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthPatientService */

  /***/
  function srcAppServicesAuthPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthPatientService", function () {
      return AuthPatientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthPatientService =
    /*#__PURE__*/
    function () {
      function AuthPatientService(http) {
        _classCallCheck(this, AuthPatientService);

        this.http = http;
      }

      _createClass(AuthPatientService, [{
        key: "loginPatient",
        value: function loginPatient(data) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'patient/login', data);
        }
      }]);

      return AuthPatientService;
    }();

    AuthPatientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthPatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AuthPatientService);
    /***/
  },

  /***/
  "./src/app/services/doctor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/doctor.service.ts ***!
    \********************************************/

  /*! exports provided: DoctorService */

  /***/
  function srcAppServicesDoctorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoctorService", function () {
      return DoctorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var DoctorService =
    /*#__PURE__*/
    function () {
      function DoctorService(http) {
        _classCallCheck(this, DoctorService);

        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authentication', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInR5cGUiOiJwIiwiaWF0IjoxNTk4MzUwOTEzLCJleHAiOjE1OTkxNTA5MTN9.gzgdNe9kYZnYAqulkCoDmUKLRoPhAvhJTVepmZrjPYw');
      }

      _createClass(DoctorService, [{
        key: "getPractices",
        value: function getPractices() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'doctor', {
            headers: this.headers
          });
        }
      }]);

      return DoctorService;
    }();

    DoctorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DoctorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], DoctorService);
    /***/
  },

  /***/
  "./src/app/services/patient.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/patient.service.ts ***!
    \*********************************************/

  /*! exports provided: PatientService */

  /***/
  function srcAppServicesPatientServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientService", function () {
      return PatientService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var PatientService =
    /*#__PURE__*/
    function () {
      function PatientService(http) {
        _classCallCheck(this, PatientService);

        this.http = http;
      }

      _createClass(PatientService, [{
        key: "update",
        value: function update(user) {
          return this.http.patch(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'patient', user, {
            headers: this.getheaders()
          });
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'patient', user);
        }
      }, {
        key: "getMedicalAid",
        value: function getMedicalAid() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'aid');
        }
      }, {
        key: "getBooking",
        value: function getBooking() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url + 'appointment/patient', {
            headers: this.getheaders()
          });
        }
      }, {
        key: "getheaders",
        value: function getheaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authentication', localStorage.getItem('token').substring(1, localStorage.getItem('token').length - 1));
          return headers;
        }
      }]);

      return PatientService;
    }();

    PatientService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PatientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], PatientService);
    /***/
  },

  /***/
  "./src/app/shared/fixedplugin/fixedplugin.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
    \*************************************************************/

  /*! exports provided: FixedPluginComponent */

  /***/
  function srcAppSharedFixedpluginFixedpluginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedPluginComponent", function () {
      return FixedPluginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FixedPluginComponent =
    /*#__PURE__*/
    function () {
      function FixedPluginComponent() {
        _classCallCheck(this, FixedPluginComponent);

        this.sidebarColor = "white";
        this.sidebarActiveColor = "danger";
        this.state = true;
      }

      _createClass(FixedPluginComponent, [{
        key: "changeSidebarColor",
        value: function changeSidebarColor(color) {
          var sidebar = document.querySelector('.sidebar');
          this.sidebarColor = color;

          if (sidebar != undefined) {
            sidebar.setAttribute('data-color', color);
          }
        }
      }, {
        key: "changeSidebarActiveColor",
        value: function changeSidebarActiveColor(color) {
          var sidebar = document.querySelector('.sidebar');
          this.sidebarActiveColor = color;

          if (sidebar != undefined) {
            sidebar.setAttribute('data-active-color', color);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FixedPluginComponent;
    }();

    FixedPluginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'fixedplugin-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./fixedplugin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/fixedplugin/fixedplugin.component.html"))["default"]
    })], FixedPluginComponent);
    /***/
  },

  /***/
  "./src/app/shared/fixedplugin/fixedplugin.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
    \**********************************************************/

  /*! exports provided: FixedPluginModule */

  /***/
  function srcAppSharedFixedpluginFixedpluginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FixedPluginModule", function () {
      return FixedPluginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fixedplugin.component */
    "./src/app/shared/fixedplugin/fixedplugin.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var FixedPluginModule = function FixedPluginModule() {
      _classCallCheck(this, FixedPluginModule);
    };

    FixedPluginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]],
      declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]],
      exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_4__["FixedPluginComponent"]]
    })], FixedPluginModule);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = function FooterComponent() {
      _classCallCheck(this, FooterComponent);

      this.test = new Date();
    };

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'footer-cmp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html"))["default"]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/shared/footer/footer.module.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/footer/footer.module.ts ***!
    \************************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppSharedFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      exports: [_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]]
    })], FooterModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      url: 'http://2db07092e3a5.ngrok.io/api/v1/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /*!
    
    =========================================================
    * Paper Dashboard Angular - v2.1.0
    =========================================================
    
    * Product Page: https://www.creative-tim.com/product/paper-dashboard-angular
    * Copyright 2019 Creative Tim (https://www.creative-tim.com)
    * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-angular/blob/master/LICENSE.md)
    
    * Coded by Creative Tim
    
    =========================================================
    
    * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/sibathedev/Videos/MedicalCouchSite2020/Medical_couch/paper-dashboard-angular-master/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
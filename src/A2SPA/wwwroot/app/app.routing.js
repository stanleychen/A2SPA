"use strict";
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./security/auth-guard.service");
var about_component_1 = require("./about.component");
var index_component_1 = require("./index.component");
var contact_component_1 = require("./contact.component");
var login_component_1 = require("./login.component");
var signup_component_1 = require("./signup.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Home' } },
    { path: 'login', component: login_component_1.LoginComponent, data: { title: 'Login' } },
    { path: 'signup', component: signup_component_1.SignupComponent, data: { title: 'Signup' } },
    { path: 'about', component: about_component_1.AboutComponent, data: { title: 'About' } },
    { path: 'contact', component: contact_component_1.ContactComponent, data: { title: 'Contact' }, canActivate: [auth_guard_service_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [about_component_1.AboutComponent, index_component_1.IndexComponent, contact_component_1.ContactComponent, login_component_1.LoginComponent, signup_component_1.SignupComponent];
//# sourceMappingURL=app.routing.js.map
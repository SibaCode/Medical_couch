import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/PatientDashboard/dashboard/dashboard.component';
import { BookingComponent } from '../../pages/PatientDashboard/booking/booking.component';

// import { UserComponent } from '../../pages/PatientDashboard/user/user.component';
// import { TableComponent } from '../../pages/table/table.component';
// import { TypographyComponent } from '../../pages/typography/typography.component';
// import { IconsComponent } from '../../pages/icons/icons.component';
// import { MapsComponent } from '../../pages/maps/maps.component';
// import { NotificationsComponent } from '../../pages/notifications/notifications.component';
// import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';

export const PatientLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'booking',           component: BookingComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];

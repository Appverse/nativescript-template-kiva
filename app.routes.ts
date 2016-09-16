import {Routes} from '@angular/router';

import {DashboardPage} from './pages/dashboard/dashboard.page';
import {MethodsPage} from './pages/methods/methods.page';

export var routableComponents = [];

export const routes: Routes = [
    routeEntry({ path: '', component: DashboardPage}),
    routeEntry({ path: 'methods', component: MethodsPage}),
];

function routeEntry(data) {
    routableComponents.push(data.component);
    return data;
}

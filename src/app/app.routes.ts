import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListsDashboardComponent } from './components/lists-dashboard/lists-dashboard.component';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { CheckListComponent } from './components/check-list/check-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'my-lists', title: 'Mis listas', component: ListsDashboardComponent, 
        children:[
            {path: 'expenses', component: ExpensesListComponent},
            {path: 'check', component: CheckListComponent},
            {path: 'chat', component: ChatListComponent}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

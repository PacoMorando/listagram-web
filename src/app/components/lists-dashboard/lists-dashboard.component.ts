import { Component } from '@angular/core';
import { ChatListComponent } from '../chat-list/chat-list.component';
import { CheckListComponent } from '../check-list/check-list.component';
import { ExpensesListComponent } from '../expenses-list/expenses-list.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lists-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChatListComponent, CheckListComponent, ExpensesListComponent],
  templateUrl: './lists-dashboard.component.html',
  styleUrl: './lists-dashboard.component.css'
})
export class ListsDashboardComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-practice';
}

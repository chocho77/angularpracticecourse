import { Component } from '@angular/core';
import { AdminComponent } from '../admin/admin.component';
import { UserComponent } from '../user/user.component';
import { TempComponent } from '../components/temp.component';

@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent, TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-practice';
}

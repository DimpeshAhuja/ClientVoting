import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserLogincomponantComponent } from './user-logincomponant/user-logincomponant.component';
import { AdminlogincomponantComponent } from './adminlogincomponant/adminlogincomponant.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,UserLogincomponantComponent,AdminlogincomponantComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'votingfront';
}

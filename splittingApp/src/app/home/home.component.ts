import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  MatButtonModule } from '@angular/material/button';
import { ToggleSideNavComponent } from '../toggle-side-nav/toggle-side-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,MatSidenavModule,MatButtonModule,RouterLink,ToggleSideNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}

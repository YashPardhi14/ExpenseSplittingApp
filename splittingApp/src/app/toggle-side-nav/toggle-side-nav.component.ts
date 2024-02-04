import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toggle-side-nav',
  standalone: true,
  imports: [MatSidenavModule,MatButtonModule,RouterLink],
  templateUrl: './toggle-side-nav.component.html',
  styleUrl: './toggle-side-nav.component.css'
})
export class ToggleSideNavComponent {

}

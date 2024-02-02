import { Component, Input } from '@angular/core';
import { Users } from '../users';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {


  @Input() user!:Users;

 
}

import { Component, Input } from '@angular/core';
import { Groups } from '../groups';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-group-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './group-card.component.html',
  styleUrl: './group-card.component.css'
})
export class GroupCardComponent {


  @Input()  group:Groups | undefined;


}

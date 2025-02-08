import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-card',
  standalone:true,
  imports:[IonicModule,CommonModule],
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.scss'],
})
export class RoomCardComponent  implements OnInit {
  @Input({required:true}) room: any;
  constructor() { }

  ngOnInit() {}

}

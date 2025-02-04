import { IonicModule } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { mailOutline, peopleOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  standalone:true,
  imports:[IonicModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  @Input({required:true}) user!:any;
  constructor() {
    this.iconsRegister()
  }

  ngOnInit() {}
  private iconsRegister(){
    addIcons({
      peopleOutline,
      personOutline,
      mailOutline
    })
  }
}

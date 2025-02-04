import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ProfileComponent } from "../components/profile/profile.component";
import { ChangePasswordComponent } from "../components/change-password/change-password.component";
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, ProfileComponent, ChangePasswordComponent],
})
export default class MyProfilePage implements OnInit {
  private readonly _authService=inject(AuthService);
  segment: string = 'profile';
  user!:any;

  segmentChanged(event: any) {
    this.segment = event.detail.value;
  }
  constructor() {

  }
  /*
  * usar metodo para cargar los datos al entrar a la vista en todos las conexiones a la api
  */
  ionViewWillEnter(){
    this.getUserData()
  }

  private getUserData(){
    this._authService.getMe().subscribe({
      next:(data)=>{
        console.log(data)
        this.user=data;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  ngOnInit() {}
}

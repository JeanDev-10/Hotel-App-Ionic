import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ProfileComponent } from "../components/profile/profile.component";
import { ChangePasswordComponent } from "../components/change-password/change-password.component";
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, ProfileComponent, ChangePasswordComponent],
})
export default class MyProfilePage implements OnInit {
  private readonly _authService=inject(AuthService);
  private readonly _router=inject(Router);
  private readonly _toastService=inject(ToastService);
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

  logout(){
    this._authService.logout().subscribe({
      next:()=>{
        this._router.navigateByUrl('/auth/login')
        this._toastService.presentToastSucess("Cierre de sesión exitoso!")
      }
    })
  }
  ngOnInit() {}
}

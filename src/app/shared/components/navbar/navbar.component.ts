import { IonicModule } from '@ionic/angular';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonicModule]
})
export class NavbarComponent {

  @Input({required:true}) title:string="";
  @Input() hrefDefault:string="";



}

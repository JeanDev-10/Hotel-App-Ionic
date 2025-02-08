import { IonicModule } from '@ionic/angular';
import { Component, inject, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone:true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [IonicModule,CommonModule]
})
export class NavbarComponent {

  @Input({required:true}) title:string="";
  @Input() hrefDefault:string="";

  private readonly spinnerService = inject(SpinnerService);
  isLoadingSpecialSpinner$!:Subject<boolean>;

  constructor() {
    this.isLoadingSpecialSpinner$=this.spinnerService.isLoading$;
   }

}

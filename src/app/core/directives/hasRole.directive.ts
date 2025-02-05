import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from 'src/app/auth/services/auth.service';

@Directive({
  selector: '[hasRole]',
})
export class HasRoleDirective {
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  private user = toSignal(inject(AuthService).getMe());
  role = input.required<string>({
    alias: 'hasRole',
  });

  constructor() {
    effect(() => {
      const user = this.user();
      const role = this.role();

      this.viewContainerRef.clear();
      console.log(user,role)
      if (user && this.hasRole(user, role)) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    });
  }

  hasRole(user: any, role:string) {
    return user?.role?.name==role
  }
}

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

// export const hasRoleGuard: CanActivateFn = (route, state) => {
//   const roles = route.data?.['roles'] as string[];

//   return inject(AuthService).currentUser$.pipe(
//     map((user) => {
//       if (!user) return false;

//       return user.roles.some((role) => roles.includes(role));
//     }),
//   );
// };

/* export const hasRoleGuard = (role: string): CanActivateFn => {
  return () => {
    return inject(AuthService).getMe().pipe(
      map((user) => {
        if (!user) return false;
        return user.role.name==role;
      }),
    );
  };
}; */
export const hasRoleGuard = (role: string): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.getMe().pipe(
      map((user) => {
        if (!user) return false;
        return user.role.name === role;
      }),
      tap((hasAccess) => {
        if (!hasAccess) {
          router.navigate(['/dashboard/room']); // Redirige al dashboard si no tiene acceso
        }
      })
    );
  };
};

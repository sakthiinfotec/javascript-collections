import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, createUrlTreeFromSnapshot } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs';
import { SessionService } from '../service/session.service';
import { UserService } from '../service/user.service';
import { LOGIN } from '../constants/app';

// Observable way of the authentication guard implementation
export const authGuard2: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const userService = inject(UserService);
  const toastr = inject(ToastrService);
  return userService.isLoggedIn().pipe(
    tap((loggedIn) => {
      if (loggedIn) {
        console.log('Access granted');
      } else {
        toastr.warning("You don't have permission to access this page...!");
      }
    }),
    map((loggedIn) => (loggedIn ? true : createUrlTreeFromSnapshot(next, ['/', LOGIN])))
  );
};

/*
// This is another way of the authentication guard implementation
export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = inject(SessionService);
  const toastr = inject(ToastrService);
  const router = inject(Router);
  if (sessionService.isLoggedIn()) {
    console.log('Access granted');
    return true;
  } else {
    toastr.warning('Unauthorized access. Redirecting to login!');
    router.navigate([LOGIN]);
    return false;
  }
};
*/

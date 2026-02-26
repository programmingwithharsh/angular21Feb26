import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const router = inject(Router); // added in latest angular version
  const id = Number(route.paramMap.get('id'));

  if (isNaN(id) || id < 1) {
    alert(`Invalid product Id`);
    router.navigate(['/products']);
    return false;
  }

  return true;
};

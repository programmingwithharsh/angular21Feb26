import { ApplicationConfig, ErrorHandler, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { GlobalErrorHandler } from './global-error-handler';
import { authInterceptor } from './auth-interceptor';

// ngrx
import { provideStore } from '@ngrx/store';
import { categoryReducer } from './categories/store';
import { provideEffects } from '@ngrx/effects';
import { CategoryEffects } from './categories/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideStore({
      categories: categoryReducer
    }),
    provideEffects([CategoryEffects]),
    provideStoreDevtools({})
  ]
};

import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {appRoutes} from './app.routes';
import {provideState, provideStore} from "@ngrx/store";
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {authFeatureKey, authReducer} from "./auth/store/reducers";
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes), provideStore({}),provideState(authFeatureKey,authReducer), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode(),autoPause:true,trace:false,traceLimit:75 }),provideHttpClient()],
};

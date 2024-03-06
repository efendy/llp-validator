import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Import the root module

// Enable production mode if needed
// if (process.env.NODE_ENV === 'production') {
//   enableProdMode();
// }

// Bootstrap the root module (AppModule)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

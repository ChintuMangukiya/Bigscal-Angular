import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { Header } from './app/Header/header';

bootstrapApplication(AppComponent).catch((err) => console.error(err));


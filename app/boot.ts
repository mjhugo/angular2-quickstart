import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component'
import {enableProdMode} from '@angular/core';
import {Ng2BootstrapConfig, Ng2BootstrapTheme} from 'ng2-bootstrap/ng2-bootstrap';

Ng2BootstrapConfig.theme = Ng2BootstrapTheme.BS4;

enableProdMode();

bootstrap(AppComponent);
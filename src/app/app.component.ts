import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PresenceService } from './services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public auth: AuthService, public presence: PresenceService) {}
}

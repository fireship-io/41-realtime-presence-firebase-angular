import { Component, OnInit, Input } from '@angular/core';
import { PresenceService } from '../services/presence.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() uid;

  presence$;

  constructor(private presence: PresenceService) { }

  ngOnInit() {
    this.presence$ = this.presence.getPresence(this.uid);
  }

}

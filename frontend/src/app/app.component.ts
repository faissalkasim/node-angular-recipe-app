import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isAuth: boolean;
  private isAuthSub: Subscription;

  constructor(private state: StateService,
    private auth: AuthService) { }
  
    ngOnInit() {
      this.isAuthSub = this.auth.isAuth$.subscribe(
        (auth) => {
          this.isAuth = auth;
        }
      );
    }

}

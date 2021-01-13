import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserModel } from '../../models/user.model'
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userLocal: UserModel = new UserModel;

  constructor(public auth: AuthService, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  crear(email: string) {
    this.userLocal.correo = email;

    if (this.userLocal.id) {
      this.usersService.updateUser(this.userLocal)
        .subscribe(resp => {
          console.log(resp);
        });
    } else {
      this.usersService.createUser(this.userLocal)
        .subscribe(resp => {
          console.log(resp);
          this.userLocal = resp;
        });
    }
  }
}

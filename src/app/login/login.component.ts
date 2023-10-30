import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user ={username:'',password:''};

  constructor(private userService: UserService ,private router:Router){ 

  }

  login(){

    this.userService.login(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();

      },
      error=>console.log(error));
    }
      

  goToUserList(){
    this.router.navigate(['/users']);
      }

}

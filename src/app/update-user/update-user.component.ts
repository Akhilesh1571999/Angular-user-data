import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  user_id:number=0;
  user: User=new User();
  constructor(private userService:UserService,
    private route:ActivatedRoute,
    private router:Router,){

  }
  ngOnInit(): void {
    this.user_id= this.route.snapshot.params['user_id'];
    this.userService.getUserById(this.user_id).subscribe(data =>{
      this.user=data;
    },error=>console.log(error));
  
    }

    onSubmit(){
      this.userService.updateUser(this.user_id, this.user).subscribe( data =>{
        this.goToUserList();
      }
      , error => console.log(error));
    }
   
    goToUserList(){
      this.router.navigate(['/users']);
    }
  
  }


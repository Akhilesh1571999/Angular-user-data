import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
// export class UpdateUserComponent implements OnInit{
//   id:number=0;
//   user: User=new User();
//   constructor(private userService:UserService,
//     private route:ActivatedRoute){

//   }
//   ngOnInit(): void {
//     this.id= this.route.snapshot.params['id'];
//     this.userService.grtUserById(this.id).subscribe(data =>{
//       this.user=data;
//     },error=>console.log(error));
  
//     }
   
//   }


export class UpdateUserComponent implements OnInit {

  user:User = new User
  constructor(private userService : UserService,
    private router: Router){}

  ngOnInit(): void {
    
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe(data =>{
      console.log(data);
      this.goToUserList();
    },
    error=>console.log(error));
  }

  goToUserList(){
this.router.navigate(['/users']);
  }

  onSubmit(){
   console.log(this.user); 
   this.updateUser();
  }

}

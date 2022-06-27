import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserPreview } from '../models/user.model'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users:UserPreview[] | undefined;
  count : number=0;
  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  creatuser() {
    this.user.createUser({ firstName: `ascasch${this.count}kldfk`, lastName: 'zxczklxczlzxc', email: `rzscasz${this.count}xrr@tessssst.com`})
    .subscribe(
        response => {console.log(response); this.getUsers()},
        (err) => console.log('Error Occurred (subscribe):', err),
    );

  this.count ++;
  }
getUsers(){
 this.user.getUsers().subscribe(response => {this.users= response.data;});
}
createUser(){
  this.creatuser();
}
   update(id:string,name:string){
   this.user.update(id,name).subscribe(Response => {this.getUsers()});
}
delete(id:string){
  this.user.delete(id).subscribe(() => this.getUsers());
  console.log('delet')
}
view(id: string){
 this.user.GetUserbyid(id).subscribe(Response=>console.log(Response));
}
}


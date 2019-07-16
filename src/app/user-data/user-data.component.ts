import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
public User: User;
public title = 'User Detail';
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router ) { }

  ngOnInit() {
    this.route.params.subscribe(
    (p) => {
       this.User = this.userService.getUser(+p.id);
    }
    );
  }
 backToUsers(){
   this.router.navigate(['users']);
 }
}

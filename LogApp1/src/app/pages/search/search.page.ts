import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  term;
  users: any;

  constructor(private user: UserService, private auth: AngularFireAuth, private route: Router) { 
    this.auth.authState.subscribe(auth =>{
      if(!auth){
        this.route.navigate(['login']);
      }
    })
  }

  ngOnInit() {
    this.user.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  term;
  users: any;

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    })
  }

}

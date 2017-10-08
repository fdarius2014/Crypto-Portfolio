import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userInformation;
  constructor() { }

  ngOnInit() {
    this.userInformation = {
        first_name: 'Francis',
        last_name: 'Darius',
        username: 'lil_buff123',
        email_address: 'fdarius2014@my.fit.edu',
        address: '5226 Professional Dr.',
        city: 'Wichita Falls',
        country: 'United States',
        zip_code: '76302',
        about_me: 'I am a very passionate Software Engineer who is always researching the latest technologies. Created this application using Angular 4'
    }
  }

}

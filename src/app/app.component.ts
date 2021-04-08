import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pre-Filled-From';
  userData = {
    name:'Bharti Devadhe',
    email: 'bharti.nehul07@gmail.com',
    
    password: '123456',
    address: '201 c wing, Pune Maharastra',
    mobile: 9850419853
    }
    
}

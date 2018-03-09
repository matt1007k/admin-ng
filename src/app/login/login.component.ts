import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


// llamar function o script fuera de angular desde assets/js/common.js
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router: Router ) { }

  ngOnInit() {
    init_plugins();
  }

  Ingresar() {
    this._router.navigate([ '/dashboard' ]);
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private _home: boolean;
  private _join: boolean;
  private router: Router;
  private _schedule: boolean;


  get schedule(): boolean {
    return this._schedule;
  }

  set schedule(value: boolean) {
    this._schedule = value;
  }

  get home(): boolean {
    return this._home;
  }

  set home(value: boolean) {
    this._home = value;
  }

  get join(): boolean {
    return this._join;
  }

  set join(value: boolean) {
    this._join = value;
  }

  public goHome() {
    this.router.navigate(['home']);
  }

  public goJoin() {
    this.router.navigate(['join']);
  }

  public goSchedule() {
    this.router.navigate(['schedule']);
  }

  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
    if (window.location.pathname === ('/home' || '/')) {
      this.home = true;
    } else if (window.location.pathname === '/join') {
      this.join = true;
    } else if (window.location.pathname === '/schedule') {
      this.schedule = true;
    }
  }

}

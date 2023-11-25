import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/user/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    TutorialComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor (
    private userService: UserService
  ) {}
  users: User[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(array => this.users = array)
  }
}

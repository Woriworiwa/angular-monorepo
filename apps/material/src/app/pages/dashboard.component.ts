import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'material-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterLink, MatDividerModule, MatSidenavModule, MatToolbarModule, RouterOutlet],
  template: `
      <mat-toolbar class="mat-elevation-z8">
          <button
                  mat-icon-button
                  *ngIf="sidenav.mode === 'over'"
                  (click)="sidenav.toggle()"
          >
              <mat-icon *ngIf="!sidenav.opened"> menu</mat-icon>
              <mat-icon *ngIf="sidenav.opened"> close</mat-icon>
          </button>
          Responsive side navigation
      </mat-toolbar>

      <mat-sidenav-container>
          <mat-sidenav #sidenav="matSidenav" class="mat-elevation-z8" [opened]="true">
              <img
                      class="avatar mat-elevation-z8"
                      src="https://source.unsplash.com/c_GmwfHBDzk/200x200"
              />

              <h4 class="name">John Smith</h4>
              <p class="designation">Software Engineer</p>

              <mat-divider></mat-divider>

              <button mat-button class="menu-button" routerLink="/home">
                  <mat-icon>home</mat-icon>
                  <span>Home</span>
              </button>
              <button mat-button class="menu-button" routerLink="/profile">
                  <mat-icon>person</mat-icon>
                  <span>Profile</span>
              </button>
              <button mat-button class="menu-button" routerLink="/about">
                  <mat-icon>info</mat-icon>
                  <span>About</span>
              </button>

              <mat-divider></mat-divider>

              <button mat-button class="menu-button" routerLink="/help">
                  <mat-icon>help</mat-icon>
                  <span>Help</span>
              </button>
          </mat-sidenav>
          <mat-sidenav-content>
              <div class="content mat-elevation-z8">
                  <router-outlet></router-outlet>
              </div>
          </mat-sidenav-content>
      </mat-sidenav-container>
  `,
})
export class DashboardComponent {}

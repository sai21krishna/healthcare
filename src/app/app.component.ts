import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopComponent } from './top/top.component';
import { SideComponent } from './side/side.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, NgModel } from '@angular/forms';
import { FileuploadComponent } from "./fileupload/fileupload.component";

@Component({
  selector: 'app-root',
  imports: [
    TopComponent,
    SideComponent,
    CommonModule,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    SettingsComponent,
    FormsComponent,
    FormsModule,
    FileuploadComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NavProject';
  selectedComponent: string = 'dashboard'; // Default component

  handleNavItemClick(item: string) {
    this.selectedComponent = item;
  }
}

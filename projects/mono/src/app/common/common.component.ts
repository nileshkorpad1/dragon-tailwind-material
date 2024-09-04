import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  LayoutBodyComponent,
  LayoutComponent,
  LayoutHeaderComponent,
  LayoutSidebarComponent
} from '@elementar/components/layout';
import { SidebarComponent } from '../@app/sidebar/sidebar/sidebar.component';
import { HeaderComponent } from '../@app/header/header/header.component';

@Component({
  selector: 'app-common',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    LayoutBodyComponent,
    LayoutComponent,
    LayoutHeaderComponent,
    LayoutSidebarComponent,
    SidebarComponent
  ],
  templateUrl: './common.component.html',
  styleUrl: './common.component.scss'
})
export class CommonComponent {

}

import { Component } from '@angular/core';
import { AvatarComponent, AvatarGroupComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-grouped-avatars-example',
  standalone: true,
  templateUrl: './grouped-avatars-example.component.html',
  imports: [
    AvatarComponent,
    AvatarGroupComponent
  ],
  styleUrl: './grouped-avatars-example.component.scss'
})
export class GroupedAvatarsExampleComponent {

}

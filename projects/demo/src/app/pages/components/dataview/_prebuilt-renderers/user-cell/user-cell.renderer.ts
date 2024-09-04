import { Component, input } from '@angular/core';
import { DataViewCellRendererComponent, DataViewColumnDef } from '@elementar/components/data-view';
import { InitialsPipe } from '@elementar/components/core';
import { AvatarComponent, DicebearComponent } from '@elementar/components/avatar';

@Component({
  selector: 'app-user-cell',
  standalone: true,
  imports: [
    InitialsPipe,
    AvatarComponent,
    DicebearComponent
  ],
  templateUrl: './user-cell.renderer.html',
  styleUrl: './user-cell.renderer.scss'
})
export class UserCellRenderer implements DataViewCellRendererComponent {
  element = input<any>();
  columnDef = input<DataViewColumnDef>();
  fieldData = input();
}

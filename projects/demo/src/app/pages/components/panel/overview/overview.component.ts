import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import { BasicPanelExampleComponent } from '../_examples/basic-panel-example/basic-panel-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicPanelExampleComponent,
    PageComponent,
    PageContentDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}

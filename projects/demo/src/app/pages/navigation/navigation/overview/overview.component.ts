import { Component } from '@angular/core';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicNavigationExampleComponent
} from '../_examples/basic-navigation-example/basic-navigation-example.component';
import {
  NavigationWithHeadingExampleComponent
} from '../_examples/navigation-with-heading-example/navigation-with-heading-example.component';
import {
  NavigationWithDividerExampleComponent
} from '../_examples/navigation-with-divider-example/navigation-with-divider-example.component';
import {
  NavigationWithIconsExampleComponent
} from '../_examples/navigation-with-icons-example/navigation-with-icons-example.component';
import {
  NavigationWithNestedMenuExampleComponent
} from '../_examples/navigation-with-nested-menu-example/navigation-with-nested-menu-example.component';
import {
  NavigationSecondaryThemeExampleComponent
} from '../_examples/navigation-secondary-theme-example/navigation-secondary-theme-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import {
  NavigationWithSimpleThemeExampleComponent
} from '../_examples/navigation-with-simple-theme-example/navigation-with-simple-theme-example.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    PlaygroundComponent,
    BasicNavigationExampleComponent,
    NavigationWithHeadingExampleComponent,
    NavigationWithDividerExampleComponent,
    NavigationWithIconsExampleComponent,
    NavigationWithNestedMenuExampleComponent,
    NavigationSecondaryThemeExampleComponent,
    PageComponent,
    PageContentDirective,
    NavigationWithSimpleThemeExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}

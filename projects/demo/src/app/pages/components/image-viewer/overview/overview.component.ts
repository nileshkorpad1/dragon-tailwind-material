import { Component } from '@angular/core';
import {
  BasicFilterBuilderExampleComponent
} from '../../filter-builder/_examples/basic-filter-builder-example/basic-filter-builder-example.component';
import { PageComponent } from '@demo/meta/page/page.component';
import { PageContentDirective } from '@demo/meta/page/page-content.directive';
import { PlaygroundComponent } from '@demo/meta/playground/playground.component';
import {
  BasicImageViewerExampleComponent
} from '../_examples/basic-image-viewer-example/basic-image-viewer-example.component';
import {
  ImageViewerWithCaptionAndDescriptionExampleComponent
} from '../_examples/image-viewer-with-caption-and-description-example/image-viewer-with-caption-and-description-example.component';
import {
  ImageViewerWithTitleExampleComponent
} from '../_examples/image-viewer-with-title-example/image-viewer-with-title-example.component';

@Component({
  standalone: true,
  imports: [
    BasicFilterBuilderExampleComponent,
    PageComponent,
    PageContentDirective,
    PlaygroundComponent,
    BasicImageViewerExampleComponent,
    ImageViewerWithCaptionAndDescriptionExampleComponent,
    ImageViewerWithTitleExampleComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}

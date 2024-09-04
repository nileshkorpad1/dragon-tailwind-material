import { Directive } from '@angular/core';

@Directive({
  selector: '[emrSegmentedIcon]',
  exportAs: 'emrSegmentedIcon',
  host: {
    'class': 'emr-segmented-icon'
  }
})
export class SegmentedIconDirective {
}

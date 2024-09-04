import {
  booleanAttribute,
  Component,
  forwardRef,
  input, OnInit
} from '@angular/core';
import { ULT_AVATAR_ACCESSOR } from '../avatar.properties';
import { createAvatar } from '@dicebear/core';
import { identicon, initials, thumbs } from '@dicebear/collection';
import { SafeHtmlPipe } from '@elementar/components/core';
import { v7 as uuid } from 'uuid';

export interface Preset {
  style: any,
  options?: {
    scale?: number;
    backgroundColor?: string[];
    fontWeight?: number;
  }
}

const alreadyLoadedImages: string[] = [];
const presets: {[prop: string]: Preset} = {
  'identicon': {
    style: identicon,
    options: {
      scale: 55,
      backgroundColor: ['cbebf7', 'ebe1fc', 'd1f9db', 'f7e4e7', 'fce8d4', 'dcfcf9']
    }
  },
  'initials': {
    style: initials,
    options: {
      scale: 75,
      fontWeight: 500
    }
  }
};

@Component({
  selector: 'emr-dicebear,[emr-dicebear]',
  exportAs: 'emrDicebear',
  templateUrl: './dicebear.component.html',
  styleUrls: ['./dicebear.component.scss'],
  providers: [
    {
      provide: ULT_AVATAR_ACCESSOR,
      useExisting: forwardRef(() => DicebearComponent),
      multi: true
    }
  ],
  standalone: true,
  imports: [
    SafeHtmlPipe
  ],
  host: {
    'class': 'emr-avatar emr-dicebear',
    '[class.is-clickable]': 'clickable()',
    '[class.has-loaded-image]': 'src() && imageLoaded',
  }
})
export class DicebearComponent implements OnInit {
  src = input<string>();
  clickable = input(false, {
    transform: booleanAttribute
  });
  text = input<string>();
  preset = input<string>('identicon');
  alt = input<string>();
  presenceIndicator = input<'online' | 'offline' | null>(null);

  protected imageLoaded: boolean;
  svg = '';

  ngOnInit() {
    if (this.src()) {
      this.imageLoaded = alreadyLoadedImages.includes(<string>this.src());
    }

    const preset = presets[this.preset()];
    const avatar = createAvatar(preset.style, {
      seed: this.text() || '',
      ...preset.options
    });
    this.svg = avatar.toString().replace('viewboxMask', uuid());
  }

  onImageLoaded(): void {
    if (this.imageLoaded) {
      return;
    }

    alreadyLoadedImages.push(<string>this.src());
    this.imageLoaded = true;
  }
}

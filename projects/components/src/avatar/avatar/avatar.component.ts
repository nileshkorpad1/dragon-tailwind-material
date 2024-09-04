import {
  booleanAttribute,
  Component,
  ElementRef,
  forwardRef,
  inject, input,
  OnChanges, OnInit,
  SimpleChanges
} from '@angular/core';
import { ULT_AVATAR_ACCESSOR } from '../avatar.properties';

const alreadyLoadedImages: string[] = [];

@Component({
  selector: 'emr-avatar,[emr-avatar]',
  exportAs: 'emrAvatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  providers: [
    {
      provide: ULT_AVATAR_ACCESSOR,
      useExisting: forwardRef(() => AvatarComponent),
      multi: true
    }
  ],
  host: {
    'class': 'emr-avatar',
    '[class.is-clickable]': 'clickable()',
    '[class.has-automatic-color]': '!!automaticColor()',
    '[class.has-loaded-image]': 'src() && imageLoaded',
  }
})
export class AvatarComponent implements OnInit, OnChanges {
  private _elementRef = inject(ElementRef);

  src = input<string>();
  clickable = input(false, {
    transform: booleanAttribute
  });
  text = input<string>();
  alt = input<string>();
  automaticColor = input<string>();
  presenceIndicator = input<'online' | 'offline' | null>(null);

  protected imageLoaded: boolean;

  ngOnInit() {
    if (!this.src()) {
      return;
    }

    this.imageLoaded = alreadyLoadedImages.includes(<string>this.src());
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['automaticColor'] && changes['automaticColor'].currentValue) {
      this._setAutomaticColor(changes['automaticColor'].currentValue);
    }
  }

  onImageLoaded(): void {
    if (this.imageLoaded) {
      return;
    }

    alreadyLoadedImages.push(<string>this.src());
    this.imageLoaded = true;
  }

  private _setAutomaticColor(color: any): void {
    if (!this.isValidHex(color)) {
      throw new Error(`Invalid ${color} color, automatic color supports only a valid hex color`);
    }

    const element = this._elementRef.nativeElement as HTMLElement;
    element.style.setProperty('--emr-avatar-bg', color);
    element.style.setProperty('--emr-avatar-border-color', this._newShade(color, -25));
    element.style.setProperty('--emr-avatar-color', this._newShade(color, -150));
  }

  private _newShade(hexColor: string, magnitude: number): string {
    hexColor = hexColor.replace(`#`, ``);
      if (hexColor.length === 6) {
      const decimalColor = parseInt(hexColor, 16);
      let r = (decimalColor >> 16) + magnitude;
      r > 255 && (r = 255);
      r < 0 && (r = 0);
      let g = (decimalColor & 0x0000ff) + magnitude;
      g > 255 && (g = 255);
      g < 0 && (g = 0);
      let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
      b > 255 && (b = 255);
      b < 0 && (b = 0);
      return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
      return hexColor;
    }
  };

  isValidHex(color: any): boolean {
    if(!color || typeof color !== 'string') {
      return false;
    }

    // Validate hex values
    if(color.substring(0, 1) === '#') {
      color = color.substring(1);
    }

    switch(color.length) {
      case 3: {
        return /^[0-9A-F]{3}$/i.test(color);
      }
      case 6: {
        return /^[0-9A-F]{6}$/i.test(color);
      }
      case 8: {
        return /^[0-9A-F]{8}$/i.test(color);
      }
      default: {
        return false;
      }
    }
  }
}

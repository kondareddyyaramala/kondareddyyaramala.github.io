import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private domSanitizer: DomSanitizer){

  }

  get style() {
    return this.domSanitizer.bypassSecurityTrustStyle(`--bgc: url('../../../dist/assets/coder-image.png')`);
  }

  routeTo(platform: string) {
    const openInNewTab = (url: string) => window.open(url, platform);
    platform === 'linkedIn'
      ? openInNewTab("https://www.linkedin.com/in/konda-reddy-y-50ba71157/")
      : openInNewTab("https://github.com/kondareddyyaramala");
  }
}

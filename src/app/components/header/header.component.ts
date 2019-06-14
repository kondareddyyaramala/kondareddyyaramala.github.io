import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routeTo(platform: string) {
    const openInNewTab = (url: string) => window.open(url, platform);
    platform === 'linkedIn'
      ? openInNewTab("https://www.linkedin.com/in/konda-reddy-y-50ba71157/")
      : openInNewTab("https://github.com/kondareddyyaramala");
  }
}

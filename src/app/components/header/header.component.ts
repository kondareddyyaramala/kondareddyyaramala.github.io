import { Component } from "@angular/core";
import { DomSanitizer, SafeStyle } from "@angular/platform-browser";

export type Platform = 'linkedIn' | 'github';

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public safeStyle: SafeStyle;
  readonly LINKS_MAP: Map<Platform, string> = new Map<Platform, string>()
        .set("linkedIn","https://www.linkedin.com/in/konda-reddy-y-50ba71157/" )
        .set("github", "https://github.com/kondareddyyaramala");

  constructor(private domSanitizer: DomSanitizer) {}

  ngAfterViewInit() {
    this.safeStyle = this.domSanitizer.bypassSecurityTrustStyle(
      `--bgc: url('../../../dist/assets/coder-image.png')`
    );
  }

  routeTo(platform: Platform) {
    window.open(this.LINKS_MAP.get(platform), platform)
  }
}

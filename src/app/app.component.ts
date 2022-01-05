import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-comp-testing';

  constructor() {
  }

  loadDemo1(){
    this.loadScript("http://localhost:9010/app-demo1-web.js");
    this.appendCustomTag('app-demo1-web');
  }
  loadDemo2(){
    this.loadScript("http://localhost:9011/app-demo2-web.js");
    this.appendCustomTag('app-demo2-web');

  }

  loadScript(url: string) {
    const body = document.body as HTMLDivElement;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
    script.onload = (x) => {
    }

    // create new link tag
    const link = document.createElement('link');

    // set properties of link tag
    link.href = this.getBasePath(url) + 'styles.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';

    // Loaded successfully
    link.onload = function () {
      console.log('success');
    };

    // Loading failed
    link.onerror = function () {
      console.log('error');
    };

    // append link element to html
    document.body.appendChild(link);
  }

  getBasePath(jsFileUrl: string) : string {
    const path = jsFileUrl.substr(0, jsFileUrl.lastIndexOf('/') + 1);
    return path;
  }

  appendCustomTag(newTag: string) {
    setTimeout(() => {
      this.changeTagName(document.getElementById('customTag'), newTag)
    }, 1);
  }

  changeTagName(el: any, newTagName: string) {
    const n = document.createElement(newTagName);
    const attr = el.attributes;
    for (let i = 0, len = attr.length; i < len; ++i) {
      n.setAttribute(attr[i].name, attr[i].value);
    }
    n.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(n, el);
  }
}

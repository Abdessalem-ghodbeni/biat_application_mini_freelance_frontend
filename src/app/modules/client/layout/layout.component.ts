import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor() {
    this.loadScript('assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js');
    this.loadScript('assets/vendor/tiny-slider/tiny-slider.js');
    this.loadScript('assets/vendor/glightbox/js/glightbox.js');
    this.loadScript('assets/vendor/purecounterjs/dist/purecounter_vanilla.js');
    this.loadScript('assets/vendor/apexcharts/js/apexcharts.min.js');
    this.loadScript('assets/vendor/overlay-scrollbar/js/overlayscrollbars.min.js');
    this.loadScript('assets/vendor/choices/js/choices.min.js');
    this.loadScript('assets/vendor/quill/js/quill.min.js');
    this.loadScript('assets/vendor/stepper/js/bs-stepper.min.js');
    this.loadScript('assets/js/functions.js');
  }


  loadScript(src: string) {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }

  userconnect = JSON.parse(localStorage.getItem("userconnect")!);

  logout(){
    localStorage.clear()
  }

}

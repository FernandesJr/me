import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  menuOpen: boolean = true;
  modeValueDrawer: any = 'side';
  widthScreen: number = window.innerWidth;

  constructor() {
    this.typeSidNavDrawer();
  }

  typeSidNavDrawer(): void {
    if (this.widthScreen < 550) this.modeValueDrawer = 'over';
  }

  changeIconSideNavu(): void {
    if (this.widthScreen > 550) this.menuOpen = !this.menuOpen;
  }
}

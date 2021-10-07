import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'spozumi-admin-panel';

  handler(test: any) {
    console.log(test);

    alert('hello!');
  }
}

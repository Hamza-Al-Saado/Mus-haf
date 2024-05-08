import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuranComponent } from './quran-app/quran-app.component';
 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,QuranComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-homework';
}

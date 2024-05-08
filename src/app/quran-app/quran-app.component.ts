import { Component, OnInit } from '@angular/core';
 
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, map, of, pipe, tap } from 'rxjs';
import { SearchModel } from './model';
import { QuranService } from './quran-app.service';

@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './quran-app.component.html',
  styleUrl: './quran-app.component.css'
})
export class QuranComponent  implements OnInit {

  searchForm! : FormGroup
  verse$! : Observable<SearchModel>
  verseText! : SearchModel
  verseArabic! : SearchModel
  verseEnglish! : SearchModel

  constructor(private quranService : QuranService,
              private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      chapter:["",Validators.required],
      verse:["",Validators.required]
    })
  }
  

  async Search(){
    var chapter = this.searchForm.get('chapter')?.value
    var verse = this.searchForm.get('verse')?.value

    this.quranService.getVerseName(chapter,verse).subscribe(text => {
      this.verseText = text
    });
  

    this.quranService.getTafserAR(chapter,verse).subscribe(text => {
      this.verseArabic = text
    });

    this.quranService.getTafserEN(chapter,verse).subscribe(text => {
      this.verseEnglish = text
    });
  }

}

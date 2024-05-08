import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { SearchModel } from "./model";



@Injectable({
    providedIn:'root'
})
export class QuranService{
    constructor(private httpClient : HttpClient){}

    getVerseName(chapter:string, verse:string) : Observable<SearchModel>{
        return this.httpClient.get<SearchModel>(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-quranindopak/${chapter}/${verse}.json`)
    }   

    getTafserAR(chapter:string, verse:string) : Observable<SearchModel>{
        return this.httpClient.get<SearchModel>(`https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir/ar-tafsir-muyassar/${chapter}/${verse}.json`)
    } 

    getTafserEN(chapter:string, verse:string) : Observable<SearchModel>{
        return this.httpClient.get<SearchModel>(`https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/eng-abdelhaleem/${chapter}/${verse}.json`)
    } 
}
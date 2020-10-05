import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
    
    constructor(private http: HttpClient) { }

    getItem(){
        return this.http.get("https://quotes15.p.rapidapi.com/quotes/random/?language_code=fr", {
            "headers": {
                "x-rapidapi-host": "quotes15.p.rapidapi.com",
                "x-rapidapi-key": "6f7a0c256fmsh7c3d31a315f4c7fp1c1aaejsne93ebeb4ede9"
            }
        })
    }

    getSecondItem(){
        return this.http.get("https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info", {
            "headers": {
                "x-rapidapi-host": "quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com",
                "x-rapidapi-key": "6f7a0c256fmsh7c3d31a315f4c7fp1c1aaejsne93ebeb4ede9"
            }
        })
    }
}

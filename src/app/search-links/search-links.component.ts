import { Component, OnInit } from '@angular/core';
import { SearchLinksService } from '../search-links.service';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'app-search-links',
  templateUrl: './search-links.component.html',
  styleUrls: ['./search-links.component.css']
})
export class SearchLinksComponent implements OnInit {
	searchWord: string;
  error_text: string = "";

  browsers = [
    {'link': 'https://www.google.com/search?q=', 'name': "google.com"},
    {'link': 'https://www.bing.com/search?q=', 'name': "bing.com"},
    {'link': 'https://www.ask.com/web?q=', 'name': "ask.com"}
  ];

  constructor() { }

  ngOnInit() {
  }
  go(searchWord:string, browser){
    this.error_text = "";
    this.searchWord = searchWord;
    if (browser && this.searchWord){
      window.location.href = browser.link + this.searchWord;
    } else if(!browser && this.searchWord){
      this.error_text = "Sorry, browser not selected!";
    } else if(!this.searchWord && browser){
      window.location.href = browser.link;
    } else if (!this.searchWord && !browser){
      this.error_text = "Sorry, you must select browser";
    }
  }

}
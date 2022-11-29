import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CxEvent, CartAddEntryEvent, CartAddEntrySuccessEvent, CartAddEntryFailEvent } from "@spartacus/core";
import {EventService} from '@spartacus/core'
import { WishListService } from '@spartacus/core';
import { ProductSearchService } from '@spartacus/core';

@Component({
  selector: 'app-custom-wish',
  templateUrl: './custom-wish.component.html',
  styleUrls: ['./custom-wish.component.scss']
})
export class CustomSearchComponent {

  results: any[] = [];

  constructor(private route: Router, 
    private events: EventService, 
    private wishes: WishListService,
    private search: ProductSearchService) {
    
  }

  wish(thing: any){
    const ser$ = this.search.getResults()
    ser$.subscribe(event => {
      //console.log(event)
      let wants : any[] = [];
      var products = event.products;
      products?.forEach(p => {
        var label = p//(p.name !== undefined ? p.name : "") + ' (' + (p.code !== undefined ? p.code : "") + ')'
        wants.push(label)
      })
      this.results = wants; 
    })
    this.search.search(thing)
  }

  add(foo: any){
    this.wishes.addEntry(foo);
  }
}
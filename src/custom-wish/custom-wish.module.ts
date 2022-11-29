import { NgModule } from '@angular/core';
import { CustomSearchComponent } from './custom-wish.component';
import { SearchBoxModule } from '@spartacus/storefront';
import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
  imports: [SearchBoxModule, SearchBoxModule, BrowserModule, CommonModule],
  declarations: [CustomSearchComponent],
  exports: [CustomSearchComponent]
})
export class CustomSearchModule {}
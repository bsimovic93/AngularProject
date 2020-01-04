import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BuildsComponent } from './builds/builds.component';
import { BuildListComponent } from './Builds/build-list/build-list.component';
import { BuildDescriptionComponent } from './Builds/build-description/build-description.component';
import { BuildItemComponent } from './Builds/Build-List/build-item/build-item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistEditComponent } from './Wishlist/wishlist-edit/wishlist-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BuildsComponent,
    BuildListComponent,
    BuildDescriptionComponent,
    BuildItemComponent,
    WishlistComponent,
    WishlistEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

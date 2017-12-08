import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GlobalNavBarComponent} from './global-nav-bar/global-nav-bar.component';
import {MultiTabsFormComponent} from './multi-tabs-form/multi-tabs-form.component';
import {RouterModule, Routes} from "@angular/router";
import {SubPageCompComponent} from './sub-page-comp/sub-page-comp.component';
import {AuthGuardService} from "./authguard-service";
import {LoginComponent} from "./login-component/login-component";
import {HttpClientModule} from "@angular/common/http";
import {BookListViewComponent} from './book-list-view/book-list-view.component';
import { WriteBookComponent } from './write-book/write-book.component';
import {HttpServiceService} from "./http-service.service";
import { BookListView2Component } from './book-list-view2/book-list-view2.component';
import { BookListView3Component } from './book-list-view3/book-list-view3.component';
import {FormsModule} from "@angular/forms";
import { ModalLayerComponent } from './modal-layer/modal-layer.component';
import { BookTypePipe } from './book-type.pipe';
import {UrlListService} from "./url-list.service";
import { ChartViewComponent } from './chart-view/chart-view.component';

const routes: Routes = [
  {path: '', redirectTo: 'multi', pathMatch: 'full'},
  {path: 'multi', component: MultiTabsFormComponent},
  {path: 'write', component: WriteBookComponent},
  {path: 'list', component: BookListViewComponent},
  {path: 'list2', component: BookListView2Component},
  {path: 'list3', component: BookListView3Component},
  {path: 'charts', component: ChartViewComponent},
  {path: 'lock', component: SubPageCompComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent}];


// 라우트에 딱히 문제가 없는데 자꾸 에러가났다.
//core.es5.js:1020 ERROR Error: Uncaught (in promise): EmptyError: no elements in sequence EmptyError: no elements in sequence
// 알고봤더니 오픈소스 에러였음.
// https://stackoverflow.com/questions/41131476/emptyerror-no-elements-in-sequence

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    MultiTabsFormComponent,
    SubPageCompComponent,
    LoginComponent,
    BookListViewComponent,
    WriteBookComponent,
    BookListView2Component,
    BookListView3Component,
    ModalLayerComponent,
    BookTypePipe,
    ChartViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService, HttpServiceService, UrlListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

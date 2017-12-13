import {AppComponent} from './app.component';
import {GlobalNavBarComponent} from './common/global-nav-bar/global-nav-bar.component';
import {LoginComponent} from "./common/login-component/login-component";
import {WriteBookComponent} from './book/book-write/book-write.component';
import {RestApiService} from "./services/RestApiService";
import {BookListComponent} from './book/book-list/book-list.component';
import {BookTypePipe} from './BookTypePipe';
import {ChartViewComponent} from './test-view/chart-view.component';
import {ListDetailComponent} from './book/book-detail/book-detail.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HomeComponentComponent} from './home/home-component';
import {CalendarComponent} from './calendar/calendar.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {BookWriteDeactivatedService} from "./book/book-write/book-write-deactivated.service";
import {GetLoginUserService} from "./services/GetLoginUserService";
import {TestTimeLineComponent} from './test-time-line/test-time-line.component';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {BookWrapperComponent} from './book/book-wrapper/book-wrapper.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent, pathMatch: 'full'},
  {
    path: 'book', component: BookWrapperComponent, children: [
      {path: '', component: BookListComponent},
      {path: 'detail/:id', component: ListDetailComponent},
      {path: 'write', component: WriteBookComponent, canDeactivate: [BookWriteDeactivatedService], pathMatch : 'full'},
    ]
  },
  {path: 'charts', component: ChartViewComponent},
  // {path: 'lock', component: LockPageCompComponent, canActivate: [AuthGuardService]},
  {path: 'cal', component: CalendarComponent},
  {path: 'timeline', component: TestTimeLineComponent},
  {path: "login", component: LoginComponent},
  {path: "**", component: NotFoundComponent}];


// 라우트에 딱히 문제가 없는데 자꾸 에러가났다.
//core.es5.js:1020 ERROR Error: Uncaught (in promise): EmptyError: no elements in sequence EmptyError: no elements in sequence
// 알고봤더니 오픈소스 에러였음.
// https://stackoverflow.com/questions/41131476/emptyerror-no-elements-in-sequence

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavBarComponent,
    LoginComponent,
    WriteBookComponent,
    BookListComponent,
    BookTypePipe,
    ChartViewComponent,
    ListDetailComponent,
    HomeComponentComponent,
    CalendarComponent,
    TestTimeLineComponent,
    NotFoundComponent,
    BookWrapperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    // InMemoryWebApiModule.forRoot(InMomeryDatabaseService, {delay: 500, put204:false})
  ],
  providers: [RestApiService, BookWriteDeactivatedService, GetLoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

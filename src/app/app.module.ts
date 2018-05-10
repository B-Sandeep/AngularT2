import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}  from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { BannerComponent } from './banner/banner.component';
import { EnquiryformComponent } from './enquiryform/enquiryform.component';
import { HomeComponent } from './routes/home/home.component';
import { OfficesComponent } from './routes/offices/offices.component';
import { NewcoursesComponent } from './routes/newcourses/newcourses.component';
import { OffersComponent } from './routes/offers/offers.component';
import { VirtualclassComponent } from './routes/virtualclass/virtualclass.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';
import {CourseService} from '../app/services/course.service';
import { OffercodePipe } from '../app/pipes/offercode.pipe';
import { FilterpricePipe } from './pipes/filterprice.pipe';
import { RevewlistComponent } from './routes/reviews/revewlist/revewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { ReviewService } from './services/review.service';
import { ReviewsComponent } from '../app/routes/reviews/reviews.component';
import { EnquiryService} from './services/enquiry.service';
import { TranslateModule,TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CoursedetailsComponent } from './routes/home/coursedetails/coursedetails.component';
import { ScheduleComponent } from './schedule/schedule.component';

export function createTranslateLoader(http:HttpClient)
{
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

const routes=[
  {path:"",component:HomeComponent},
  {path:"offices",component:OfficesComponent},
  {path:"newcourse",component:NewcoursesComponent},
  {path:"Offers",component:OffersComponent},
  {path:"vclass",component:VirtualclassComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"cdetails/:ccode",component:CoursedetailsComponent},
  {path:"schedules",component:ScheduleComponent,outlet:"sidebar"},
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    BannerComponent,
    EnquiryformComponent,
    HomeComponent,
    OfficesComponent,
    NewcoursesComponent,
    OffersComponent,
    VirtualclassComponent,
    ReviewsComponent,
    CourselistComponent,
    CourseComponent,
    OffercodePipe,
    FilterpricePipe,
    RevewlistComponent,
    ReviewComponent,
    CoursedetailsComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule ,RouterModule.forRoot(routes),FormsModule ,HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:(createTranslateLoader),
        deps:[HttpClient]
      }
    }),ReactiveFormsModule
   
  ],
  providers: [CourseService,ReviewService,EnquiryService],
  bootstrap: [AppComponent]
})
export class AppModule { }

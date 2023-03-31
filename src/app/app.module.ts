import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageOneComponent } from './components/pages/home-page-one/home-page-one.component';
//import { HomePageTwoComponent } from './components/pages/home-page-two/home-page-two.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { HomeoneAboutComponent } from './components/pages/home-page-one/homeone-about/homeone-about.component';
import { HomeoneMainBannerComponent } from './components/pages/home-page-one/homeone-main-banner/homeone-main-banner.component';
import { HeaderStyleOneComponent } from './components/common/header-style-one/header-style-one.component';
import { CategoriesStyleOneComponent } from './components/common/categories-style-one/categories-style-one.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { HomeoneCoursesComponent } from './components/pages/home-page-one/homeone-courses/homeone-courses.component';
import { PartnerStyleOneComponent } from './components/common/partner-style-one/partner-style-one.component';
import { BecomeInstructorPartnerComponent } from './components/common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleOneComponent } from './components/common/feedback-style-one/feedback-style-one.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { InstructorsStyleTwoComponent } from './components/common/instructors-style-two/instructors-style-two.component';
import { WebinarCountdownComponent } from './components/common/webinar-countdown/webinar-countdown.component';
import { PartnerStyleTwoComponent } from './components/common/partner-style-two/partner-style-two.component';
import { InstructorsStyleThreeComponent } from './components/common/instructors-style-three/instructors-style-three.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { ProductionAudiovisuelleComponent } from './components/pages/production-audiovisuelle/production-audiovisuelle.component';
import { RELATIONSPRESSEETPUBLIQUESComponent } from './components/pages/relations-presse-et-publiques/relations-presse-et-publiques.component';
import { MarketingDigitalComponent } from './components/pages/marketing-digital/marketing-digital.component';
import { ÉVÉNEMENTIELComponent } from './components/pages/événementiel/événementiel.component';
import { DéveloppementWebComponent } from './components/pages/développement-web/développement-web.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { DESIGNGRAPHIQUEComponent } from './components/pages/design-graphique/design-graphique.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NOSCLIENTSComponent } from './components/pages/nos-clients/nos-clients.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';
import { HomePageTwoComponent } from './components/pages/home-page-two/home-page-two.component';
import {UserHeaderComponent} from './components/common/user-header/user-header.component';
//import {InscriptionComponent}from './components/pages/inscription/inscription.component';
import {ProComponent} from './components//pages/pro/pro.component';
import {HometwoAboutComponent}from './components/pages/home-page-two/hometwo-about/hometwo-about.component';
import {HometwoCoursesComponent} from './components/pages/home-page-two/hometwo-courses/hometwo-courses.component';
import {HometwoMainBannerComponent} from './components/pages/home-page-two/hometwo-main-banner/hometwo-main-banner.component';
//import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {CommonElementsComponent} from './components/common/common-elements/common-elements.component'
import {GalerieComponent} from './components/pages/galerie/galerie.component';
import {ClientsComponent} from './components/pages/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageOneComponent,
    HomePageTwoComponent,
    CommonElementsComponent,
    FooterComponent,
    PreloaderComponent,
    HomeoneAboutComponent,
    HomeoneMainBannerComponent,
    HeaderStyleOneComponent,
    CategoriesStyleOneComponent,
    FunfactsComponent,
    HomeoneCoursesComponent,
    PartnerStyleOneComponent,
    BecomeInstructorPartnerComponent,
    FeedbackStyleOneComponent,
    BlogComponent,
    InstructorsStyleTwoComponent,
    WebinarCountdownComponent,
    PartnerStyleTwoComponent,
    InstructorsStyleThreeComponent,
    FeaturesComponent,
    AboutPageOneComponent,
    ProductionAudiovisuelleComponent,
    RELATIONSPRESSEETPUBLIQUESComponent,
    MarketingDigitalComponent,
    ÉVÉNEMENTIELComponent,
    DéveloppementWebComponent,
    FeedbackPageComponent,
    DESIGNGRAPHIQUEComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ErrorPageComponent,
    ComingSoonPageComponent,
    BlogRightSidebarPageComponent,
    BlogDetailsPageComponent,
    CheckoutPageComponent,
    ContactPageComponent,
    NOSCLIENTSComponent,
    CoursesDetailsPageComponent,
    EditAccountPageComponent,
    //InscriptionComponent,
    ProComponent,
    HometwoAboutComponent,
    HometwoCoursesComponent,
    HometwoMainBannerComponent,
      GalerieComponent,
      UserHeaderComponent,
      ClientsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MainComponent } from './main/main.component';
import { WidgetsComponent } from './widgets/widgets.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    MainComponent,
    WidgetsComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    MatSlideToggleModule,
  ]
})
export class UserModule { }

import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreatAppointmentComponent } from './creat-appointment/creat-appointment.component';
import { HomeComponent } from './home/home.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewComponent } from './view/view.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdloginComponent } from './adlogin/adlogin.component';

const routes: Routes = [
  { path: '',  redirectTo: "home" , pathMatch : 'full'},
  {path : "admin" , component : AdmindashComponent},
  { path: 'appointmentlist', component: AppointmentComponent },
  {path: "create-appointment", component:CreatAppointmentComponent},
  {path: "home", component: HomeComponent},
  {path: "docdash", component: DocdashComponent},
  {path : "create-patient", component: CreatePatientComponent},
  {path : "medicine-list", component:MedicineListComponent},
  {path: "create-medicine", component : CreateMedicineComponent},
  {path: "update-patient/:id", component: UpdatePatientComponent},
  {path: "view/:id", component: ViewComponent},
  {path: "update-medicine/:id", component:UpdateMedicineComponent},
  {path: "doclogin", component:DocloginComponent},
  {path: "adlogin", component: AdloginComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
    declarations : [EmployeeComponent],
    imports :   [CommonModule],
    exports :   [EmployeeComponent]
})
export class EmployeeModule{}
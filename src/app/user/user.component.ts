import {
    Component, Input,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';


@Component({
    selector: 'app-user',
    // template : `<h1>User Component Loaded!!</h1>`
    templateUrl: './user.component.html',
    //changeDetection : ChangeDetectionStrategy.Default,
    // styles :   [`
    //     .feature{
    //         border : 2px red solid;
    //     }
    // `],
    styleUrls: [`./user.component.css`],
    providers : [DataService]
})
export class UserComponent 
    // implements OnChanges,
    // OnInit,
    // DoCheck,
    // AfterContentChecked,
    // AfterContentInit,
    // AfterViewInit,
    // AfterViewChecked,
    // OnDestroy 
    {
    // @Input('abc') title: string;
    // @Input('users') users: User[];
    users : User[];
    //@Output('childChanged') childChanged = new EventEmitter<string>();
    id : number = 2;
    myClasses = {
        'feature' : true, 
        'tranform' : false
    }
    myColor = "yellow";
    ngOnInit(){
        this.dataService.getHttpClientData()
        .subscribe(data=> this.users = data);
    }

    onKeyup(value:  string){
      //  this.childChanged.emit(value);
    }

    moreInfo(user: User) {
        alert(`${user.firstName} is working with ${user.company} !!`);
        this.myClasses.tranform = true;
    }
    increase(){
        this.dataService.counter++;
    }
    constructor(public dataService : DataService){
       // console.log("Constructor!")
    }
    
    // ngOnChanges(changes: SimpleChanges) {
    //     console.log('ngOnChanges fired!')
    //     console.log(changes);
    // }
    // ngOnInit() { console.log("ngOnInit") }
    // ngDoCheck() { console.log("ngDoCheck") }
    // ngAfterContentChecked() { console.log("ngAfterContentChecked") }
    // ngAfterContentInit() { console.log("ngAfterContentInit") }
    // ngAfterViewInit() { console.log("ngAfterViewInit") }
    // ngAfterViewChecked() { console.log("ngAfterViewChecked") }
    // ngOnDestroy() { console.log("ngOnDestroy") }

}
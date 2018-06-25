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


@Component({
    selector: 'app-user',
    // template : `<h1>User Component Loaded!!</h1>`
    templateUrl: './user.component.html',
    //changeDetection : ChangeDetectionStrategy.Default
})
export class UserComponent implements OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    @Input('abc') title: string;
    @Input('users') users: User[];
    @Output('childChanged') childChanged = new EventEmitter<string>();

    onKeyup(value:  string){
        this.childChanged.emit(value);
    }

    moreInfo(user: User) {
        alert(`${user.firstName} is working with ${user.company} !!`);
    }
    constructor(){console.log("Constructor!")}
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges fired!')
        console.log(changes);
    }
    ngOnInit() { console.log("ngOnInit") }
    ngDoCheck() { console.log("ngDoCheck") }
    ngAfterContentChecked() { console.log("ngAfterContentChecked") }
    ngAfterContentInit() { console.log("ngAfterContentInit") }
    ngAfterViewInit() { console.log("ngAfterViewInit") }
    ngAfterViewChecked() { console.log("ngAfterViewChecked") }
    ngOnDestroy() { console.log("ngOnDestroy") }

}
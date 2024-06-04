import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'my-app';

  _count = 1; 
  Counter: any;

  
  // Counter = {
  //   count: 1
  // }

  incCount(){
    // แบบนี้ถ้าส่งค่าให้ @Input() ที่อยู่ใน onpush ค่าจะไม่เปลี่ยนแปลง
    // this.Counter.count = this.Counter.count+ 1; 

    // แบบนี้สามารถส่งค่าให้ @Input() ที่อยู่ใน onpush ได้
    // this.Counter =  {
    //   count:  this.Counter.count + 1
    // }
    // -----------------------------------------------

    this.Counter.next({
      count: ++this._count
    })

  }

  ngOnInit() {
    this.Counter = new BehaviorSubject({
      count:0
    })
  }
}

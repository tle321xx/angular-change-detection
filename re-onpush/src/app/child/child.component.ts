import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // ถ้าใช้ OnPush ตรงนี้มันจะเป็นการหยุดการจับการเปลี่ยนแปลงของ childnumber
  // แต่ถ้า reference ของ parent มีการเปลี่ยนแปลงแล้วส่งมาที่ child ยังไง childnumber ก็จะ update พร้อม parent ที่ส่งมา
  // น่าจะอารมณ์แบบ trigger
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  @Input() arr !: any

  childnumber: any = []

  title=''


  ngOnInit(): void {
    setInterval(() => {
      // random value จะเก็บใน arr ทุกๆ 1 วิ
      this.childnumber = [Math.random()]
    }, 1000)
      
  }

  child(){
    return 'Child Component'
  }

}

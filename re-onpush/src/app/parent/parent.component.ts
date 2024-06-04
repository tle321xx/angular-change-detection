import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  // ถ้าเราใช้ OnPush ค่าของ arr จะไม่แสดงการ update
  // changeDetection: ChangeDetectionStrategy.OnPush
  // it means it not chaning your dom tree in the parent it self
})
export class ParentComponent implements OnInit {

  arr: any = []
  title = ''

  ngOnInit(): void {
    setInterval(() => {
      // แบบแรก
      // random value จะเก็บใน arr ทุกๆ 1 วิ
      // การส่งค่าแบบ reference + ปิด OnPush + เปิด OnPush ที่ child จังหวะนี้คือ child ปิดการอัพเดทแล้วแต่ parent trigger ไปที่ child
      // this.arr = [Math.random()]

      // แบบสอง
      // เปลี่ยนเป็นไม่ได้ส่งแบบ reference มันเหมือนเป็นการเปลี่ยนค่าข้างในไม่ได้ assign ค่าใหม่ที่ reference ส่งไปที่ child จะไม่ trigger
      this.arr.push(Math.random())
    }, 1000)
      
  }

  parent(){
    return 'ParentComponent';
  }

}

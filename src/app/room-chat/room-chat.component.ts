
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-chat',
  templateUrl: './room-chat.component.html',
  styleUrls: ['./room-chat.component.css']
})
export class RoomChatComponent {
@Input() room:any;
@Output() closeRooom: EventEmitter<any>= new EventEmitter();

close(room:any){
  this.closeRooom.emit(room)
}
}

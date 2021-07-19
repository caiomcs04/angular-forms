import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menssage',
  templateUrl: './menssage.component.html',
  styleUrls: ['./menssage.component.css']
})
export class MenssageComponent implements OnInit {

  @Input()
  menssage = ""

  constructor() { }

  ngOnInit(): void {
  }


}

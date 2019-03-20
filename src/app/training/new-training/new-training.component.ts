import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {THIS_EXPR} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output()trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
  onStartTraining(){
    this.trainingStart.emit();
  }
}

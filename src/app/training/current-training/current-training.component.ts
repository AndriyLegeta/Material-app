import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {StopTrainingComponent} from "./stop-training.component";
import {TrainingService} from "../training.service";

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;
  timer: number;
  constructor(private dialog: MatDialog, private trainingService: TrainingService) { }

  ngOnInit() {
    this.start0rResumeTimer();
  }
  start0rResumeTimer(){
    const step = this.trainingService.getRaningExercise().duration/100*1000;
    this.timer = setInterval(()=>{
      this.progress = this.progress + 1;
      if(this.progress>= 100){
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    },step)
  }

  onStop(){
    clearInterval(this.timer);
    const  dialogeRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });


    dialogeRef.afterClosed().subscribe(result => {
      if(result){
        this.trainingService.cancelExercise(this.progress);
      } else {
        this.start0rResumeTimer();
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {THIS_EXPR} from "@angular/compiler/src/output/output_ast";
import {TrainingService} from "../training.service";
import {Exercise} from "../exercise.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Exercise[] =[];
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exercises = this.trainingService.getAviableExercises();
  }
  onStartTraining(form: NgForm){
    console.log(form.value.exercise);
    this.trainingService.startExercise(form.value.exercise);
  }
}

import {Exercise} from "./exercise.model";
import {Subject} from "rxjs";

export class TrainingService {
  exerciseChanged = new Subject<Exercise>();
  private avaliableExercises: Exercise[] =[
    {id: 'crunches', name: 'Cranches', duration: 30, calories: 8},
    {id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15},
    {id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18},
    {id: 'burpees', name: 'Burpees', duration: 60, calories: 8},
  ];
  private runningExercise: Exercise;
  private exercises: Exercise[] =[];
  getAviableExercises(){
    return this.avaliableExercises.slice();
  }
  startExercise(selectedId: string){
    console.log(selectedId);
    this.runningExercise = this.avaliableExercises.find(ex =>
      ex.id === selectedId);
    this.exerciseChanged.next({...this.runningExercise});
  }
  completeExercise(){
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }
  cancelExercise(progres: number){
    this.exercises.push({
      ...this.runningExercise,
      date: new Date(),
      duration: this.runningExercise.duration * (progres/100),
      calories: this.runningExercise.duration * (progres/100),
      state: 'cancelled'});
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }
  getRaningExercise(){
    return {...this.runningExercise};
  }
}

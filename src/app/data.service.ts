import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class DataService {
  _defaultOpts = [
    "question1",
    "question2",
    "question3",
    "question4",
    "question5",
    "question6",
    "question7",
    "question8",
    "question9",
    "question10",
    "question11",
    "question12"
  ];

  optionSource: BehaviorSubject<String[]>;
  option$;

 /*  winnersSource: BehaviorSubject<String[]>;
  winner$: Observable<String[]>; */

  constructor() {
    this.optionSource = new BehaviorSubject(this.getOptions());
    this.option$ = this.optionSource.asObservable();

    /* this.winnersSource  = new BehaviorSubject<String[]>([]); */
    /* this.winnersSource = new BehaviorSubject([]);
    this.winner$ = this.winnersSource.asObservable(); */
  }

  addNewOption(value:any) {
    const currentOpts = [...this.optionSource.getValue()];
    currentOpts.push(value);
    this.optionSource.next(currentOpts);
    this.persistOptions();
  }

  deleteNewOption(value:any) {
    const currentOpts = this.optionSource.getValue();
    this.optionSource.next(currentOpts.filter(opts => opts != value));
    this.persistOptions();
  }

  /* addWinner(value:any) {
    let winners = this.winnersSource.getValue();
    winners = [...winners, value];
    this.winnersSource.next(winners);
  } */

  /* restartWinners() {
    this.winnersSource.next([]);
  } */

  persistOptions() {
    localStorage.setItem("OPTS", JSON.stringify(this.optionSource.getValue()));
  }

  getOptions(): String[] {
    const value = localStorage.getItem("OPTS");
    return value ? JSON.parse(value) : this._defaultOpts;
  }

  resetToDefault() {
    this.optionSource.next(this._defaultOpts);
  }
}


import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnInit,
  ViewChild
} from "@angular/core";
import { DataService } from "../data.service";

const COLORS = ["#f82", "#0bf", "#fb0", "#0fb", "#b0f", "#f0b", "#bf0"];

@Component({
  selector: 'app-re-order-ayat',
  templateUrl: './re-order-ayat.component.html',
  styleUrls: ['./re-order-ayat.component.css']
})
export class ReOrderAyatComponent implements OnInit {

 
  constructor(public dataService: DataService) { }

  
  ngOnInit(): void {
    console.log(this.dataService.option$);
  }
  resetWheel() {
    this.dataService.resetToDefault();
  }
}

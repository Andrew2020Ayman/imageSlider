import { Component, OnInit } from '@angular/core';
/* import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'; */

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})
export class PuzzleComponent implements OnInit {

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

 /*  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  } */

  constructor() { }

  ngOnInit(): void {
    const headbreaker = require('headbreaker');
    let xul = new Image();
    xul.src = '../../assets/Main_Image.png';
xul.onload = () => {
  const autogen = new headbreaker.Canvas('my-canvas', {
    width: 457, height: 400,
    pieceSize: 100, proximity: 18,
    borderFill: 8, strokeWidth: 1.5,
    lineSoftness: 0.18, image: xul,
    outline: new headbreaker.outline.Rounded(),
  });

  autogen.adjustImagesToPuzzleHeight();
  autogen.autogenerate({
    horizontalPiecesCount: 4,
    verticalPiecesCount: 3  });

    autogen.draw();
    autogen.attachSolvedValidator();
    autogen.onValid(() => {
      setTimeout(() => {
        document.getElementById('validated-canvas-overlay')?.setAttribute("class", "active");
     
        document.getElementById("my-canvas")!.style.display = "none";
      }, 200);
    })

}
    
    /* let pettoruti = new Image();
    pettoruti.src = '../../assets/Main_Image.png';
    pettoruti.onload = () => {
      const validated = new headbreaker.Canvas('my-canvas', {
      width: 600, height: 400,
      pieceSize: 90, proximity:18,
      borderFill: 8, strokeWidth: 1.5,
      lineSoftness: 0.18, image: pettoruti,
      outline: new headbreaker.outline.Rounded(),
     
    });
   
    validated.autogenerate({
      horizontalPiecesCount: 4,
      verticalPiecesCount:3
    });
    validated.puzzle.pieces[4].translate(63, -56);
    validated.draw();
    validated.attachSolvedValidator();
    validated.onValid(() => {
      setTimeout(() => {
        document.getElementById('my-canvas')?.setAttribute("class", "active");
      }, 1500);
    })
   } */


}


 

}

import { Component, OnInit, ViewChild } from "@angular/core";
import { CreatePuzzleService } from "./create-puzzles.service";

@Component({
    selector: 'app-create-puzzles',
    templateUrl: './create-puzzles.component.html',
    styleUrls: ['./create-puzzles.component.css'],
})

export class CreatePuzzles implements OnInit {

    puzzleArray: number[] = [];

    @ViewChild('btn3') btn3: HTMLButtonElement;
    @ViewChild('btn4') btn4: HTMLButtonElement;
    @ViewChild('btn5') btn5: HTMLButtonElement;

    constructor(private createPuzzleService: CreatePuzzleService) { }

    ngOnInit(): void {
        this.createPuzzleService.puzzlesArrangement.subscribe( puzzlesArrangement => {
            this.puzzleArray = puzzlesArrangement;
        })
    }

    createPuzzles(button: HTMLButtonElement) {
        const numOfPuzzles = Math.pow(Number(button.textContent[0]), 2);
        this.puzzleArray = [];

        while (this.puzzleArray.length < numOfPuzzles) {
            const ranNum = Math.ceil(Math.random() * numOfPuzzles);
            let puzzleExist = false;
            this.puzzleArray.forEach((el) => {
                if (el === ranNum) { puzzleExist = true }
            });
            if (puzzleExist === false) {
                this.puzzleArray.push(ranNum);
            } else {
                puzzleExist = false;
            }
        }
        this.createPuzzleService.createNewPuzzlesArrangement(this.puzzleArray);
    }
}
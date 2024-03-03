import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { CreatePuzzleService } from "../CreatePuzzles/create-puzzles.service";
import { SinglePuzzle } from "./SinglePuzzel/single-puzzle.component";

@Component({
    selector: 'app-puzzle-table',
    templateUrl: './puzzle-table.component.html',
    styleUrls: ['./puzzle-table.component.css'],
})

export class PuzzleTable implements OnInit {
    puzzleArray: number[] = [];
    grid: string = '';

    constructor(private createPuzzleService: CreatePuzzleService) { }

    ngOnInit(): void {
        this.createPuzzleService.puzzlesArrangement.subscribe(puzzlesArrangement => {
            this.puzzleArray = puzzlesArrangement;
            console.log(this.puzzleArray);
            this.getGridSize(this.puzzleArray);
        })
    }

    private getGridSize(arr: number[]) {
        const length = arr.length;
        for (let i = 1; i < this.puzzleArray.length; i++) {
            if (length / i === i) {
                this.grid = `grid-template-columns: repeat(${i}, 1fr)`
            }
        }
    }
}

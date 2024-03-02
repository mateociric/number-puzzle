import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { CreatePuzzleService } from "../CreatePuzzles/create-puzzles.service";
import { SinglePuzzle } from "./SinglePuzzel/single-puzzle.component";

@Component({
    selector: 'app-puzzle-table',
    templateUrl: './puzzle-table.component.html',
    styleUrls: ['./puzzle-table.component.css'],
})

export class PuzzleTable implements OnInit {
    puzzleArray: number[] = [];

    constructor(private createPuzzleService: CreatePuzzleService) { }

    ngOnInit(): void {
        this.createPuzzleService.puzzlesArrangement.subscribe(puzzlesArrangement => {
            this.puzzleArray = puzzlesArrangement;
            console.log(this.puzzleArray);
        })
    }
}

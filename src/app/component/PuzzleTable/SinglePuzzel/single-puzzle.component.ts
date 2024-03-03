import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-single-puzzle',
    templateUrl: './single-puzzle.component.html',
    styleUrls: ['./single-puzzle.component.css'],
})

export class SinglePuzzle {
    @Input() number: number;
}
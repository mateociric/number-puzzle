import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })

export class CreatePuzzleService {

    private _puzzlesArrangement = new BehaviorSubject<number[]>([]);

    constructor() { }

    createNewPuzzlesArrangement(newPuzzlesArrangement: number[]) {
        this._puzzlesArrangement.next(newPuzzlesArrangement);
    }

    get puzzlesArrangement() {
        return this._puzzlesArrangement;
    }

}
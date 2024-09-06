import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  userHasSnapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService) {

  }

  ngOnInit(): void {
    this.userHasSnapped = false;
    this.buttonText = `Oh snap!`;
  }

  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.addSnap();
    }
  }

  addSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap')
    this.userHasSnapped = true;
    this.buttonText = `Oops, unsnap!`;
  }

  unSnap(): void {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap')
    this.userHasSnapped = false;
    this.buttonText = `Oh snap!`;
  }

  getSnapColor(): string {
    return `rgb(${255 - this.faceSnap.snaps}, ${this.faceSnap.snaps}, 0)`;
  }
}


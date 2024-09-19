import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    DatePipe,
    UpperCasePipe
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})

export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  userHasSnapped!: boolean;
  buttonText!: string;

  constructor(private faceSnapsService: FaceSnapsService,
              private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.userHasSnapped = false;
    this.buttonText = `Oh snap!`;
    
    const faceSnapId = this.route.snapshot.params['id']
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


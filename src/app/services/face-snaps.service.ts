import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";

@Injectable({
    providedIn: "root"
})

export class FaceSnapsService {
    private faceSnaps: FaceSnap[] = [
        new FaceSnap(
          `Quelqu'un`,
          `Je ne sais pas qui c'est`,
          `https://i.pinimg.com/736x/31/bf/7a/31bf7a7610110a92d5554fa442538efa.jpg`,
          new Date,
          5
        ),
        new FaceSnap(
          `Moi`,
          `J'aime bien cette photo`,
          `https://media.licdn.com/dms/image/v2/D4D03AQE_2Iuw379tMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725310131824?e=1730937600&v=beta&t=kDfwHrEN6JJ9BMG3IjzSLQTOlbrs3yWXOA0zH6wkXx0`,
          new Date,
          125
        ).setLocation("chez moi"),
        new FaceSnap(
          `Ma future chérie 🤞`,
          `La plus belle 🥰`,
          `https://media.licdn.com/dms/image/D4E03AQFjdfO5gC2_eA/profile-displayphoto-shrink_200_200/0/1721398647896?e=2147483647&v=beta&t=yPEvrDKpnMbQQGldBvgRGcMb8cCYmZpA5hcJXwI4rnA`,
          new Date,
          280
        )
    ];

    getFaceSnaps(): FaceSnap[] {
        return [...this.faceSnaps];
    }

    snapFaceSnapById(faceSnapId: string): void {
        const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!foundFaceSnap) {
            throw new Error("FaceSnap not found!"); 
        }
        foundFaceSnap.addSnap();
    }
}

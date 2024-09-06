import { SnapType } from "./snap-type.type";

export class FaceSnap {

    location?: string;
    id: string;

    constructor(public title: string,
        public description: string,
        public imageUrl: string,
        public createdAt: Date,
        public snaps: number) {
            this.id = crypto.randomUUID().substring(0, 8);
        };

    addSnap(): void {
        this.snaps++;
    }

    unSnap(): void {
        this.snaps--;
    }

    snap(snapType : SnapType): void {
        if (snapType === 'snap') {
            this.addSnap();
        } else if (snapType === 'unsnap'){
            this.unSnap();
        }
    }

    setLocation(location: string): FaceSnap {
        this.location = location;
        return this;
    }
}
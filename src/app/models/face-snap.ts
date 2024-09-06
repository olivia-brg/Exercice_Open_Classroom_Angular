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

    setLocation(location: string): FaceSnap {
        this.location = location;
        return this;
    }

    // Fonction de base quand setLocation était de type void
    // (pourquoi openClassroom n'a pas modifié comme j'ai fait et à ajouté withLocation?)
    //
    // withLocation(location: string): FaceSnap {
    //     this.setLocation(location);
    //     return this;
    // }
}
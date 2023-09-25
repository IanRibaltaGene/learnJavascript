abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        // Complex calculations...
        return 100;
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){
        super(cameraMode, filter);
    }

    getSepia(): void{
        console.log('Getting sepia');
    }
}


const iase = new Instagram('portrait', 'vintage', 3);

iase.getReelTime();
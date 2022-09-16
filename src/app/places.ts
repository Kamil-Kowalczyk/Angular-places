import { Place } from "./place";

export class Places{
    public static places: Place[] = [
        new Place("Alps", 2, "../assets/images/alps.jpg"),
        new Place("Desert Gobi", 6, "../assets/images/gobi.jpg"),
        new Place("Machu Picchu", 1, "../assets/images/machu-picchu.png"),
        new Place("Grand Canyon", 4, "../assets/images/grand_canyon.png")
    ];
}
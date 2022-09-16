export class Place{
    private _description: String;
    private _leaderboard: number;
    private _url: String;

    public constructor(description: String, leaderboard: number, url: String){
        this._description = description;
        this._leaderboard = leaderboard;
        this._url = url;
    }

    public getDescription(): String{
        return this._description;
    }
    public getLeaderboard(): number{
        return this._leaderboard;
    }
    public getUrl(): String{
        return this._url;
    }

    public setLeaderboard(value: number): void{
        this._leaderboard = value;
    }
}
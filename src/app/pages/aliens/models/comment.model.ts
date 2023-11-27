export interface Comment {
    _id:      string;
    comment:  string;
    likes:    number;
    dislikes: number;
    reported: boolean;
    alienId:  string;
    __v:      number;
    userName: string;
}

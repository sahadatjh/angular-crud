export interface IServerResponse<T> {
    status: number;
    msg: string;
    data: T;
}

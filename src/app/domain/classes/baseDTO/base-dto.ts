export class BaseDTO<T> {
    message: string;
    source: T[];
    totalCount: number;
}

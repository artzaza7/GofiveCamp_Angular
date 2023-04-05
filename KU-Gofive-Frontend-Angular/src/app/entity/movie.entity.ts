export interface MovieEntity{
    _id?: string | undefined,
    name: string,
    poster: string,
    summaries: string,
    category: string,
    runningTime: number,
    releaseDate: string
}
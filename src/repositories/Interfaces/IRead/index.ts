export interface IRead<T> {
  find(item: object): Promise<T[]>
  findOne(id: string): Promise<T>
}
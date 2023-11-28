export interface IWrite<T>{
  create(data: T): Promise<boolean>;
  update(id: string, item: T): Promise<boolean>
  delete(id: string): Promise<boolean>
}
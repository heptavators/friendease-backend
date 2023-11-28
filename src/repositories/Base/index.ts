import { IRead } from "../Interfaces/IRead";
import { IWrite } from "../Interfaces/IWrite";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {

  model: any

  constructor(model: any){
    this.model = prisma[model]
  }

  async create(data: T): Promise<any> {
    try {
      return this.model.create({data})
    } catch (e) {
      throw new Error(`Cannot create data because : ${e}`)
    }
  }

  update(special_id: string, data: T): Promise<boolean> {
    try {
      return this.model.update({ where: {special_id}, data})
    } catch (e) {
      throw new Error(`Cannot update data because : ${e}`)
    }
  }
  
  delete(special_id: string): Promise<boolean> {
    try {
      return this.model.delete({where: {special_id}})
    } catch (e) {
      throw new Error(`Cannot delete data because : ${e}`)
    }
  }

  find(options: object): Promise<T[]> {
    try {
      return this.model.findMany(options)
    } catch (e) {
      throw new Error(`Not found data : ${e}`)
    }
  }

  count(options: object): Promise<T[]> {
    try {
      return this.model.count(options)
    } catch (e) {
      throw new Error(`Not found data : ${e}`)
    }
  }

  findOne(special_id: string): Promise<any> {
    try {
      return this.model.findUnique({ where: { special_id } });
    } catch (e) {
      throw new Error(`Cannot find data because : ${e}`)
    }
  }
}
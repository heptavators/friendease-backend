import { Model, FindOptions  } from 'sequelize';
import { IRead } from '../Interfaces/IRead';
import { IWrite } from '../Interfaces/IWrite';

export abstract class BaseRepository<T> implements IWrite<T>, IRead<T>  {
  model: any;

  constructor(model: Model) {
    this.model = model;
  }
  async create(data: any): Promise<any> {
    try {
      return await this.model.create(data);
    } catch (e) {
      throw new Error(`Cannot create data because: ${e}`);
    }
  }

  async update(id: string, data: any): Promise<boolean> {
    try {
      const [updatedRowsCount] = await this.model.update(data, {
        where: { id },
      });
      return updatedRowsCount > 0;
    } catch (e) {
      throw new Error(`Cannot update data because: ${e}`);
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const deletedRowsCount = await this.model.destroy({
        where: { id },
      });
      return deletedRowsCount > 0;
    } catch (e) {
      throw new Error(`Cannot delete data because: ${e}`);
    }
  }
  
  async find(options: FindOptions): Promise<any> {
    try {
      const instances = await this.model.findAll(options);
      return instances.map((instance: any) => instance.toJSON());
    } catch (e) {
      throw new Error(`Not found data: ${e}`);
    }
  }
  
  async count(options: FindOptions): Promise<number> {
    try {
      return await this.model.count(options);
    } catch (e) {
      throw new Error(`Not found data: ${e}`);
    }
  }
  
  async findOne(id: string): Promise<any> {
    try {
      const instance = await this.model.findOne(id);
      return instance ? (instance.toJSON()) : null;
    } catch (e) {
      throw new Error(`Cannot find data because: ${e}`);
    }
  }
}
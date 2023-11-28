import { Auth } from "../../domains/model/Auth";

import { BaseRepository } from "../Base";

export class AuthRepository extends BaseRepository<Auth>{
    constructor(){
        super("Auth")
    }
}
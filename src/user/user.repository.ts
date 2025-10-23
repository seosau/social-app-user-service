import { Injectable } from "@nestjs/common";
import { DataSource, In, Repository } from "typeorm";
import { User } from "./entities/user.entity";

@Injectable()
export class UserRepository extends Repository<User> {
    constructor(dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    async findById(id: string) {
        return this.findOne({
            where: {
                id
            }
        })
    }

    async findByIds(ids: string[]) {
        return this.find({
            where: {
                id: In(ids)
            }
        })
    }
}
import { Injectable } from '@nestjs/common';
import { GetOneUserRequest, GetOneUserResponse } from 'src/generated/user';
import { UserRepository } from './user.repository';
import { reflect } from './user.function';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepo: UserRepository,
    ) {}

    async getOneUser(data: GetOneUserRequest): Promise<GetOneUserResponse>   {
        const user = await this.userRepo.findById(data.id)
        if(!user) {
            throw new Error('Can not find user with id')
        }

        const toResp: GetOneUserResponse = {
            user: reflect(user)
        }
        
        return toResp
    }
}

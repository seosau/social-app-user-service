import { Injectable } from '@nestjs/common';
import { GetManyUserRequest, GetManyUserResponse, GetOneUserRequest, GetOneUserResponse } from 'src/generated/user';
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

    async getManyUser(data: GetManyUserRequest): Promise<GetManyUserResponse> {
      const users = await this.userRepo.findByIds(data.ids)
      console.log('userrrrrrrrrrrrrrrrrrrrrrrrrr: ', users)

      const toResp: GetManyUserResponse = {
        users: users.map(user => reflect(user))
      }

      return toResp;
    }
}

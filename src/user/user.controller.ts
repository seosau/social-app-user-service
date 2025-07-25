import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { GetOneUserRequest, GetOneUserResponse, USER_SERVICE_NAME } from 'src/generated/user';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod(USER_SERVICE_NAME, 'getOneUser')
  async getOneUser(data: GetOneUserRequest): Promise<GetOneUserResponse>  {
    return this.userService.getOneUser(data);
  }
}

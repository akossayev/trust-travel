import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/user.repository';
import { RegisterUserDTO } from '../../auth/dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }

  async insertAndFetchOne(payload: RegisterUserDTO) {
    return await this.userRepository.insertAndFetchOne(payload);
  }

  async findByPhone(phone: string) {
    return await this.userRepository.findByPhone(phone)
  }
}

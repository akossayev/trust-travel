import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../../common/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDTO } from '../../auth/dto/register-user.dto';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async insertAndFetchOne(payload: RegisterUserDTO) {
    const user = this.userRepository.create(payload);
    return await this.userRepository.save(user);
  }

  async findByPhone(phone: string) {
    return await this.userRepository.findOneBy({ phone });
  }
}

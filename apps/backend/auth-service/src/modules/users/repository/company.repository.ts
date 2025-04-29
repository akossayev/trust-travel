import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from '../../../common/entities/company.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegisterCompanyDto } from '../../auth/dto/register-company.dto';

@Injectable()
export class CompanyRepository {
  constructor(
    @InjectRepository(CompanyEntity)
    private companyRepository: Repository<CompanyEntity>,
  ) {}

  async insertAndFetchOne(body: RegisterCompanyDto) {
    const company = this.companyRepository.create(body);
    return await this.companyRepository.save(company);
  }

  async findCompanyByBin(bin: number) {
    return await this.companyRepository.findOneBy({ bin });
  }

}

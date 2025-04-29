import {Injectable} from "@nestjs/common";
import {CompanyRepository} from "../repository/company.repository";
import {RegisterCompanyDto} from "../../auth/dto/register-company.dto";


@Injectable()
export class CompanyService {
    constructor(private readonly companyRepository: CompanyRepository) {}


    async insertAndFetchOne(payload: RegisterCompanyDto) {
        return await this.companyRepository.insertAndFetchOne(payload);
    }

    async findByBin(bin: string) {}
}
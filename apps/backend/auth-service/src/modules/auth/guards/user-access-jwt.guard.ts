import {AuthGuard} from "@nestjs/passport";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserAccessJwtGuard extends AuthGuard('access-jwt-strategy') {}
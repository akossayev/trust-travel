import {AuthGuard} from "@nestjs/passport";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserRefreshJwtGuard extends AuthGuard('refresh-jwt-strategy') {}
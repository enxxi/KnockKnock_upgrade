import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService{
    getHelloWorld(): string {
        return '으아아악';
    }
}
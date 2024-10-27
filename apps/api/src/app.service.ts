import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): { message: string } {
    return { message: 'Hello World! from API' };
  }

  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}

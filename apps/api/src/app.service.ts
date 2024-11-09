import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';

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

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly prismaService: PrismaService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    // Sign In Logic Here

    // For this moment.
    const payload = null;
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

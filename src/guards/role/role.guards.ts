import { Injectable, CanActivate, ExecutionContext, Req } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Role } from './role.enum';
import { ROLES_KEY } from './role.decorator';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestException } from 'src/helper/error.helper';
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService, // Inject JwtService
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    // 🛠 Token from header Authorization
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false; // no Token -> Deny access
    }

    const token = authHeader.split(' ')[1];

    try {
      // 🔐 Verify token
      const user = this.jwtService.verify(token);

      const isUser = await this.prisma.nguoiDung.findFirst({
        where: {
          id: user.sub,
        },
      });
      request.user = user;
      //check if user exists
      if (!isUser) {
        throw new BadRequestException('User does not exist!');
      }
      // ✅ Check role
      const isRole = requiredRoles.some((role) => isUser.role?.includes(role));
      return isRole;
    } catch (error) {
      return false; // invalid token
    }
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserRole } from 'generated/prisma/enums';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  email?: string;
  lastName?: string;
  firstName?: string;
  Role?: UserRole[];
  entityId?: string;
  createdAt?: Date;
  updatedAt?: Date;
  password?: string;
}

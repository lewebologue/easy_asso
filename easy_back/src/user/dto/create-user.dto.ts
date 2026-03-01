import { UserRole } from 'generated/prisma/enums';

export class CreateUserDto {
  email: string;
  lastName: string;
  firstName: string;
  Role: UserRole[];
  entityId: string;
  createdAt: Date;
  updatedAt: Date;
  password: string;
}

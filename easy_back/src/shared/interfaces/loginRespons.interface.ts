import { UserRole } from 'generated/prisma/enums';

export interface LoginResponse {
  access_token: string;
  user: string;
  role: UserRole[];
}

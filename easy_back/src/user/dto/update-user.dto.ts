import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserRole } from 'generated/prisma/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: "Email de l'utilisateur",
    example: 'user@example.com',
    type: String,
  })
  email?: string;

  @ApiPropertyOptional({
    description: 'Nom de famille',
    example: 'Dupont',
    type: String,
  })
  lastName?: string;

  @ApiPropertyOptional({
    description: 'Prénom',
    example: 'Jean',
    type: String,
  })
  firstName?: string;

  @ApiPropertyOptional({
    description: 'Rôles de l\'utilisateur',
    type: [String],
    enum: Object.values(UserRole),
    example: ['ROLE'],
  })
  Role?: UserRole[];

  @ApiPropertyOptional({
    description: "ID de l'entité associée",
    example: '123e4567-e89b-12d3-a456-426614174000',
    type: String,
  })
  entityId?: string;

  @ApiPropertyOptional({
    description: 'Date de création',
    example: '2026-03-02T10:30:00Z',
    type: Date,
  })
  createdAt?: Date;

  @ApiPropertyOptional({
    description: 'Date de mise à jour',
    example: '2026-03-02T15:45:00Z',
    type: Date,
  })
  updatedAt?: Date;

  @ApiPropertyOptional({
    description: 'Mot de passe (hashé)',
    example: 'newSecurePassword123',
    type: String,
  })
  password?: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'utilisateur@example.com',
    description: "L'adresse email de l'utilisateur",
  })
  email!: string;

  @ApiProperty({
    example: 'Jean',
    description: 'Le prénom de l\'utilisateur',
  })
  firstName!: string;

  @ApiProperty({
    example: 'Dupont',
    description: 'Le nom de famille de l\'utilisateur',
  })
  lastName!: string;

  @ApiProperty({
    example: 'SecurePassword123!',
    description: 'Le mot de passe de l\'utilisateur',
  })
  password!: string;
}

import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from 'src/shared/decorators/public.decorators';

@ApiTags('auth')
@Controller('auth')
export class authController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('signin')
  @ApiOperation({ summary: 'User login' })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async signIn(@Body() body: { identifier: string; password: string }) {
    return this.authService.signIn(body.identifier, body.password);
  }
}

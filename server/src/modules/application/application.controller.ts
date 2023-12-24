import { Body, Controller, HttpCode, HttpStatus, Patch, Post, UseGuards } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUser, GetCurrentUserId } from 'src/common/decorators';
import { createApplicationDto } from './dto/application.dto';

@Controller('application')
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService){}

    @Post('upload')
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard('local-passport'))
    async createApplication(@GetCurrentUser() user, @Body() createDto: createApplicationDto) {
        return await this.applicationService.createApplication(user.email, createDto);
    }

    @Patch('decline')
    @UseGuards(AuthGuard('local-passport'))
    @HttpCode(HttpStatus.OK)
    async declineApplication() {
        return await this.applicationService.declineApplication();
    }

    @Post('upload')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local-passport'))
    async approveApplication() {
        return await this.applicationService.approveApplication();
    }

    @Delete('delete')
    @HttpCode(HttpStatus.NO_CONTENT)
    // @Role
    async deleteApplication() {
        return await this.applicationService.deleteApplication();
    }
}

import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Get, Patch, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUser, GetCurrentUserId } from 'src/common/decorators';
import { createApplicationDto } from './dto/application.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('application')
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService){}

    @Get('applications/coordinator')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local-passport'))
    async findApplicationsByCoordinatorId(@GetCurrentUserId() user) {
        return await this.applicationService.findApplicationsByCoordinatorId(user.id);
    }

    @Get('applications/student')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local-passport'))
    async findApplicationsByStudentId(@GetCurrentUserId() user) {
        return await this.applicationService.findApplicationsByStudentId(user.id);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AuthGuard('local-passport'))
    async createApplication(@GetCurrentUser() user, @Body() createDto: createApplicationDto, @UploadedFile() file: Express.Multer.File) {
        return await this.applicationService.createApplication(user.email, createDto, file);
    }

    @Patch('decline')
    @UseGuards(AuthGuard('local-passport'))
    @HttpCode(HttpStatus.OK)
    async declineApplication(@Param('applicatioId') applicationId: number) {
        return await this.applicationService.declineApplication(applicationId);
    }

    @Post('upload')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard('local-passport'))
    async approveApplication(@Param('applicatioId') applicationId: number) {
        return await this.applicationService.approveApplication(applicationId);
    }

    @Delete('delete')
    @HttpCode(HttpStatus.NO_CONTENT)
    // @Role
    async deleteApplication(@Param('applicatioId') applicationId: number) {
        return await this.applicationService.deleteApplication(applicationId);
    } 
}

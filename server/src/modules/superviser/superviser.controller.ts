import { Controller, Get,Post, HttpCode, HttpStatus, Param, ParseIntPipe, Body } from '@nestjs/common';
import { SuperviserService } from './superviser.service';
import { AssessmentCriteriaDto } from './dto/assessment.dto';

@Controller('supervisor')
export class SuperviserController {
    constructor(private readonly superviserService: SuperviserService) {}

    @Get('all')
    @HttpCode(HttpStatus.OK)
    async findAll() {
      return await this.superviserService.findAll();
    }
  
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id', ParseIntPipe) id:number) {
      const result = await this.superviserService.findOne(id);
      return JSON.stringify(result);
    }

    @Post('assessment')
    @HttpCode(HttpStatus.CREATED)
    async AssessStudent(@Body() assessmentCriteriaDto: AssessmentCriteriaDto) {
      return await this.superviserService.AssessStudent(assessmentCriteriaDto);
    }

}

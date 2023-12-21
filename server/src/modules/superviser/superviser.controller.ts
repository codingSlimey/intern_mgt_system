import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from '@nestjs/common';
import { SuperviserService } from './superviser.service';

@Controller('superviser')
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
}

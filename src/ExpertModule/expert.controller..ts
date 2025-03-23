import { Body, Controller, Get, HttpStatus, Post, Query } from "@nestjs/common";
import { ExpertDTO } from "./expert.dto";
import { ExpertService } from "./expert.service";

@Controller('expert')
export class ExpertController {

    constructor(private expertService: ExpertService){}

    @Get()
    async findExpert(@Query() query: ExpertDTO){
        console.log(query)
        const result = await this.expertService.find(query)
        return result

    }

    @Post()
    async addExpert(@Body() expertDTO: ExpertDTO){
        const created = await this.expertService.create(expertDTO)
        if (created){
            return {code: HttpStatus.CREATED}
        }else{
            return {code: HttpStatus.INTERNAL_SERVER_ERROR}
        }
    }
}


import { Body, Controller, Get, HttpStatus, Post, Query } from "@nestjs/common";
import { ClientService } from "./client.service";

@Controller('client')
export class ClientController{

    constructor(private clientService: ClientService){}

    @Get()
    async getClients(){
        const clients = await this.clientService.findAll()
        return clients
    }

    @Post()
    async addClient(@Body('name') name: string){
        if (!name) return 
        
        const result = await this.clientService.addClient(name)
        if (result){
            return {code: HttpStatus.CREATED}
        }else{
            return {code: HttpStatus.INTERNAL_SERVER_ERROR }
        }

    }
}
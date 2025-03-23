import { Injectable } from "@nestjs/common";
import { ClientDTO } from "./client.dto";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

@Injectable()
export class ClientService{
    
    addClient(name: string){
        return prisma.client.create({ data: { name: name }})
    }

    findAll(){
        return prisma.client.findMany({include: {experts: true}})
    }
}
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ExpertDTO } from "./expert.dto";

const prisma = new PrismaClient()

@Injectable()
export class ExpertService{
    create(expert: ExpertDTO){
        return prisma.expert.create({ data: {
            name: expert.name,
            specialization: expert.specialization,
            rating: expert.rating,
            availability: expert.availability
        }})
    }

    find(expert: ExpertDTO){
        const where: any = {}
        where.specialization = expert.specialization == 'undefined' ? undefined : expert.specialization
        where.rating = parseFloat(expert.rating.toString())
        where.rating = Number.isNaN(where.rating) ? undefined : where.rating

        const result = prisma.expert.findMany({
            where: where,
            include: {
                clients: true
            }
        })

        return result

    }
}
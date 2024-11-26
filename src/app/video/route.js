import { PrismaClient } from "@prisma/client";

export async function GET(request) {
    const req = await request.json()
     return( Response.json(req) )
    }
    
export async function POST(request ) {
    const req = await request.json()
    const prisma = new PrismaClient()

    const video = await prisma.video.create({
        data: {
            name: req.name
        }
    })

    return( Response.json(video) )
}

export async function PUT(request ) {
    const req = await request.json()
    const prisma = new PrismaClient()
        
    const video = await prisma.video.update({
        where: {
            id: req.id,
        },
    data: {
        name: req.name
    }
    })
        
    return( Response.json(video) )
}
        
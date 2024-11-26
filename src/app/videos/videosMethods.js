'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function videosMethods(formData) {
    let deleteVideo = await prisma.video.delete({
        where: {id: Number(formData.get('videoID'))}
    })
}
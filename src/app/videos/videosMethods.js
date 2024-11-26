'use server'
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function deleteVideo(formData) {
    await prisma.video.delete({
        where: {id: Number(formData.get('videoID'))}
    })
}
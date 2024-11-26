'use server'
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/dist/server/api-utils";
const prisma = new PrismaClient();
//router to route back to home on delete

export default async function videosMethods(formData) {
    let deleteVideo = await prisma.video.delete({
        where: {id: Number(formData.get('videoID'))}
    })
}
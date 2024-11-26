'use server'
import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

export default async function addVideo(formData) {
    const prisma = new PrismaClient()
    await prisma.video.create({
        data: {
            name: String(formData.get('videoname')),
            url: "test",
            votes: 0,
            length: Number(formData.get('runtime'))
        }
    })
    redirect('/videos')
}

"use server";

import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

export default async function updateVideo(formData) {
    const prisma = new PrismaClient() 

    await prisma.video.update({
        where: {
            id: Number(formData.get('id')),
        },
        data: {
            name: String(formData.get('name')),
            length: Number(formData.get('runtime'))
        }
    })
    
    redirect('/videos')
}
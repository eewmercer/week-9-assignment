import { PrismaClient } from "@prisma/client"

export default async function VideoInfo({videoId}) {
    const prisma = new PrismaClient()
    const video = await prisma.Video.findUnique({
        where: {
            id: Number(videoId),
        }
    })

    return(
        <div>
            <ul>
                <li>Name: {video.name}</li>
                <li>Url: {video.url}</li>
                <li>ID: {video.id}</li>
                <li>Votes: {video.votes}</li>
                <li>Runtime: {video.length}</li>
            </ul>
        </div>
    );
}
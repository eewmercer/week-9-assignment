import { PrismaClient } from "@prisma/client";
import updateVideo from '../../updateVideosMethods'
import Update from './updateForm'

export default async function editVideos({params}) {
    const prisma = new PrismaClient()
    const video = await prisma.video.findUnique({
        where: { id: Number(params.slug) }
    })

    return (
        <div>
            <h2>Update Video: </h2>
            <Update updateUrl={updateVideo} video={video}/>
        </div>
    );
}
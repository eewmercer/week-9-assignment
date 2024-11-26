// 'use client'
import Delete from "./delete/page"
import Add from "./add/page"
import { PrismaClient } from '@prisma/client'

export default async function Videos() {
  const prisma = new PrismaClient()

  let videos = await prisma.video.findMany()

  const videoList = videos.map((video) => 
    <li key={video.id}>
        <a href={"/videos/video/"+video.id}>{video.name}</a>
        <a href={"/videos/edit/"+video.id}>[edit]</a>
        {<Delete
          videoID = {video.id}
        />}
    </li> 
  )



  return (
    <>
      <div className="heading">
        <h1>Videos Page</h1>
        <div className="videos-list">
          {videoList}
        </div>
        <Add></Add>
      </div>
    </>

  );
}

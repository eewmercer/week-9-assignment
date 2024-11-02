import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {
  const videos = await prisma.video.findMany();
  const videosEl = videos.map((video) => <li key={video.id}>{video.name}</li>)

  return (
    <div className="heading">
      <h1>Emmaline: Week 9 Assignment</h1>
      <div className="videos-list">
        {videosEl}
      </div>
    </div>
  );
}

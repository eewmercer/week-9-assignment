import { PrismaClient } from "@prisma/client";
import Videos from './videos/video/page'

const prisma = new PrismaClient();

async function Home() {
  const videos = await prisma.Video.findMany();
  const videosEl = videos.map((video) => <li key={video.id}>{video.name}</li>)
  // const id = videos.map((video) => {video.id})
  // const name = videos.map((video) => {video.name})
  // const url = videos.map((video) => {video.url})

  return (
    <html>
      <body>
        <div className="heading">
          <h1>Emmaline: Week 9 Assignment</h1>
          <div className="videos-list">
            {/* {videosEl} */}
          </div>
          <Videos
            videosList = {videos}
          />
        </div>
      </body>
    </html>
    
  );
}

export default Home;
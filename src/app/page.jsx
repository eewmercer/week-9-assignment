import { PrismaClient } from "@prisma/client";
import Videos from './videos/page'

const prisma = new PrismaClient();

async function Home() {
  const videos = await prisma.Video.findMany();

  return (
    <div className="heading">
      <h1>Emmaline: Week 9 Assignment</h1>
      <Videos
        videosList = {videos}
      />
    </div>
  );
}

export default Home;
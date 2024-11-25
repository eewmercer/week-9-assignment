'use client'

export default function Videos({videosList}) {
  let allVideos = videosList.map((video) => <ul key={props.videoId}>
        <p>{video.name}</p>
        <li>{video.url}</li>
    </ul>)

    console.log(allVideos)

  return (
    <>
      <div className="heading">
        <h1>Videos Page</h1>
        <div className="videos-list">
          {allVideos}
        </div>
      </div>
    </>

  );
}

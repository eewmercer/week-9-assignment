import VideoInfo from './VideoInfo'

export default function Videos({params}) {
    return (
        <>
            <div>
                <VideoInfo
                    videoId={params.slug}
                />
            </div>
        </>
    )
}
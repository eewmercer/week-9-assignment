import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import deleteVideo from '../videosMethods'

export default function Videos(props) {

    return (
        <>
            <form action={deleteVideo}>
                <input type="hidden"  name="videoID" value={props.videoID}/>
                <button>Delete</button>
            </form>
        </>
    );
}
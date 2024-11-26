import { PrismaClient } from "@prisma/client";
import addVideo from '../addVideosMethods'

export default function Videos() {
    return(<div>
        <h2>ADD:</h2>
        <form action={addVideo}>
            <label>Video Name: <input type="text" name="videoname" placeholder="Name" /></label>
            <label>Runtime: <input type="text" name="runtime" placeholder="Runtime" /></label>
            <button type="submit">Add</button>
        </form>
    </div>)
}
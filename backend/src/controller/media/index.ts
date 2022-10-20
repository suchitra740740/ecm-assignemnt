import { fetchMedia } from "services/media";

export async function getMedia() {
    return await fetchMedia()
}
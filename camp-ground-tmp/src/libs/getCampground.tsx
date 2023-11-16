import { apiBackUrl } from "@/constants";

export default async function getCampground(id: string) {
    // const response = await fetch(`${apiBackUrl}/campgrounds/${id}`)
    console.log(id)
    const response = await fetch(`${apiBackUrl}/campgrounds/${id}`)

    if (!response.ok) {
        throw new Error("Failed to fetch camp's data from backend");
    }

    return await response.json();
}
import { apiBackUrl } from "@/constants";

export default async function getHospitals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${apiBackUrl}/campgrounds`)

    if (!response.ok) {
        throw new Error("Failed to fetch campgrounds' data from backend");
    }

    return await response.json();
}
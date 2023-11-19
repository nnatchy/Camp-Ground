import { apiBackUrl } from "@/constants";

export default async function updateCampground(
    cid: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalCode: string,
    tel: string,
    picture: string
) {
    try {
        const response = await fetch(`${apiBackUrl}/campgrounds/${cid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                address,
                district,
                province,
                postalCode,
                tel,
                picture,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `Failed to update campground: ${response.status} - ${errorData.message || "Unknown error"
                }`
            );
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error updating campground: ${error}`);
    }
}

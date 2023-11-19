import { apiBackUrl } from "@/constants";
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function createCampground(
    name: string,
    address: string,
    district: string,
    province: string,
    postalCode: string,
    tel: string,
    picture: string,
) {

    try {
        const response = await fetch(`http://localhost:5000/api/v1/campgrounds`, {
            method: "POST",
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
        console.log(response)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `Failed to create campground: ${response.status} - ${errorData.message || "Unknown error"
                }`
            );
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Error creating campground: ${error}`);
    }
}

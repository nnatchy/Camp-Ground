import { apiBackUrl } from "@/constants";

export default async function deleteCampground(cid: string) {
    try {
        const response = await fetch(`${apiBackUrl}/campgrounds/${cid}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
                `Failed to delete campground: ${response.status} - ${errorData.message || "Unknown error"
                }`
            );
        }
        return { success: true };
    } catch (error) {
        throw new Error(`Error deleting campground: ${error}`);
    }
}

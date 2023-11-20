import { apiBackUrl } from "../../constants";

export default async function getBookings() {
    const response = await fetch(`${apiBackUrl}/bookings`, {next: {tags: ['bookings']}})

    if (!response.ok) {
        throw new Error("Failed to fetch bookings data from backend");
    }

    return await response.json();
}
export default async function getCampgrounds() {
    await new Promise((resolve) => setTimeout(resolve, 10));

    const response = await fetch("http://localhost:5000/api/v1/campgrounds");
    if (!response){
        throw ("Error to fetch campground data");
    }
    return response.json()
}
import Card from "./Card"
import Link from "next/link";
// import { CampJson, CampItem } from "interfaces";

export default async function campgroundCatalog({ campJson }: { campJson: Object }) {

    const campJsonReady = await campJson;

    return (
        <div className="block">
            <div className="flex flex-wrap -mx-2 mt-3">
                {campJsonReady.data.map((campItem: Object) => (
                    <div key={campItem.id} className="w-1/3 px-2 my-7">
                        <Link href={`/campground/${campItem.id}`}>
                            <Card
                                campgroundName={campItem.name}
                                imgSrc={campItem.picture}
                                campgroundSrc={campItem.tel}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    )
}
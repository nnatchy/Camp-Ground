import CardItem from "./CardItem";

export default async function CampgroundCatalog({ campJson }: { campJson: Object }) {

    const campJsonReady = await campJson;

    return (
        <div className="block">
            <div className="flex flex-wrap mx-2 mt-3">
                {campJsonReady.data.map((campItem: Object) => (
                    <div key={campItem.id} className="w-1/3 px-2 my-7">
                        <CardItem  id={campItem.id} picture={campItem.picture} name={campItem.name} 
                        address={campItem.address} province={campItem.province} district={campItem.district} 
                        postalCode={campItem.postalcode} tel={campItem.tel}/>
                    </div>
                ))}
            </div>
        </div>

    )
}
import CardItem from "./CardItem";

export default async function CampgroundCatalog({ campJson }: { campJson: Object }) {

    const campJsonReady = await campJson;

    return (
        <div>
            <div className="flex flex-row flex-wrap justify-center space-x-[20px]">
                {campJsonReady.data.map((campItem: Object) => (
                    <div key={campItem.id} className="w-[100%] sm:w-[50%] md:w-[50%] lg:w-[30%]">
                        <CardItem  id={campItem.id} picture={campItem.picture} name={campItem.name} 
                        address={campItem.address} province={campItem.province} district={campItem.district} 
                        postalCode={campItem.postalcode} tel={campItem.tel}/>
                    </div>
                ))}
            </div>
        </div>
    )
}
import CardItem from "./CardItem";

export default function Card(){
    return (
        <div className="flex relative flex-row flex-wrap justify-start mb-[40px]">
            <CardItem picture="/images/theCampster.webp" name="The Campster Kanchanaburi" province="Koh Samrong" country="Thailand"/>
            <CardItem picture="/images/theCampster.webp" name="The Campster Kanchanaburi" province="Koh Samrong" country="Thailand"/>
            <CardItem picture="/images/theCampster.webp" name="The Campster Kanchanaburi" province="Koh Samrong" country="Thailand"/>
            <CardItem picture="/images/theCampster.webp" name="The Campster Kanchanaburi" province="Koh Samrong" country="Thailand"/>
        </div>
    )
}
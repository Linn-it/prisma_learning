import { getPlants } from "@/actions/plant.action";
import { InventoryTable } from "@/components/InventoryTable";

export default async function Plants () {

    const plants = await getPlants();

    return (
        <>
            <InventoryTable plants={plants}/>
        </>
    )
}
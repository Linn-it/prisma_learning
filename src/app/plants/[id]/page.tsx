import { getPlantById } from "@/actions/plant.action";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function PlantDetail({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const plant = await getPlantById(Number(id));

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap items-center gap-12">
                    <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] text-end">
                        <Image className="object-cover rounded-2xl" src={plant?.imageUrl ?? "/next.svg"} fill alt="" />
                    </div>
                    <div className="text-2xl font-medium text-primary font-sans">
                        <p className="mb-3">Name: {plant?.name}</p>
                        <p className="mb-3">Price: ${plant?.price}</p>
                        <p className="mb-3 flex items-center">Category: <Badge className="w-20 p-1 ml-2 rounded-md">{plant?.category}</Badge></p>
                        <p className="mb-3">Stock: {plant?.stock}</p>
                        <p>Desc: {plant?.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

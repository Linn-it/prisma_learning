"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPlants() {
    try {
        // const {userId} = await auth();
        // const whereClause: any = {
        //     userId
        // };

        // if (searchTerm) {
        //     whereClause.name = {
        //         contains: searchTerm,
        //         mode: 'insensitive'
        //     };
        // }

        const getAllPlants = await prisma.plant.findMany({
            orderBy: {
                id: "asc",
            },
        });

        return getAllPlants;
    } catch (error) {
        throw new Error("Failed to fetch plants");
    }
}

export async function getPlantById(plantId: number) {
    try {
        const getPlantById = await prisma.plant.findUnique({
            where: {
                id: plantId,
            },
        });

        return getPlantById;
    } catch (error) {
        throw error;
    }
}

export async function createPlant(data: any) {
    try {
        const newPlant = await prisma.plant.create({
            data: {
                name: data.name,
                description: data.description,
                category: data.category,
                imageUrl: data.imageUrl,
                stock: Number(data.stock),
                price: Number(data.price),
            },
        });

        revalidatePath("/plants");
        return newPlant;
    } catch (error) {
        throw error;
    }
}

export async function editPlant(plantId: number, data: any) {
    try {
        const editPlant = await prisma.plant.update({
            where: {
                id: plantId,
            },
            data: {
                name: data.name,
                description: data.description,
                category: data.category,
                imageUrl: data.imageUrl,
                stock: Number(data.stock),
                price: Number(data.price),
            },
        });

        revalidatePath("/plants");
        return editPlant;
    } catch (error) {
        throw error;
    }
}

export async function deletePlant(plantId: number) {
    try {
        const deletePlant = await prisma.plant.delete({
            where: {
                id: plantId,
            },
        });

        revalidatePath("/plants");
        return deletePlant;
    } catch (error) {
        throw error;
    }
}

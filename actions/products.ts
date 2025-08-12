"use server"

import db from "@/lib/db";

export async function GetAllProducts() {
    const productsList = await db.products.findMany();

    // fetch (api example)
    // const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    //     method: "GET",
    //     next: {
    //         tags: ["users_list"]
    //     }
    // })

    // if (!response) return {
    //     success: false,
    //     message: "خطا در دریافت اطلاعات!"
    // }

    // return {
    //     success: true,
    //     data: await response.json()
    // }

    return productsList;
}

export type TProduct = {
    id?: string;
    name: string;
    url: string;
    price: number;
    image: string;
    gallery?: string[];
    description: string | null;
}

export async function AddNewProduct(productData: TProduct) {
    const createProduct = await db.products.create({ data: productData })

    if (!createProduct) {
        return "خطا در ایجاد محصول!"
    }

    return "محصول با موفقیت ایجاد شد!"
}

export async function GetProductById(productID: string) {
    const product = await db.products.findUnique({
        // where: { id }
        where: { id: productID }
    })

    return product
}

export async function UpdateProduct(productData: TProduct, productId: string) {
    const updateProcess = await db.products.update({
        where: { id: productId },
        data: productData,
    })

    if (!updateProcess) {
        return "خطا در ویرایش محصول!"
    }

    return "محصول با موفقیت ویرایش شد!"
}

export async function DeleteProductById(productId: string) {
    const deleteProcess = await db.products.delete({
        where: { id: productId }
    })

    if (!deleteProcess) {
        return "خطا در حذف محصول!"
    }

    return "محصول با موفقیت حذف شد!"
}
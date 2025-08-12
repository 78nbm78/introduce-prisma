"use client"

import Image from "next/image"
import { DeleteProductById } from "@/actions/products"
import TrashImage from "@/public/trash-icon.svg"

type TProps = {
    productId: string
}

function DeleteProductBtn({ productId }: TProps) {
    // crud => create | read | update | delete

    async function handleDeleteProduct() {
        const response = await DeleteProductById(productId)

        if (!response) {
            alert("خطا در حذف محصول!")
            return;
        }

        alert("محصول با موفقیت حذف شد!")
        location.reload()
    }

    return (
        <button onClick={handleDeleteProduct} className="cursor-pointer">
            <Image src={TrashImage} width={18} height={18} alt="trash icon" />
        </button>
    )
}

export default DeleteProductBtn
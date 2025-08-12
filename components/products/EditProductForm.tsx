"use client"

import { TProduct, UpdateProduct } from "@/actions/products"
import { useState } from "react"

type TProps = {
    product: TProduct | null
}

function EditProductForm({ product }: TProps) {
    const [name, setName] = useState(product?.name)
    const [url, setUrl] = useState(product?.url) // string
    const [price, setPrice] = useState(product?.price) // number
    const [image, setImage] = useState(product?.image) // string
    const [description, setDescription] = useState(product?.description)

    async function SaveProduct() {
        // todo: save product into database
        const data = {
            name: name || "",
            url: url || "",
            price: price || 0,
            image: image || "",
            description: description || "",
        }

        const response = await UpdateProduct(data, product?.id!)

        if (!response) {
            alert("خطا در ویرایش محصول!")
            return;
        }

        alert("محصول با موفقیت ویرایش شد!")
        location.href = "/products"
    }

    return (
        <div className="bg-white max-w-[800px] my-16 mx-auto rounded-2xl text-black p-6 space-y-4">
            <div>
                <label htmlFor="name">Product Name</label>
                <input
                    type="text"
                    id="name"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setName(txt.target.value)}
                    value={name}
                />
            </div>
            <div>
                <label htmlFor="url">Product Url</label>
                <input
                    type="text"
                    id="url"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setUrl(txt.target.value)}
                    value={url}
                />
            </div>
            <div>
                <label htmlFor="price">Product Price</label>
                <input
                    type="text"
                    id="price"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setPrice(Number(txt.target.value))}
                    value={price}
                />
            </div>
            <div>
                <label htmlFor="image">Product Image</label>
                <input
                    type="text"
                    id="image"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setImage(txt.target.value)}
                    value={image}
                />
            </div>
            <div>
                <label htmlFor="description">Product Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setDescription(txt.target.value)}
                    value={description || ""}
                ></textarea>
            </div>
            <div>
                <button
                    className="bg-emerald-200 text-emerald-800 rounded-md py-1.5 px-4 cursor-pointer transition hover:bg-emerald-800 hover:text-white"
                    onClick={SaveProduct}
                >
                    Edit and Save product
                </button>
            </div>
        </div>
    )
}

export default EditProductForm
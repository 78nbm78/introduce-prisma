"use client"

import { useState } from "react"
import { AddNewProduct } from "@/actions/products"

function AddProductPage() {
    // store data from our form
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    // create a new product logic
    async function SaveProduct() {
        const myData = {
            name,
            url,
            price: Number(price),
            image,
            description,
            gallery: []
        }

        const response = await AddNewProduct(myData)

        if (!response) {
            alert("خطا در ایجاد محصول!")
            return;
        }

        alert("محصول با موفقیت اضافه شد!")
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
                />
            </div>
            <div>
                <label htmlFor="url">Product Url</label>
                <input
                    type="text"
                    id="url"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setUrl(txt.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Product Price</label>
                <input
                    type="text"
                    id="price"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setPrice(txt.target.value)}
                />
            </div>
            <div>
                <label htmlFor="image">Product Image</label>
                <input
                    type="text"
                    id="image"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setImage(txt.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Product Description</label>
                <textarea
                    name="description"
                    id="description"
                    className="border rounded-md block w-full py-1.5 px-3"
                    onChange={(txt) => setDescription(txt.target.value)}
                ></textarea>
            </div>
            <div>
                <button
                    className="bg-emerald-200 text-emerald-800 rounded-md py-1.5 px-4 cursor-pointer transition hover:bg-emerald-800 hover:text-white"
                    onClick={SaveProduct}
                >
                    Create and Save product
                </button>
            </div>
        </div>
    )
}

export default AddProductPage
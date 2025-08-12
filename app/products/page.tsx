import { GetAllProducts } from "@/actions/products"
import DeleteProductBtn from "@/components/products/DeleteProductBtn"
import Link from "next/link"

async function ProductsPage() {
    const products = await GetAllProducts()

    return (
        <div className="bg-white max-w-[800px] my-16 mx-auto rounded-2xl text-black p-6">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-rose-800">
                    لیست محصولات
                </h1>
                <Link href="/products/add" className="inline-block py-1.5 px-4 bg-rose-200 text-rose-800 rounded-lg">
                    افزودن محصول جدید
                </Link>
            </div>

            <table className="w-full">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="border">
                            <td>
                                <img src={product.image} className="size-16 rounded-full" />
                            </td>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.price} <small>تومان</small>
                            </td>
                            <td>
                                <div className="flex items-center gap-4">
                                    <Link
                                        href={`/products/edit/${product.id}`}
                                        className="text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>

                                    <DeleteProductBtn productId={product.id} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsPage
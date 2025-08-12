import { GetProductById } from "@/actions/products";
import EditProductForm from "@/components/products/EditProductForm";

type TParams = {
    params: Promise<{ id: string }>
}

async function EditProductPage({ params }: TParams) {
    const paramsId = await params
    const product = await GetProductById(paramsId.id)

    return (
        <div>
            <EditProductForm product={product} />
        </div>
    )
}

export default EditProductPage

import { products } from "../page"
import { use } from "react"
import Link from "next/link"
import styles from "./pdetails.module.css"
type ProductDetailProps = {
    params: Promise<{id: string;}>;
}

function ProductDetails({params}: ProductDetailProps) {
    // use replaces async await without having to use the keyword in react fn
    const { id } = use(params);
    // console.log('id', id)
    const thisProduct = products.find( each => each.id === id);
    // console.log('thisProduct', thisProduct)

    if (!thisProduct) {
        return (
              <div className="flex flex-col gap-2 m-2 p-2 justify-center items-center">
            <h1 className={styles.title}>Product not found</h1>
            <Link href="/products">
            <button className={styles.backLink}>Back to products</button>
            </Link>
            </div>
        )
    }

  return (
    <div className={styles.container}>
    <div className={styles.detailCard}>
        <p className={styles.title}>{thisProduct.name}</p>
        <p className={styles.price}>{thisProduct.price}฿</p>
        <p className={styles.description}>{thisProduct.description}</p>
        <Link href="/products">
            <button className={styles.badge}>Back to products</button>
            </Link>
    </div>
    </div>
  )
}

// async await way
// async function ProductDetails({params}: ProductDetailProps) {
//     const { id } = await params;
//   return (
//     <div>
//         product
//     </div>
//   )
// }

export default ProductDetails
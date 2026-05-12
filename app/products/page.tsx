import styles from "./product.module.css";
import Link
 from "next/link";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const products: ProductType[] = [
  { id: "1", name: "Modern Desk Lamp", price: 1200, description: "A sleek and energy-efficient lamp for your workspace." },
  { id: "2", name: "Mechanical Keyboard", price: 3500, description: "Tactile and responsive keyboard for developers and gamers." },
  { id: "3", name: "Wireless Mouse", price: 1500, description: "Ergonomic design with long battery life." },
  { id: "4", name: "USB-C Hub", price: 890, description: "7-in-1 connectivity for all your peripherals." },
];


function ProductPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.grid}>
        {products.map((each) => (
          <Link href={`/products/${each.id}`} key={each.id}>
          <div className={styles.card}> 
            <div className={styles.cardContent}>
              <p className={styles.productName}>{each.name}</p>
              <p className={styles.productPrice}>{each.price.toLocaleString()}฿</p>  
            <p className={styles.viewDetail}>View Details</p>
            </div>
          </div>
           </Link>
        ))}
      </div>
    </section>
  );
}

export default ProductPage;

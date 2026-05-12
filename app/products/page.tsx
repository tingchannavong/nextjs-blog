import styles from "./product.module.css";
interface ProductType {
  id: string;
  name: string;
  price: number;
}

const products: ProductType[] = [
  { id: "1", name: "Modern Desk Lamp", price: 1200 },
  { id: "2", name: "Mechanical Keyboard", price: 3500 },
  { id: "3", name: "Wireless Mouse", price: 1500 },
  { id: "4", name: "USB-C Hub", price: 890 },
];

function ProductPage() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <h3 className={styles.subtitle}>Categories: Electronic</h3>
      <div className={styles.grid}>
        {products.map((each) => (
          <div className={styles.card}>
            <div className={styles.cardContent}>
            <span className={styles.viewDetail}></span>
              <p className={styles.productName}>{each.name}</p>
              <p className={styles.productPrice}>{each.price}$</p>  
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductPage;

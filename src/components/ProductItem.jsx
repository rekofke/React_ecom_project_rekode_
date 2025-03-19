import styles from './ProductItem.module.css';

const ProductItem = ({oneProduct}) => {

    return (
        <div className={styles.productDetail}>
            <h3>{oneProduct.name}</h3>
            <p>{oneProduct.description}</p>
            <p>${oneProduct.price}</p>
        </div>
            
    
    )
}

export default ProductItem;
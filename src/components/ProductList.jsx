import products from "../products.json";
import ProductCard from "./ProductCard";

function ProductList({ searchQuery }) {
    
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery)
    );

    return (
            <div className="grid grid-cols-3 justify-between gap-20 p-6 ml-5">


            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p className="col-span-3 text-center text-red-500 text-lg">No products found</p>
            )}
        </div>
    );
}

export default ProductList;


const Product: React.FC = ({products, cartList, handleAddCart, handleDeleteCart, handleProductDetails} : any ) => {


  // Function to check if a product is in the cart
  const isInCart = (productId: string): boolean => {
    return cartList.some(item => item.productId === productId);
  };

  const handleImageError = (e: any) => {
    e.currentTarget.src = "/no-photo.png";
  };

  return (
    <div className="flex flex-wrap justify-center gap-5 p-2">
      {products.map((product : any) => (
        <div
          key={product._id}
          className="min-w-screen bg-white   shadow-lg shadow-slate-500 py-2 px-2 cursor-pointer"
        >
          <div className="flex justify-center" onClick={() => handleProductDetails(product.name,product.images,product.price,product._id)}>

            <img
              src={product.images[0]?product.images[0]:"/no-photo.png"} 
              onError={handleImageError}
              alt={product.name}
              className="content-center w-80  h-80"
            />
          </div>

          <div className="text-center font-bold mt-5 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl" 
          onClick={() => handleProductDetails(product._id)}>
            {product.name}
          </div>

          <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {product.description}
          </div>

          <div className="justify-center text-center mt-2 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            ₹ {product.price.toFixed(2)} /- 
          </div>

          <div className="flex justify-center mt-5">
            
              {isInCart(product._id) ? (
              <div
                className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                onClick={() => handleDeleteCart(product._id)}
              >
                Remove from Cart
              </div>
            ) : (
              <div
                className="border-2 border-red-400 rounded-full p-2 md:px-4 lg:px-6 xl:px-8 font-semibold hover:bg-red-400 text-center w-40 xl:w-60 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl"
                onClick={() => handleAddCart(product._id)}
              >
                Add to Cart
              </div>
            )}
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
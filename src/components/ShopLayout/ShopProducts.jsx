import { toast } from 'react-toastify';
import useCartStore from "../../store/cartStore";

function ShoppingProducts({ products }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (product) => {
    const result = addToCart(product);
    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.info(result.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <main className="max-w-[1280px] mx-auto px-4 grid grid-cols-2 md:grid-cols-3 py-10 gap-3">
        {products.map((product) => {
          return (
            <div className=" max-w-[400px] mx-auto my-3" key={product.id}>
              <img
                src={product.img}
                alt=""
                className="w-[280px] md:w-[350px] mx-auto lg:mx-0"
              />
              <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>
              <h3 className="font-medium text-sm sm:text-lg lg:text-xl">
                {product.name}
              </h3>
              <p className="text-gray-600 text-[0.9rem] sm:text-base md:text-lg">
                {product.type}
              </p>
              <p className="font-medium text-gray-600 text-sm md:text-lg">
                <span className="text-md md:text-xl">₹</span>
                {product.price}
              </p>
              <button
                className="bg-lime-300 w-27 sm:w-30 h-10 rounded-xl text-base font-semibold my-4 cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default ShoppingProducts;

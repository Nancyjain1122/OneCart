import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { authDataContext } from './AuthContext.jsx';
import { userDataContext } from './UserContext';
import { toast } from 'react-toastify';

export const shopDataContext = createContext();

function ShopContext({ children }) {
  const serverUrl = useContext(authDataContext);
  const { userData } = useContext(userDataContext);
  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState({});

  const currency = '';
  const delivery_fee = 40;

  const getProducts = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/product/list`);
      setProducts(result.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  const addtoCart = async (itemId, size) => {
    if (!size) {
      console.log("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItem(cartData);

    if (userData) {
      try {
        let result = await axios.post(serverUrl + "/api/cart/add", { itemId, size }, { withCredentials: true });
        console.log(result.data);
        // No toast here — toast shown in component
      } catch (error) {
        console.log(error);
        toast.error("Add Cart Error");
      }
    }
  };

  const getUserCart = async () => {
    try {
      const result = await axios.post(serverUrl + '/api/cart/get', {}, { withCredentials: true });
      setCartItem(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItem);
    cartData[itemId][size] = quantity;
    setCartItem(cartData);

    if (userData) {
      try {
        await axios.post(serverUrl + "/api/cart/update", { itemId, size, quantity }, { withCredentials: true });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItem) {
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalCount += cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItem) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItem[items]) {
        try {
          if (cartItem[items][item] > 0) {
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("Cart Updated:", cartItem);
  }, [cartItem]);

  const value = {
    products,
    currency,
    delivery_fee,
    cartItem,
    addtoCart,
    getCartCount,
    setCartItem,
    updateQuantity,
    getCartAmount,
  };

  return (
    <shopDataContext.Provider value={value}>
      {children}
    </shopDataContext.Provider>
  );
}

export default ShopContext;

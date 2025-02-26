import axios from "axios";
import { useEffect, useState } from "react";
import { constants } from "../utils/constants";

export default function useFetchProduct() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(constants.productAPI);
        if (isMounted) {
          setProducts(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(constants.errorMessage);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  return {
    products,
    isLoading,
    error,
    isDrawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
  };
}

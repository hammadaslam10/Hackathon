import React, { useEffect, Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import Product from "./ProductCard";
import "./Home.css";
import "./featured.css"
import MetaData from "../layout/MetaData";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Slider from "./Slider";
import Footer from "../layout/Footer/Footer";
const Home = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    // , productsCount
  } = useSelector((state) => state.products);
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title="Fido Real Estate" />
          <Slider />
          <header>
            <h1>Featured Hotels</h1>
          </header>{" "}
          <div className="container" id="container">
            {products &&
              products.map((product) => <Product product={product} />)}
          </div>
          <Footer/>
        </>
      )}
    </Fragment>
  );
};

export default Home;

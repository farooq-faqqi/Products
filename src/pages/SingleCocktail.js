import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Ratings from "../components/Ratings";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
const url = "https://dummyjson.com/products";

// async function getImages() {
//   const theData = await fetch(`${url}`);
//   const thePic = await theData.json();
//   const { gallery } = thePic;
//   if (gallery) {
//     const newImages = gallery.map((item) => {
//       const { id, images } = item;
//       return {
//         id: id,
//         images: images,
//       };
//     });
//     return newImages;
//     console.log(newImages);
//   }
// }
// getImages(id);

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getProduct() {
      try {
        const response = await fetch(`${url}/${id}`);
        const data = await response.json();

        if (data) {
          const {
            id: id,
            title: title,
            brand: brand,
            price: price,
            description: info,
            rating: rating,
            thumbnail: img,
            images: images,
          } = data;
          // console.log(images);
          {
            images.map((image, id) => {
              // console.log(image);
              return image, id;
            });
          }
          {
            const newArr = [];
            newArr.push(images);
            console.log(images);
          }

          const newProduct = {
            id,
            img,
            rating,
            title,
            brand,
            price,
            info,
            images,
          };

          setProducts(newProduct);
        } else {
          setProducts(null);
        }
        setLoading(false);
        // console.log(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }

    getProduct(id);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!products) {
    return <h2 className="section-title">no product to show rn</h2>;
  }

  const { title, img, brand, price, info, rating, images } = products;
  return (
    <>
      <Navbar />
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/">
          Go Back
        </Link>
        <div className="drink">
          <div className="Containers">
            <div className="left">
              <div className="left__1">
                {images.map((image, id) => (
                  <div className="images" key={id}>
                    <img src={image} />
                  </div>
                ))}
              </div>
              <div className="left__2">
                <img id="featured" src={images[0]} />
              </div>
            </div>
            <div className="right"></div>
          </div>

          {/* <img src={img} alt={title} /> */}
          <div className="drink-info">
            <p className="new">
              {/* <span>name:</span> */}
              {title}
            </p>
            <p id="brand">
              <span id="num">brand:</span>
              {brand}
            </p>
            <p id="naw">
              <span id="price">price:</span>${price}
            </p>
            <p>
              <span id="desc">description:</span>
              {info}
            </p>
            <p id="reviews" className="">
              <span>rating:</span>
              <Ratings value={rating} />
              {`(${rating})`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleCocktail;

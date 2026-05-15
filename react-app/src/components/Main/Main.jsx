import "./Main.css";
import { useState } from "react";

function Main() {

  const teaSlides = [
    {
      title: "Green Tea",
      text: "Refreshing and rich in antioxidants. Perfect for boosting energy and improving focus.",
      image:
        "https://www.vahdam.com/cdn/shop/articles/Green_Tea_Header_copy_0e698fae-5d3a-467e-b502-6e0800ea7eb2.jpg?v=1774525547&width=2048",
    },

    {
      title: "Black Tea",
      text: "Strong flavor with a deep aroma. One of the most popular teas in the world.",
      image:
        "https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/Benefits-of-Drinking-Black-Tea-thumbnail_2048x2048_crop_center.jpg.webp?v=1660832924",
    },

    {
      title: "White Tea",
      text: "Delicate and light tea made from young tea leaves with a soft natural taste.",
      image:
        "https://cdn.shopify.com/s/files/1/0022/1393/7252/articles/20221107133813-white-tea-recipe-blog_2048x2048_crop_center.jpg.webp?v=1667828741",
    },

    {
      title: "Oolong Tea",
      text: "Traditional semi-oxidized tea with a rich taste between green and black tea.",
      image:
        "https://www.coffeedesk.com/blog/wp-content/uploads/2020/05/organic-herbata-zaparzona-1920x1280.jpg",
    },

    {
      title: "Herbal Tea",
      text: "Relaxing caffeine-free drink with natural herbs, flowers, and fruits.",
      image:
        "https://scitechdaily.com/images/Pouring-Herbal-Tea.jpg",
    },
  ];


  const fruitSlides = [
    {
      title: "Classic tiramisu",
      text: "Fresh citrus taste with a bright aroma and natural energy.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2022/04/Tiramisu-e2a657d.jpg?quality=90&resize=708,643",
    },

    {
      title: "Mauritian coconut flan",
      text: "Sweet and насыщенный flavor with forest berries and herbs.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2025/09/CoconutFlanpreview-a56699b.jpg?quality=90&webp=true&resize=1300,866",
    },

    {
      title: "Lime cheesecake",
      text: "Cooling and calming tea that helps you relax after a long day.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2022/09/lime-cheesecake-da6b373.jpg?quality=90&webp=true&resize=800,533",
    },

    {
      title: "Oreo mug cake",
      text: "Soft fruity taste with delicate sweetness and rich aroma.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2023/09/Oreo-mug-cake-631fc53.jpg?quality=90&webp=true&resize=900,600",
    },

    {
      title: "Espresso martini cheesecake",
      text: "Bright tropical flavor with refreshing citrus notes.",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/2/2022/02/Espresso-martini-cheesecake-a608663.png?quality=90&webp=true&resize=1043,695",
    },
  ];


  const [currentTea, setCurrentTea] = useState(0);
  const [currentFruit, setCurrentFruit] = useState(0);

  return (
    <section className="section1">

      <h1 className="main-title">Our Special Tea</h1>

      {/* FIRST SLIDER */}

      <div className="slider-wrapper">

        <div className="slider-card">

          <div className="image-block">
            <img
              src={teaSlides[currentTea].image}
              alt={teaSlides[currentTea].title}
              className="slider-image"
            />
          </div>

          <div className="content-block">

            <span className="mini-title">Premium Tea</span>

            <h2 className="tea-title">
              {teaSlides[currentTea].title}
            </h2>

            <p className="tea-text">
              {teaSlides[currentTea].text}
            </p>

            <div className="buttons">

              <button
                onClick={() =>
                  setCurrentTea(
                    (prev) =>
                      (prev - 1 + teaSlides.length) %
                      teaSlides.length
                  )
                }
              >
                <p className="pp">⬅</p>
              </button>

              <button
                onClick={() =>
                  setCurrentTea(
                    (prev) =>
                      (prev + 1) % teaSlides.length
                  )
                }
              >
                <p className="pp">➡</p>
              </button>

            </div>

            <div className="dots">
              {teaSlides.map((_, index) => (
                <div
                  key={index}
                  className={
                    currentTea === index
                      ? "dot active"
                      : "dot"
                  }
                ></div>
              ))}
            </div>

          </div>

        </div>

      </div>


      {/* SECOND SLIDER */}

      <h1 className="main-title second-title">
        Our special desserts
      </h1>

      <div className="slider-wrapper">

        <div className="slider-card reverse">

          <div className="content-block">

            <span className="mini-title">
              Desserts Collection
            </span>

            <h2 className="tea-title">
              {fruitSlides[currentFruit].title}
            </h2>

            <p className="tea-text">
              {fruitSlides[currentFruit].text}
            </p>

            <div className="buttons">

              <button
                onClick={() =>
                  setCurrentFruit(
                    (prev) =>
                      (prev - 1 + fruitSlides.length) %
                      fruitSlides.length
                  )
                }
              >
                <p className="pp">➡</p>
              </button>

              <button
                onClick={() =>
                  setCurrentFruit(
                    (prev) =>
                      (prev + 1) % fruitSlides.length
                  )
                }
              >
                
              </button>

            </div>

            <div className="dots">
              {fruitSlides.map((_, index) => (
                <div
                  key={index}
                  className={
                    currentFruit === index
                      ? "dot active"
                      : "dot"
                  }
                ></div>
              ))}
            </div>

          </div>

          <div className="image-block">
            <img
              src={fruitSlides[currentFruit].image}
              alt={fruitSlides[currentFruit].title}
              className="slider-image"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Main;
import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Sidra",
      email: "sidra@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "john@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Lenovo Thinkpad x1 carbon g8",
      category: "laptop",
      image: "/images/p1.jpg",
      price: 99000,
      countInStock: 10,
      brand: "Lenovo",
      rating: 4.5,
      numReviews: 10,
      description: "With 10th Gen Intel® Core™ processing, the ThinkPad X1 Carbon Gen 8 is faster than ever no matter the task. Given that it's certified by Intel® for mobile performance, it delivers long-lasting power and productivity when you're on the go. Enjoy up to 19.5 hours of battery life.",
    },
    {
      name: "Lenovo Legion Y7000",
      category: "laptop",
      image: "/images/p2.jpg",
      price: 395000,
      countInStock: 20,
      brand: "Lenovo",
      rating: 4.0,
      numReviews: 10,
      description: "his notebook features an 8th Gen Coffee Lake Intel Core i7-8750U processor. Its six cores can reach a base clock speed of 2.2 GHz and be boosted up to 4.1 GHz. NVIDIA's GeForce GTX 10-series graphics cards can deliver up to a 40% increase in performance over the previous generation.",
    },
    {
      name: "Dell Inspiron 3581",
      category: "laptop",
      image: "/images/p3.jpg",
      price: 57000,
      countInStock: 20,
      brand: "Dell",
      rating: 4.8,
      numReviews: 17,
      description:
        "15.6″ display with 1366 x 768 HD resolution, Intel® Core i3 7th Gen Processor. 1000 GB hard drive & 4GB Ram.",
    },
    {
      name: "Samsung Galaxy S20",
      category: "mobile",
      image: "/images/p4.jpg",
      price: 155000,
      countInStock: 15,
      brand: "Samsung",
      rating: 4.5,
      numReviews: 14,
      description:
        "Samsung Galaxy S20, the smallest of the S20 family, comes with a 6.2-inch display. Under the hood is Snapdragon 865/Exynos 990 chipset with 12GB RAM and 128GB storage.",
    },
    {
      name: "Samsung Galaxy S10",
      category: "mobile",
      image: "/images/p5.jpg",
      price: 140000,
      countInStock: 5,
      brand: "Samsung",
      rating: 4.5,
      numReviews: 10,
      description:
        "The S10 features a 3-lens rear-facing camera setup; it retains the dual-aperture 12-megapixel and 12-megapixel telephoto lenses of the Galaxy S9+, but now uses a camera module introduced on the Note 9 and also adds a 16-megapixel ultra-wide angle lens.",
    },
    {
      name: "Samsung Galaxy S20 FE",
      category: "mobile",
      image: "/images/p6.jpg",
      price: 123000,
      countInStock: 12,
      brand: "Samsung",
      rating: 4.5,
      numReviews: 15,
      description:
        "Description. Samsung Galaxy S20 FE (Fan Edition) is the successor of Galaxy S10 Lite. Specifications include a 6.5-inch FHD+ display, Snapdragon 865 chipset with 6GB/8GB RAM and 128GB/256GB storage, and 4500 battery. There is a triple-camera setup on the back, with the same main sensor found in regular Galaxy S20.",
    },
  ],
};
export default data;

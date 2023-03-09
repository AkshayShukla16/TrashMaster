
import './Product.css';
import React,{useState} from 'react';
import Header from './Header';
import ProductList from './ProductList';
import CartList from './CartList';


function Product() {
    const [product, setProduct] = useState([
        {
          url: 'https://www.jiomart.com/images/product/600x750/rvrgwpjvsp/bruton-trendy-sports-shoes-for-men-blue-product-images-rvrgwpjvsp-0-202209021256.jpg',
          name: 'TRQ White Shoes',
          seller: 'AMZ Seller Ghz',
          price: 200
        },
        {
          url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
          name: 'LOREM Watch Black',
          seller: 'Watch Ltd Siyana',
          price: 349
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
          name: 'AMZ Laptop 8GB',
          seller: 'Delhi Laptops',
          price: 10000
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
          name: 'Security Camera',
          seller: 'Camron LTD',
          price: 2499
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
          name: 'Watch Pink',
          seller: 'Watch Ltd',
          price: 1500
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
          name: 'Cup red Color',
          seller: 'ABS Ltd',
          price: 100
        },
        {
          url: 'https://www.lg.com/in/images/audio/md07544721/gallery/TCASEG-D-01.jpg',
          name: 'Earphone Cover',
          seller: 'Btone Com',
          price: 70
        },
        {
          url: 'https://5.imimg.com/data5/ANDROID/Default/2020/9/ER/PM/YP/96425724/product-jpeg-500x500.jpg',
          name: 'Polity book Eng',
          seller: 'Laxmikant',
          price: 120
        },
        {
          url: 'https://i.pinimg.com/originals/c4/1e/a0/c41ea0c742a22ed3ca80e1e97ea5fe51.png',
          name: 'Doremon toy',
          seller: 'kriplani',
          price: 80
        },
        {
          url: 'https://www.espinosa.fr/20575-thickbox_default/table-fan-chrome-clasic-diameter-30cm-40w.jpg',
          name: 'Table Fan',
          seller: 'Usha Mittal',
          price: 350
        },
        {
          url: 'https://cdn.shopify.com/s/files/1/0411/4717/0966/products/silicone-ear-tips_01_985x.jpg?v=1595025974',
          name: 'Ear-bud Cover',
          seller: 'Aakash',
          price: 10
        },
        {
          url: 'https://m.media-amazon.com/images/I/81lD0HQ0hTL._AC_SL1500_.jpg',
          name: 'Chip Memory',
          seller: 'Amaron',
          price: 180
        },
        {
          url: 'https://5.imimg.com/data5/UH/JW/MY-40083844/nokia-1650-fm-mobile-phone-1000x1000.jpeg',
          name: 'Nokia old Phone',
          seller: 'Rajat',
          price: 700
        },

        {
          url: 'https://tiimg.tistatic.com/fp/1/007/736/make-learning-easy-dr-r-s-aggarwal-s-general-knowledge-book--651.jpg',
          name: 'Gk book',
          seller: 'Agrawal brother',
          price: 150
        },
        {
          url: 'https://www.helpingindia.com/images/usmobilechargerhead.jpg',
          name: 'Charger',
          seller: 'Rakesh Singh',
          price: 90
        },
        {
          url: 'https://rukminim1.flixcart.com/image/832/832/k6ci8i80/backpack/e/z/m/hop9990-299902-laptop-backpack-hp-original-imafcgzxcykzz4eu.jpeg?q=70',
          name: 'Laptop bag',
          seller: 'Namrta',
          price: 100
        },
        {
          url: 'https://m.media-amazon.com/images/I/51L0b7NLiBL._SL1280_.jpg',
          name: 'Cello bottle',
          seller: 'Cello India',
          price: 200
        },
        {
          url: 'https://www.etshop.in/wp-content/uploads/2021/05/3-pin-plug-500x500-1.jpg',
          name: 'Three-pin Plug',
          seller: 'Hexaware',
          price: 40
        },
        {
          url: 'https://5.imimg.com/data5/YS/IR/TX/SELLER-22715601/wood-chair-1000x1000.jpg',
          name: 'Wooden Chair',
          seller: 'MartKind',
          price: 250
        },
        {
          url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo-9eH6dHontMj2-3bUtx2rHwv84RuixyHrg&usqp=CAU',
          name: 'Dry Iron',
          seller: 'Adore',
          price: 800
        },
      ])
    
      const [cart, setCart] = useState([])
      const [showCart, setShowCart] = useState(false)
    
      const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
      }
    
      const handleShow = (value) => {
        setShowCart(value)
      }
    
  return (
    <div>
    <Header count={cart.length}
      handleShow={handleShow} ></Header>

    {
      showCart ?
        <CartList cart={cart} ></CartList> :
        <ProductList product={product} addToCart={addToCart} ></ProductList>
    }


  </div>
  )
}

export default Product

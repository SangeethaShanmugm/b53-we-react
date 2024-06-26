import { useState, useEffect } from "react"
import { AddColor } from "./component/AddColor";
import "./App.css";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom"
import { ProductList } from "./component/ProductList"
import { Home } from "./component/Home";
import { ProductDetails } from "./component/ProductDetails";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ExampleContext from "./component/context/ExampleContext";
import { Ref } from "./component/useRef_useReducer/Ref"
import Reducer from "./component/useRef_useReducer/Reducer";
import TicTacToe from "./component/TicTacToe";
import { AddProduct } from "./component/AddProduct"
import LifeCycleA from "./component/ClassComponent/LifeCycleA";
import { API } from "./global";
import { NotFoundPage } from "./component/NotFoundPage";
import { EditProduct } from "./component/EditProduct";
import Redux from "./component/Redux/Redux";
import Hooks from "./component/Hooks/Hooks";

export const INITIAL_PRODUCT_LIST = [
  {
    name: "iPhone 15 (128 GB)",
    poster: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
    price: "₹77,900 ",
    rating: 3,
    summary:
      "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more.",
  },
  {
    name: "iPhone 15 Pro (128 GB)",
    poster: "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
    price: "₹1,34,900 ",
    rating: 3.5,
    summary:
      " iPhone 15 Pro has Link strong and light aerospace-grade titanium design with Link textured matte-glass back. It also features Link Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant.",
  },
  {
    name: "Samsung Galaxy S23 5G (256GB Storage)",
    poster: "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
    price: "₹65,320",
    rating: 4.7,
    summary:
      "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever.",
  },
  {
    name: "Samsung Galaxy S23 Ultra 5G (256GB Storage)",
    poster: "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
    price: "₹1,00,000",
    rating: 5.0,
    summary:
      "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on Link phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice.",
  },
  {
    name: "Apple AirPods Pro​",
    poster: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
    price: "₹20,999 ",
    rating: 4.8,
    summary:
      "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you.",
  },
  {
    name: "Apple Watch Series 9 [GPS + Cellular 41mm]",
    poster: "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
    price: "₹75,900 ",
    rating: 4.9,
    summary:
      "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
  },
  {
    name: "Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
    poster: "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
    price: "₹22,999",
    rating: 4.5,
    summary:
      "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress.",
  },
  {
    name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
    poster: "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
    price: "₹27,141",
    rating: 4.3,
    summary:
      "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you",
  },
  {
    name: "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
    poster: "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
    price: "₹84,990",
    rating: 5.0,
    summary:
      "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.",
  },
  {
    name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
    poster: "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
    price: "₹1,10,790",
    rating: 4.9,
    summary:
      " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD",
  },
];

export default function App() {
  //lifting the state up from child to parent => lifted from child to parent

  // const [productList, setProductList] = useState([]);

  const navigate = useNavigate()
  const [mode, setMode] = useState("light")

  //1. creating = createContext
  //2. Publisher = provider =context.Provider
  //3. subscriber = useContext = useContext(context)
  const theme1 = createTheme({
    palette: {
      mode: mode,
    },
  });





  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Button onClick={() => navigate("/")} color="inherit">Home</Button>
            <Button onClick={() => navigate("/products")} color="inherit">ProductList</Button>
            <Button onClick={() => navigate("/products/add")} color="inherit">AddProduct</Button>

            <Button onClick={() => navigate("/add-color")} color="inherit">AddColor</Button>

            <Button onClick={() => navigate("/context")} color="inherit">ExampleContext</Button>
            <Button onClick={() => navigate("/ref")} color="inherit">Ref</Button>
            <Button onClick={() => navigate("/tictactoe")} color="inherit">TicTacToe</Button>
            <Button onClick={() => navigate("/class")} color="inherit">Class</Button>
            {/* redux */}
            <Button onClick={() => navigate("/redux")} color="inherit">redux</Button>

            <Button onClick={() => navigate("/hooks")} color="inherit">Hooks Revision</Button>



            <Button onClick={() => setMode(mode === "light" ? "dark" : "light")} color="inherit"
              endIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}>
              {mode === "light" ? "dark" : "light"} Mode</Button>



            {/* <nav>
          <ul>
            Link change page without refresh
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">ProductList</Link></li>
            <li><Link to="/add-color">AddColor</Link></li>
          </ul>
        </nav> */}

          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productid" element={<ProductDetails />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:productid" element={<EditProduct />} />

          <Route path="/add-color" element={<AddColor />} />
          <Route path="/context" element={<ExampleContext />} />
          <Route path="/ref" element={<Reducer />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/class" element={<LifeCycleA />} />

          <Route path="/redux" element={<Redux />} />

          <Route path="/hooks" element={<Hooks />} />


          {/* redirect */}
          <Route path="/items" element={<Navigate replace to="/products" />} />

          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </div>
    </ThemeProvider>
  );

}



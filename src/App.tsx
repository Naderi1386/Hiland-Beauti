import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ShopRules from "./pages/ShopRules";
import Error from "./ui/Error";
import BlogSingle from "./pages/BlogSingle";
import Shop from "./pages/Shop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SingleProductPage from "./pages/SingleProductPage";
import FavoritesPage from "./pages/FavoritesPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:index", element: <BlogSingle /> },
      { path: "/contact-us", element: <Contact /> },
      { path: "/shop-rules", element: <ShopRules /> },
      { path: "/shop", element: <Shop /> },
      { path: "/product/:id", element: <SingleProductPage /> },
      { path: "/favorites", element: <FavoritesPage /> },
    ],
    errorElement: <Error />,
  },
]);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;

import { useSelector } from "react-redux";
import { DispatchType, getIsShowCart, StoreType } from "../../redux/Store";
import { AnimatePresence, motion } from "framer-motion";
import CartHeader from "./CartHeader";
import CartItemsList from "./CartItemsList";
import CartFooter from "./CartFooter";
import { useDispatch } from "react-redux";
import { setIsShow } from "../../redux/Cart";
import { useEffect } from "react";

const CartBox = () => {
  const isShowCart = useSelector<StoreType>(getIsShowCart) as boolean;
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (!isShowCart) return null;

  return (
    <div>
      <div
        onClick={() => dispatch(setIsShow(false))}
        className={`fixed inset-0 bg-black  opacity-60 z-[1000000] `}
      ></div>
      <AnimatePresence>
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.25, ease: "easeIn" },
            },
            exit: {
              opacity: 0,
              x: -100,
              transition: { duration: 0.25, ease: "easeIn" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="bg-white w-[17rem] sm:w-[22rem] fixed top-0 left-0 bottom-0 z-[10000000] flex flex-col"
        >
          <CartHeader />
          <CartItemsList />
          <CartFooter />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CartBox;

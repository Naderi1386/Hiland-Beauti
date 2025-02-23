import { useSelector } from "react-redux";
import { getIsShowCart, StoreType } from "../../redux/Store";
import { AnimatePresence, motion } from "framer-motion";
import CartHeader from "./CartHeader";

const CartBox = () => {
  const isShowCart = useSelector<StoreType>(getIsShowCart) as boolean;

  if (!isShowCart) return null;

  return (
    <div>
      <div className={`fixed inset-0 bg-black  opacity-60 z-[1000000] `}></div>
      <AnimatePresence>
        <motion.div className="bg-white w-[22rem] fixed top-0 left-0 bottom-0 z-[10000000]">
          <CartHeader />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CartBox;

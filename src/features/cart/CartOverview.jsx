import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getCartQuantity, getCartTotalPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getCartQuantity)
  const totalCartPrice = useSelector(getCartTotalPrice)
  if(!totalCartQuantity) return;
  return (
    <div className="flex justify-between bg-stone-800 p-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

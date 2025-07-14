import { useDispatch } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

// eslint-disable-next-line no-unused-vars
function UpdateItemQuantity({pizzaId, pizzaQuantity}) {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-1 items-center md:gap-3'>
      <Button onClick={()=>dispatch(decreaseItemQuantity(pizzaId))} type="round">-</Button>
      <span className='text-sm font-medium'>{pizzaQuantity}</span>
      <Button onClick={()=>dispatch(increaseItemQuantity(pizzaId))} type="round">+</Button>
    </div>
  )
}

export default UpdateItemQuantity

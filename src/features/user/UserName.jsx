import { useSelector } from 'react-redux';
import { getUsername } from './userSlice';

function UserName() {
  const userName = useSelector(getUsername)
  if(!userName) return null
  return <div className="hidden text-sm font-semibold md:block">{userName}</div>;
}

export default UserName;

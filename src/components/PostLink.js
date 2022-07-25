import { Link, useNavigate } from 'react-router-dom';
import PrawnPost from './PrawnPost';

export default function PostLink(props) {
  const navigate = useNavigate();
  //<Link to={props.data.permalink}>
  return (
    <div onClick={()=>navigate(props.data.permalink)} className="postLink">
      <PrawnPost id={props.id} data={props.data} />
    </div>
  )
}
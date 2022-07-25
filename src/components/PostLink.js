import { useNavigate } from 'react-router-dom';
import PrawnPost from './PrawnPost';

export default function PostLink(props) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(props.data.permalink)} className="postLink">
      <PrawnPost id={props.id} data={props.data} />
    </div>
  )
}
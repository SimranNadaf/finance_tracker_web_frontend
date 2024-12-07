import './card.css';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';


const Card = ({data, onDelete, onEdit, title}) => {
	
	return (
	<div className="Item">
	<div className='ItemRow'>
	<p>{data.title}</p>
	<p>Date: {data.date}</p>
	</div>
	<div className='ItemRow'>
	<p>Amount: {data.amount}</p>
	<div className='ItemRow'>
	<button className='actionButton' onClick={() => onEdit(data, title)}>
		<MdEdit size={20} color='green'></MdEdit>
	</button>
	<button className='actionButton' onClick={() => onDelete(data.id, title)}>
		<FaTrashAlt size={20} color='red'></FaTrashAlt>
	</button>

	</div>
	</div>
	</div>
	);
}

export default Card;
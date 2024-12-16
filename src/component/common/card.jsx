import './card.css';
import { FaTrashAlt } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';


const Card = ({data, onDelete, onEdit, title}) => {
	function formatDate(date){
		const [yyyy, mm, dd] = date.split('-');
		return `${dd}-${mm}-${yyyy}`;
	}

	return (
	<div className="Item">
	<div className='ItemRow'>
	<p>{data.title}</p>
	<p>Date: {formatDate(data.date)}</p>
	</div>
	<div className='ItemRow'>
	<p>Amount: {data.amount}</p>
	<div className='ItemRow'>
	<button className='actionButton' onClick={() => onEdit(data, title)}>
		<MdEdit size={20} color='green' className='icon'></MdEdit>
	</button>
	<button className='actionButton' onClick={() => onDelete(data.id, title)}>
		<FaTrashAlt size={16} color='red'></FaTrashAlt>
	</button>

	</div>
	</div>
	</div>
	);
}

export default Card;
import './addExpList.css';
import MainSector from './common/mainSector';

const AddExpList = () => {
	return (
		<>
	<div className="mainSector">
	<MainSector title="My Expense"/>
	<MainSector title="My Income"/>
	</div>
		</>
	);
}

export default AddExpList;
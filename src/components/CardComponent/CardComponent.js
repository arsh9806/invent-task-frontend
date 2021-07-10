
import { Card, Row } from 'react-bootstrap';
import './CardComponent.css';
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { saveTodoData } from './../../Redux/actionCreators/todoActions';
import { deleteTodo } from './../../apiCalls';



function CardComponent({ todoData, deleteTodoWithId }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(saveTodoData(todoData))
		history.push(`/todos/${todoData._id}`);
	}
	
	return (
		<div className="btn col-4 p-2">
			<Card border="primary" className="">

				<Card.Header className="d-flex justify-content-between align-items-center">

					<p className="mb-0">
						{todoData.todoName}
					</p>
				</Card.Header>
				<Card.Body>
					<Card.Text>
						{todoData.todoDescription}
					</Card.Text>

					<div className="ml-auto d-flex justify-content-between align-items-center mr-2">
						<i class="fas fa-trash-alt delete-todo text-danger" onClick={() => deleteTodoWithId(todoData._id)}></i>
						<p className="text-primary m-0">

							<i onClick={handleClick} className="fas fa-2x fa-arrow-circle-right"></i>

						</p>
					</div>
				</Card.Body>
			</Card>

		</div>

	)
}

export default CardComponent
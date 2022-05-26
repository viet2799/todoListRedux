import {useState} from "react";
import {Col, Row, Input, Button, Select, Tag} from 'antd';
import Todo from '../Todo';
import {useDispatch, useSelector} from "react-redux";
import {addTodo} from "../../redux/action";
import {v4 as uuidv4} from "uuid";
import {todoListSelector} from "../../redux/selectors";

export default function TodoList() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const todoList = useSelector(todoListSelector)
    const handleAddButtonClick = () => {
        //dispatch()
        dispatch(addTodo({
            id: uuidv4(),
            name: todoName,
            priority: priority,
            complete: false,
        }))
    }
    const handleInputChange = (e) => {
        console.log(e.target.value)
        setTodoName(e.target.value);
    }
    const handlePriorityChange = (value) => {
        console.log(value);
        setPriority(value);
    }
    return (
        <Row style={{height: 'calc(100% - 40px)'}}>
            <Col span={24} style={{height: 'calc(100% - 40px)', overflowY: 'auto'}}>
                {todoList.map((todo) => {
                    return (
                        <Todo key={todo.id} name={todo.name} prioriry={todo.priority}/>
                    )
                })}
            </Col>
            <Col span={24}>
                <Input.Group style={{display: 'flex'}} compact>
                    <Input value={todoName} onChange={handleInputChange}/>
                    <Select defaultValue="Medium" value={priority} onChange={(value) => {
                        handlePriorityChange(value)
                    }}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type='primary' onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}

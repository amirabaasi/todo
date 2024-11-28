import React, { useEffect, useState } from 'react'
//icons
import { Trash, Edit, Stop, Check } from '../../utils/Icons'
//tranlations-i18n
import { useTranslation } from 'react-i18next'
//rudux
import { editTodo, removeTodo } from '../../todoSlice';
import { useDispatch } from 'react-redux';
//components
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import EditModal from '../EditModal/EditModal';
import { getCurrentDate } from '../../utils/getDate';
export default function TodoItem({ todoObject }) {

    const { t } = useTranslation();
    const { title, todoScheduler, completedOn, isCompleted, id } = todoObject
    // فراخوانی ابتدایی از store
    const [todoCompletedOn, setTodoCompletedOn] = useState(completedOn)
    const [SchedulerDate, setSchedulerDate] = useState(todoScheduler)
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const dispatch = useDispatch()
    // const todoid = id


    useEffect(() => {
        // فراخوانی مجدد store  چون ممکنه مقداری ویرایش شده باشد 
        setTodoCompletedOn(todoObject.completedOn);

        setSchedulerDate(todoObject.todoScheduler)
    }, [todoObject.completedOn]);

    const toggleCompleteStatus = () => {
        const updatedCompletedOn = !isCompleted ? getCurrentDate() : '';
        dispatch(
            editTodo({ id, title, todoScheduler, completedOn: updatedCompletedOn, isCompleted: !isCompleted })
        );
    };


    const deleteTodoHandler = () => {
        dispatch(removeTodo({ id }))
        setShowModal(false)
    }

    return (
        <li className='my-2  border-b-2'>
            <div className='flex  justify-between mb-1 '>
                <div className='flex  justify-between  w-screen'>
                    <p className={completedOn ? 'line-through' : ''}>{title}</p>
                    <div className='flex'>
                        <span className='mx-1 hover:text-green-600 cursor-pointer '
                            onClick={toggleCompleteStatus}
                        >
                            {completedOn ? <Check /> : <Stop />}
                        </span>
                        <span className='mx-1 hover:text-orange-800 cursor-pointer'
                            onClick={() => {
                                setShowEditModal(true)
                                console.log('show modal')
                            }}
                        ><Edit /></span>
                        <span className='mx-1 hover:text-red-600 cursor-pointer'
                            onClick={() => { setShowModal(true) }}
                        ><Trash /></span>
                    </div>

                </div>
            </div>
            <div className='text-xs font-medium flex text-blue-800'>
                <p className='mx-1' >{t('added')}: <span className='font-thin text-black'>{SchedulerDate}</span></p>
                <p className='mx-1'>{t('completed-day')} :
                    <span className='font-thin text-black'>{todoCompletedOn}</span>

                </p>

            </div>

            {/* نمایش مودال */}
            {showModal && <ConfirmModal onConfirm={deleteTodoHandler} onCancel={() => setShowModal(false)} />}
            {showEditModal && <EditModal todoObject={todoObject} onCancel={() => setShowEditModal(false)} />}

        </li>
    )
}

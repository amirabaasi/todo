import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
//redux
import { editTodo } from '../../todoSlice'
import { useDispatch } from 'react-redux'
export default function EditModal({ todoObject, onCancel }) {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const { id, title, todoScheduler, completedOn, isCompleted } = todoObject
    const [todoTitle, setTodoTitle] = useState(title)
    const [todoCompletedOn, setTodoCompletedOn] = useState(completedOn)
    const [SchedulerDate, setSchedulerDate] = useState(todoScheduler)


    const saveEditTodo = () => {
        dispatch(
            editTodo({ id, title: todoTitle, todoScheduler: SchedulerDate, completedOn: todoCompletedOn, isCompleted })
        )

        onCancel()
    }


    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
            onClick={onCancel}>
            <div className='bg-white rounded-md p-3'
                onClick={(e) => (e.stopPropagation())}>
                <p className='text-lg'>{t("edit-header")}</p>

                <div className='flex flex-col justify-start  '>

                    {/* todo-Title */}
                    <div className='flex justify-start items-center'>

                        <label htmlFor="">{t("todo-title")}:</label>

                        <input className='ring-1 ring-orange-400 m-3 rounded-sm w-80'
                            type="text"
                            value={todoTitle}
                            onChange={(e) => setTodoTitle(e.target.value)}
                        />
                    </div>
                    {/* todo-CompletedOn */}

                    <div className='flex justify-start items-center '>
                        <label htmlFor="">{t("completed-day")}:</label>
                        <input className='ring-1 ring-orange-400 m-3 rounded-sm w-40'
                            type="date"
                            value={todoCompletedOn}
                            onChange={(e) => { setTodoCompletedOn(e.target.value) }}
                        />
                    </div>
                    <div className='flex justify-start items-center '>
                        <label htmlFor="">{t("added")}:</label>
                        <input className='ring-1 ring-orange-400 m-3 rounded-sm w-40'
                            type="date"
                            value={SchedulerDate}
                            onChange={(e) => { setSchedulerDate(e.target.value) }}
                        />
                    </div>
                </div>

                <div className='flex  justify-center mt-4 '>
                    <button className=' w-14 h-8 bg-orange-400 hover:bg-white hover:border-orange-400  hover:border-2 rounded-md m-2'
                        onClick={saveEditTodo}
                    >{t("save")}</button>
                    <button className=' w-14 h-8 bg-orange-400 hover:bg-white hover:border-orange-400  hover:border-2 rounded-md m-2'
                        onClick={onCancel}
                    >{t("close")}</button>

                </div>


            </div>
        </div>
    )
}

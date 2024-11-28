import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem';
//translations-i18n
import { useTranslation } from 'react-i18next'
//rdux
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../todoSlice';
// utils
import { getCurrentDate } from '../../utils/getDate';
import { Plus, Filter, FilterFill } from '../../utils/Icons'
import FilterMenu from '../FilterMenu/FilterMenu';


export default function TodoList() {

    const { t, i18n } = useTranslation();
    const todos = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()

    const [todoTitle, setTodoTitle] = useState('')
    const [todoScheduler, setTodoScheduler] = useState('')
    const [filterOption, setFilterOption] = useState('all')
    const [showFilterMenu, setShowFilterMenu] = useState(false)
    const filterTodos = todos.filter(todo => {
        if (filterOption === 'all') return true;
        if (filterOption === 'completed') return todo.isCompleted
        if (filterOption === 'notCompleted') return !todo.isCompleted
    }

    )

    const addTodoHandler = () => {
        if (!todoTitle.trim()) return  // جلوگیری از افزودن عنوان خالی
        dispatch(
            addTodo({
                id: todos.length + 1,
                title: todoTitle,
                todoScheduler: todoScheduler ? todoScheduler : getCurrentDate(),

                completedOn: '',
                isCompleted: false

            }),
            setTodoTitle(''),
            setTodoScheduler('')
        )
    }

    const isRTL = i18n.language === 'fa'; // چک کردن زبان فعلی
    const inputClasses = isRTL
        ? ' rounded-r-3xl' // جهت RTL
        : ' rounded-l-3xl'; // جهت LTR

    const dateInputClasses = isRTL
        ? 'rounded-l-3xl ' // جهت RTL
        : 'rounded-r-3xl '; // جهت LTR


    return (
        <div className='  flex flex-col pt-10   bg-orange-50   '>
            {/* add todo  */}
            <div className='flex justify-center  w-full'>
                {/* title */}
                <input
                    className={`w-4/5 md:w-1/5 h-10 ps-3 border-2 ${inputClasses} border-orange-600`}
                    type="text"
                    placeholder={t('add_place-holder')}
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                />
                {/* Date */}
                <input
                    className={`w-4/5 md:w-1/12 h-10 ps-3 border-2 ${dateInputClasses}  border-orange-600 `}
                    type="Date"
                    value={todoScheduler}
                    onChange={(e) => setTodoScheduler(e.target.value)}
                />
                <div className='flex justify-evenly pt-1 rounded-full border-none w-10 h-10 mx-3 bg-orange-700 border-2 hover:bg-orange-600  text-white cursor-pointer'
                    onClick={addTodoHandler}
                >
                    <Plus />
                </div>

            </div>


            {/* todo item */}
            <div className='  flex flex-col justify-center  items-center pt-16 '>
                {/* filtering */}
                <div className='w-11/12 md:w-2/4 '>
                    <div onClick={() => setShowFilterMenu(!showFilterMenu)}>
                        {filterOption === 'all' ? < Filter /> : <FilterFill />}

                    </div>
                    {showFilterMenu && <FilterMenu
                        onFilterSelect={(filter) => setFilterOption(filter)}
                        onClose={() => setShowFilterMenu(false)}
                    />}
                </div>

                <ul className='  w-11/12 md:w-2/4 list-disc '>
                    {filterTodos.map(todo => (
                        <TodoItem key={todo.id}
                            // ارسال تمامی ویژگی های شی todo
                            todoObject={todo} />

                    ))}



                </ul>
            </div>



        </div >
    )
}
















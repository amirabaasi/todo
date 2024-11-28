import React from 'react'
import { useTranslation } from 'react-i18next'
//redux
import { editTodo } from '../../todoSlice'

export default function ConfirmModal({ onConfirm, onCancel }) {
    const { t } = useTranslation()


    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'
            onClick={onCancel}

        >

            <div className='bg-white text-black rounded-md  w-full md:w-1/3  p-5  '
                onClick={(e) => (e.stopPropagation())}>
                <p className='text-center'>{t("detet-qa")}</p>
                <div className='flex justify-center '>
                    <button className=' w-10 h-8 bg-orange-400 hover:bg-white hover:border-orange-400  hover:border-2 rounded-md m-2'
                        onClick={onConfirm}>{t("yes")}</button>
                    <button className=' w-10 h-8 bg-orange-400 hover:bg-white hover:border-orange-400  hover:border-2 rounded-md m-2'
                        onClick={onCancel}>{t("no")}</button>
                </div>

            </div>
        </div>
    )
}

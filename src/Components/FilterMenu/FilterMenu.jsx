import React from 'react'
//translations 
import { useTranslation } from 'react-i18next'

export default function FilterMenu({ onFilterSelect, onClose }) {
    const { t } = useTranslation()
    return (
        <div className='absolute bg-white border p-2 mt-2 rounded-lg shadow-lg'>
            <ul>
                <li className='cursor-pointer p-2 hover:bg-gray-200'
                    onClick={() => { onFilterSelect('all'); onClose() }

                    }
                >{t("all")}</li>
                <li className='cursor-pointer p-2 hover:bg-gray-200'
                    onClick={() => { onFilterSelect('completed'); onClose() }}
                >{t("completed")}</li>
                <li className='cursor-pointer p-2 hover:bg-gray-200'
                    onClick={() => { onFilterSelect('notCompleted'); onClose() }}
                >{t("not-completed")}</li>

            </ul>
        </div>
    )
}

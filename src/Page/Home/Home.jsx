import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TodoList from '../../Components/TodoList/TodoList'
import EditModal from '../../Components/EditModal/EditModal'
import Layout from '../../Layout/Layout'

export default function Home() {
    return (
        <>
            <Layout>
                <TodoList />
            </Layout>

        </>

    )
}

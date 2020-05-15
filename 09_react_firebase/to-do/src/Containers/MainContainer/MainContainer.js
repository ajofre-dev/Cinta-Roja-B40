import React from 'react'
import AppNav from '../../Components/AppNav/AppNav'
import TasksCard from '../../Components/TasksCards/TasksCard'

const MainContainer = () => {
    return (
        <div>
            <AppNav />
            <div className="container">
                <TasksCard />

            </div>
            
        </div>
    )
}

export default MainContainer

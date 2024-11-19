import React from 'react'
import { Link } from 'react-router-dom'
import TaskForm from './TaskForm'

export default function Create() {
  return (
    <div className='m-5'>
        <Link className='btn btn-dark m-2' to="/"> {"< retourner"}</Link>
      <TaskForm mainBtnTxt="Ajouter" title="Ajouter Une Tâche" show={true}/>
    </div>
  )
}

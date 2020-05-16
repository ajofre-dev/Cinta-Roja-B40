import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewTask = () => {
    //const PROJECT = '';
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [time, setTime] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');


    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const handlePriority = (e) => {
        setPriority(e.target.value);

    }

    const handleTime = (e) => {
        setTime(e.target.value);

    }

    const createTask = () => {
        setLoading(true)
        if (priority > 1 
            && priority <= 3 
            && time > 1 
            && time <= 5 
            && title.length > 0 
            && title.length <= 30) {
                const body = {
                    title: title,
                    done: false,
                    time: time,
                    priority: priority
            }
        axios.post(`https://ajtodocrud.firebaseio.com/task.json`, body)
        .then(() => history.push('/'))
        .catch(() => {
            setLoading(false);
        })
    } else { 
        setError('Verifica que ingresaste información valida')
    }
    };

    return (
        <div className="card">
            <div className="container">
                <h1>Crea una nueva tarea</h1>
                <div className="form-group">
                    <label htmlFor="">Ingresa el título de la tarea</label>
                    <input onChange={handleTitle} placeholder="No debe ser mayor a 30 caracteres" value={title} className="form-control" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="">¿Cuál es la prioridad?</label>
                    <input onChange={handlePriority} placeholder="Debe ser un valor entre 1 y 3" value={priority} className="form-control" type="number" max="3" min="1" />
                </div>
                <div className="form-group">
                    <label htmlFor="">¿Cuánto tiempo tardarás?</label>
                    <input onChange={handleTime} placeholder="Debe ser entre 1 y 5" value={time} className="form-control" type="number" min="0" />
                </div>
                <div className="text-danger">
                    {error}
                </div>
                <button onClick={() => createTask()} type="submit" className="btn btn-primary">Crear tarea</button>
            </div>
        </div>
    )
}
export default NewTask
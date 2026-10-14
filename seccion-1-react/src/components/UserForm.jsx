// UserForm.js
import React, { useState } from 'react';

const UserForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submittedData, setSubmittedData] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === '' || email.trim() === '') {
            setError('Por favor llena todos los campos');
            return
        }
        setError('')
        setSubmittedData({name, email})
        setName('')
        setEmail('')
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                {error && <p style={{color: 'red'}}>{error}</p>}
                <button type="submit">Enviar</button>
            </form>
            {submittedData && (
                <div>
                    <h3>Datos Ingresados:</h3>
                    <p>Nombre: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                </div>
            )}
        </div>
    );
};

export default UserForm;

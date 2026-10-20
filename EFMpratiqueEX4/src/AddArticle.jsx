import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from '../actions/articleActions';

const AddArticle=()=>{
    const [id,setId]=useState('');
    const [designation,setDesignation]=useState('');
    const [famille,setFamille]=useState('');
    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(addArticle({id:Number(id),designation,famille}));
        setId('');
        setDesignation('');
        setFamille('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Ajouter un aricle</h3>
            <input type="number" placeholder="ID" value={id} onChange={(e)=>setId(e.target.value)} required />
            <input type="text" placeholder="Designation" value={designation} onChange={(e)=>setDesignation(e.target.value)} required />
            <input type="text" placeholder="Famille" value={famille} onChange={(e)=>setFamille(e.target.value)} required />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddArticle;
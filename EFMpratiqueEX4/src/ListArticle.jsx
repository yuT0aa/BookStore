import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteArticle } from '../actions/articleActions';

const ListArticle=()=>{
    const articles=useSelector((state)=>state.articles);
    const dispatch=useDispatch();

    return(
        <div>
            <h3>Liste des Articles</h3>
            <ul>
                {articles.map((art)=>(
                    <li key={art.id}>
                        ID:{art.id}|Designation:{art.designation}|Famille:{art.famille}
                        <button onClick={()=>dispatch(deleteArticle(art.id))}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListArticle;
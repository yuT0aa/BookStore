import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CalcIMC(){
    const [poids,setPoids]=useState('');
    const [taille,setTaille]=useState('');
    const [resultat,setResultat]=useState(null);

    const calculerIMC=(e)=>{
        e.preventDefault();
        const p=parseFloat(poids);
        const t=parseFloat(taille);

        if (p>0 && t>0){
            const imcValeur=(p*10000)/(t*t);
            let statut='';
            let couleur='';

            if (imcValeur<19){
                statut='Sous-poids';
                couleur='red';
            }else if (imcValeur>=19 && imcValeur<=25){
                statut='Normal';
                couleur='green';
            }else{
                statut='Surpoids';
                couleur='orange';
            }

            setResultat({
                valeur:imcValeur.toFixed(2),
                statut,couleur
            });
        }
    };

    return(
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="mb-4 text-center">Body mass index</h2>

                <form onSubmit={calculerIMC}>
                    <div className="mb-3">
                        <label className="form-label">Poids en KG</label>
                        <input 
                          type="number"
                          className="form-control"
                          value={poids}
                          onChange={(e)=>setPoids(e.target.value)}
                          required 
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Taille en cm</label>
                        <input 
                          type="number"
                          className="form-control"
                          value={taille}
                          onChange={(e)=>setTaille(e.target.value)}
                          required 
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100">
                        calculer
                    </button>
                </form>

                {resultat &&(
                    <div className="mt-4 p-3 bg-light rounded text-center">
                        <h5 className="mb-0">
                            MBI:{resultat.valeur}{' '}
                            <span className={`fw-bold ${resultat.classeCouleur}`}>
                                {resultat.statut}
                            </span>
                        </h5>
                    </div>
                )}
           </div>
        </div>
    );
}

export default CalcIMC;
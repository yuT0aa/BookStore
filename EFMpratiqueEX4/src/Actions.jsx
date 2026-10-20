export const addArticle=(article)=>({
    type:'ADD_ARTICLE',
    payload:article
});

export const deleteArticle=(id)=>({
    type:'DELETE_ARTICLE',
    payload:{id}
});
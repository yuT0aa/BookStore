const initialState={
    articles: [
      { id: 10, designation: 'article1', famille: 'informatique' },
      { id: 11, designation: 'article2', famille: 'bureau' }
    ]
};

const articleReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_ARTICLE':
            return{
                ...state,
                articles:[...state.articles,action.payload]
            };

        case 'DELETE_ARTICLE':
            return{
                ...state,
                articles:[state.articles.filter(article=>article.id!==action.payload.id)]
            };
        
        default:
            return state;
    }
};

export default articleReducer;
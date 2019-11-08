import * as actionTypes from './actionTypes';   //tipleri çektik

//Bu action a gelen tip bu ise payload: category yap .Burada payload datadır.
export function changeCategory(category){
        //console.log(category);
        return {type:actionTypes.CHANGE_CATEGORY, payload:category} 
}

export function getCategoriesSuccess(categories) {
        return {type:actionTypes.GET_CATEGORIES_SUCCESS, payload:categories}
}
export function getCategories() {
        return function (dispatch) {
               // debugger;
                let url = "https://jsonplaceholder.typicode.com/photos";
                return fetch(url)
                .then(response => response.json())
                .then(result => {
                        var res = result.slice(0,5); //sadece ilk 3 değeri getir.
                        dispatch(getCategoriesSuccess(res))
                });
                
        }
}


// Pizza API Call from Here (AJAX)
export const API_CLIENT = {
    getProduct(URL){
        const promise = fetch(URL);
        return promise;
    }
}





export function ajax(singerName="Sonu Nigam", callBackFn){
    const URL = `https://itunes.apple.com/search?term=${singerName}&limit=10`;
    const xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            console.log('Type of Response ', typeof this.responseText);
            callBackFn(this.responseText);
        }
    }
    xmlHttpRequest.open('GET', URL);
    xmlHttpRequest.send();
}
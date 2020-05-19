const getCookie = ( name ) =>{
    console.log('in getCookie:', name);
    
}//end get

const setCookie = ( name, value ) =>{
    console.log( 'in setCookie:', name, value);
    document.cookie=`${name}=${value}`;
}//end set

export {
    getCookie, setCookie
}
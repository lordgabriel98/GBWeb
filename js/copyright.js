const getYear=()=>{
    const currentYear = new Date().getFullYear();

    let copyright = document.getElementsByClassName("copyright")[0];

    copyright.innerHTML=`© ${currentYear} Gabriel Baje`;
}

getYear();
export function isActiveLink(pathname, href) {
    return pathname === href;
}
    
    
    
// export function isActiveLink(pathname, href) {
//         if(pathname !== "/" && href !== "/") {
//             if (pathname.indexOf(href.slice(1)) != -1) {
//                 return true;
//             }
//         }else if(pathname === "/" && href === "/"){
//             return true;
//         }
//         return false;
//     }
//     return false;
// }



export function getFormattedDate(date, locale="de-DE") {
    const options = {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit"
    }
    const d = date.toLocaleString(locale, options);
    return d;
}


export function getlangFromUrl(url) {
    const path = url.pathname;
    return path.split("/")[1];
}
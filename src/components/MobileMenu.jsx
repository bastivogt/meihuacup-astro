import { useEffect, useRef, useState } from "react";




export default function MobileMenu({children}) {
    const [overlayVisible, setOverlayVisible] = useState(false);
    let overlayRef = useRef(null);


    useEffect(() => {
        if(overlayVisible) {
            setOverlayVisible(true);
            //overlayRef.current.classList.add("fade-in");
            overlayRef.current.classList.remove("fade-out");
            overlayRef.current.classList.add("fade-in");
            console.log(overlayRef.current);
            document.body.style.overflowY = "hidden";
        }else {

            document.body.style.overflowY = "auto";

        }
    }, [overlayVisible]);




    function triggerHandler(e) {
        e.preventDefault();
        if(!overlayVisible) {
            setOverlayVisible(true);
        }else {
            overlayRef.current.classList.remove("fade-in");
            overlayRef.current.classList.add("fade-out");
            setTimeout(() => {
                setOverlayVisible(false);
            }, 150);
        }
        //setOverlayVisible((currentValue) => !currentValue);
        console.log("mobile trigger clicked");
    }
    return (
        
        <div className="MobileMenu">
            {overlayVisible && (
                <div ref={overlayRef} className="MobileMenuOverlay absolute left-0 top-0 bottom-0 right-0 bg-black opacity-95 z-50">
                    <div className="w-full h-full flex justify-center items-center">
                        {children}
                    </div>
                    <div onClick={triggerHandler} className="absolute text-white top-2 right-2 cursor-pointer">
                        <svg className="transition-all ease-linear duration-200 fill-grey-lighter hover:fill-purple-2" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#ffffff"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
                    </div>

                    
                </div>
            )}
            <button onClick={triggerHandler}>
                <svg className="transition-all ease-linear duration-200 fill-grey-lighter hover:fill-white" xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#ffffff"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
            </button>  
        </div>
    );
}

const style = {
    backgroundColor: "red"
}
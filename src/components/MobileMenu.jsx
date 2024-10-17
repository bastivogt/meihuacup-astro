import { useEffect, useRef, useState } from "react";


export default function MobileMenu({triggerContent,children}) {
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
                    <div onClick={triggerHandler} className="absolute text-white top-2 right-2">Close</div>

                    
                </div>
            )}
            <button onClick={triggerHandler}>
                {triggerContent}
            </button>  
        </div>
    );
}

const style = {
    backgroundColor: "red"
}
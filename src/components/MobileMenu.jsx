import { useEffect, useState } from "react";


export default function MobileMenu({triggerContent,children}) {
    const [overlayVisible, setOverlayVisible] = useState(false);

    useEffect(() => {
        console.log("overlayVisible:", overlayVisible);
        if(overlayVisible) {
            document.body.style.overflowY = "hidden";
        }else {
            document.body.style.overflowY = "auto";
        }
    }, [overlayVisible]);


    function triggerHandler(e) {
        setOverlayVisible((currentValue) => {
            return !currentValue;
        });
        console.log("mobile trigger clicked");
    }
    return (
        
        <div className="MobileMenu">
            {overlayVisible && (
                <div className="MobileMenuOverlay absolute left-0 top-0 bottom-0 right-0 bg-black opacity-95 z-50">
                    <div class="w-full h-full flex justify-center items-center">
                        {children}
                    </div>
                    <div onClick={triggerHandler} class="absolute text-white top-2 right-2">Close</div>

                    
                </div>
            )}
            <button onClick={triggerHandler}>
                {triggerContent}
            </button>  
        </div>
    );
}
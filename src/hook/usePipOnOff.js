import { useState, useEffect } from "react";

function usePipOnOff(){
    const [isPipMod, setIsPipMod] = useState(null);

    useEffect(()=>{
       function handleStatusChange(status){
           setIsPipMod(status.isPipMod);
       }


    });
}
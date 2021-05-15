import React from "react";

export const useRate = (rate,addRating,newRate) =>{
    const rateStatus = new Array()

    for(let i = 0 ;i < 5;i++){
        if(i < rate && !addRating || i < newRate){
            rateStatus[i] = 'rateActive'
        }else if(addRating && !rate){
            rateStatus[i] = 'addRating'

        }else {
            rateStatus[i] = 'rateDisabled'
        }
    }

    return rateStatus
}
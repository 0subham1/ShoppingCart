import Prodlist from "./Prodlist"
import { useState, useEffect } from "react"

const Produ = () => {

    const [pro , setPro]=useState([])

    useEffect(()=>{
        console.log("mounted")
        fetch ("/api/pro")
        .then(response =>response.json())
        .then(pro=>{
            setPro(pro)
        })
    },[])
    
    return (
        <>
            

            <div className="container mx-auto pb-24">
                <h1 className='font-bold'>Kid Section</h1>
                <div className="grid grid-cols-4 gap-24 my-7 mx-7">
                   <Prodlist/>
                    {

                       pro.map(abc=> <Prodlist key={abc._id} abc={abc}/>) 
                    }
                   

                </div>
            </div>
        </>
    )
}

export default Produ
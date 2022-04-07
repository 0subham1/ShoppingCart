
const Prodlist = (props) => {
    // props.prodprop
    console.log(props)
    const abc= props
    return (
        <>
            <div> 
                <img src="./img/doremon.jpg" />
                <div className="text-center mt-2 ">
                    <h2>Doremon figures</h2>
                    <span>Lego</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$4</span>
                    <button className="rounded-full py-1 px-3 font-bold bg-green-500">ADD</button>
                </div>
            </div>



            <div>
                <img src="./img/bike.jpg" />
                <div className="text-center mt-2 ">
                    <h2>Rc bike</h2>
                    <span>D.C</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$3</span>
                    <button className="rounded-full py-1 px-3 font-bold bg-green-500">ADD</button>
                </div>
            </div>

            <div>
                <img src="./img/terminator.jpg" />
                <div className="text-center mt-2 ">
                    <h2>Action figures</h2>
                    <span>Funskool</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$5</span>
                    <button className="rounded-full py-1 px-3 font-bold bg-green-500">ADD</button>
                </div>
            </div>


            <div>
                <img src="./img/blockgame.webp" />
                <div className="text-center mt-2 ">
                    <h2>Blockgame</h2>
                    <span>Lego</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>$9</span>
                    <button className="rounded-full py-1 px-3 font-bold bg-green-500">ADD</button>
                </div>
            </div>



        </>
    )
}

export default Prodlist
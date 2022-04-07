import Produ from "../component/Produ"

const home = () => {
    return (
        <>
            <div className='hero py-16'>
                <div className="container mx-auto flex items-center justify-between">
                    <div className='w-1/2'>
                        
                        <h1 className='font-bold'>Flat 20% OFF</h1>
                        <button className='px-5 py-2 mt-2 font-bold bg-yellow-600 hover:bg-yellow-500 rounded-full'>order now</button>
                    </div>
                    <div className='w-1/2'>
                        <img src="img/angrybird.jpg" />
                    </div>
                </div>
            </div>

            <div className='pb-10'>
            <Produ />
            </div>
        </>
    )
}

export default home
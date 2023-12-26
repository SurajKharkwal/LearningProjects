export default function Loading () {
    return (
        <div className=" w-[100vw] h-[100vh] flex justify-center items-center ">
            <div className="w-[70vw] relative h-[70vw] animate-[pinBall_2.5s_ease-in] rounded-full flex justify-center items-center flex-col ">
                <div className="absolute animate-[hide_3s_ease-out] w-[100vw] ">
                    <div className="w-full  flex flex-col justify-center items-center" >
                        <div className="w-[70%]"><img className=" pause animate-[slide_5.1s_ease-out] animation-delay-1000 " src="./images/cart.png" width={300} alt="cart" /></div>
                        <div className="sliding flex justify-start items-center tab w-[70%]">
                            <div className="pause"><img src="./images/play.png" className="animate-pulse pause" width={40} alt="" /></div>
                            <div className="slider shadow-lg bg-gradient-to-r from-violet-500 shade via-violet-200 to-blue-300 animate-[slider_5s_ease-out] delay-1000 h-4 "></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
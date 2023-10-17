import OneCard from "../../Components/OneCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const DynamicCompany = () => {



    const myarr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )


    return (
        <div className="">
            <div className=" max-w-7xl mx-auto grid grid-cols-5 items-center py-16">
                <div className=" col-span-2">
                    <img src='https://i.ibb.co/mFBvp1f/image.png' alt="" />
                </div>
                <div className=" col-span-3">
                    <h1 className=" text-red-500 text-3xl font-bold">Jaguar XXL</h1>
                    <h1 className=" font-semibold text-lg my-2">Since 1999</h1>
                    <p className="dark:text-gray-300 text-black italic">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, ducimus! Non assumenda totam veritatis reiciendis inventore adipisci neque earum perspiciatis exercitationem aperiam, minus excepturi numquam tempora, quas possimus illum quae?
                    </p>
                </div>
            </div>

            <div className=" max-w-7xl mx-auto rounded-xl overflow-hidden">
                <div ref={sliderRef} className="keen-slider h-[500px]">
                    <div style={{ backgroundImage: `url(https://i.ibb.co/f0YCWVM/wallpaperflare-com-wallpaper-8.jpg)` }} className="keen-slider__slide bgx number-slide1 h-full  bgx">
                        <div className="relative w-full h-full bgc flex justify-center flex-col items-center">
                            <div className="p-4 top-0 left-0 rounded-xl absolute bg-orange-600 text-black flex justify-center flex-col items-center text-xl">
                            <h1 className=" text-5xl text-white font-bold my-2">45%</h1>
                            <h1>!! Discount for TODAY !!</h1>
                            </div>
                            <h1 className="text-8xl text-white font-bold">BMB</h1>
                            <h1 className="text-md text-white">Bangladesh Motors Business</h1>
                            <h1 className="text-4xl mt-10 text-white">Jaguar 3rd Edition</h1>
                            
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(https://i.ibb.co/VCnJS1v/wallpaperflare-com-wallpaper-6.jpg)` }} className="keen-slider__slide bgx number-slide1 h-full  bgx">
                        <div className="relative w-full h-full bgc flex justify-center flex-col items-center">
                            <div className="p-4 top-0 left-0 rounded-xl absolute bg-orange-600 text-black flex justify-center flex-col items-center text-xl">
                            <h1 className=" text-5xl text-white font-bold my-2">45%</h1>
                            <h1>!! Discount for TODAY !!</h1>
                            </div>
                            <h1 className="text-8xl text-white font-bold">BMB</h1>
                            <h1 className="text-md text-white">Bangladesh Motors Business</h1>
                            <h1 className="text-4xl mt-10 text-white">Jaguar 3rd Edition</h1>
                            
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(https://i.ibb.co/nDvvDT4/wallpaperflare-com-wallpaper-7.jpg)` }} className="keen-slider__slide bgx number-slide1 h-full  bgx">
                        <div className="relative w-full h-full bgc flex justify-center flex-col items-center">
                            <div className="p-4 top-0 left-0 rounded-xl absolute bg-orange-600 text-black flex justify-center flex-col items-center text-xl">
                            <h1 className=" text-5xl text-white font-bold my-2">45%</h1>
                            <h1>!! Discount for TODAY !!</h1>
                            </div>
                            <h1 className="text-8xl text-white font-bold">BMB</h1>
                            <h1 className="text-md text-white">Bangladesh Motors Business</h1>
                            <h1 className="text-4xl mt-10 text-white">Jaguar 3rd Edition</h1>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className=" max-w-7xl mx-auto py-10">
                <h1 className="text-5xl font-bold text-center">Company Products</h1>
                <div className="grid grid-cols-3 gap-5 mt-20">
                    {
                        myarr.map((one) => <OneCard key={one.id} data={one} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default DynamicCompany
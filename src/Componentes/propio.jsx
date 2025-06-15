export function Propio() {
    return (
        <div className="items-center justify-center text-center p-10 bg-gray-200">
            <h1 className="text-4xl font-bold text-gray-800 mb-5">Actores Reconocidos</h1>
            <p className="text-xl text-gray-600">Estos actores fueron reconocidos en las ultimas series y peliculas estrenasdas este año!</p>
        <div  className="flex flex-wrap justify-center items-center  gap-10 p-20">
            <div className="flex flex-col items-center justify-center w-96 h-75 gap-5 pt-10 bg-gray-100 rounded-3xl border-2 border-gray-300">
                <div className="Imagen" >
                    <img className="rounded-[60%] w-70 h-45 object-wrap " src="https://asianwiki.com/images/a/a4/Kim_Tae-Hee-1980-p1.jpeg" />
                </div>
                <div className="Texto text-center w-full border-2 border-gray-300 p-4">
                    <h1 className="text-gray-600 ">Kim Tae-Hee</h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-75 gap-5 pt-10 bg-gray-100 rounded-3xl border-2 border-gray-300">
                <div className="Imagen" >
                    <img className="rounded-[60%] w-70 h-45 object-wrap " src="https://news.vocofm.com/wp-content/uploads/2025/03/Snapinst.app_338599460_542295074685924_7902137402516476428_n_1080-1024x711.jpg" />
                </div>
                <div className="Texto text-center w-full border-2 border-gray-300 p-4">
                    <h1 className="text-gray-600 ">Park Bo-gum</h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-96 h-75 gap-5 pt-10 bg-gray-100 rounded-3xl border-2 border-gray-300">
                <div className="Imagen" >
                    <img className="rounded-[60%] w-70 h-45 object-wrap " src="https://6.soompi.io/wp-content/uploads/image/20250430215017_Park-Jin-Hoon.jpg?s=900x600&e=t" />
                </div>
                <div className="Texto text-center w-full border-2 border-gray-300 p-4">
                    <h1 className="text-gray-600 ">Park Ji Hoon</h1>
                </div>
            </div>
        </div>
        </div>
    )
}
export function Peliculas() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1>Peliculas</h1>
            <p>Esta es la pagina de peliculas</p>
            <div className="flex flex-col items-center justify-center space-y-4">
                <button className="btn w-80" onClick={() => document.getElementById('my_modal_1').showModal()}>DESTINO FINAL</button>
                <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-justify bg-gray-900">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-bold text-lg pb-5">DESTINO FINAL</h3>
                            <img className="w-2xs rounded-2xl" src="\src\assets\destinofinal.jpg" alt="" />


                        </div>
                        <ul>f
                            <li><br />Descripcion:</li>
                            <p><br />"Destino Final: Lazos de Sangre" es la sexta entrega de la franquicia "Destino Final", que sigue a Stefanie Reyes, una estudiante universitaria atormentada por pesadillas recurrentes.</p>                            <li><br />Resumen:</li>
                            <p><br />Stefanie Reyes, una joven con sueños premonitorios sobre un accidente en un restaurante panorámico, descubre que estas visiones están conectadas a su abuela, Iris, quien evitó una tragedia en 1968. Al regresar a casa, Stefanie se da cuenta de que la muerte está persiguiendo a su familia, y que cada accidente es una venganza de la muerte por haber alterado sus planes. Con la ayuda de un misterioso personaje, J.B., y enfrentándose a la muerte en cada esquina, Stefanie debe encontrar una manera de romper este ciclo mortal y salvar a su familia. </p>                        </ul>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <button className="btn w-80" onClick={() => document.getElementById('my_modal_2').showModal()}>UP</button>
                <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle ">
                    <div className="modal-box text-justify bg-gray-900">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-bold text-lg pb-5">UP!</h3>
                            <img className="w-2xs rounded-2xl" src="\src\assets\Up.webp" alt="" />


                        </div>                        <ul>
                            <li><br />Descripcion:</li>
                            <p><br />"Up" es una película animada de Pixar que cuenta la historia de Carl Fredricksen, un viudo de 78 años, que decide cumplir el sueño de su vida de viajar a Sudamérica atando miles de globos a su casa. Acompañado por un joven explorador llamado Russell, Carl enfrenta diversas aventuras y desafíos en el camino, aprendiendo valiosas lecciones sobre la vida, la pérdida y la amista</p>                            <li><br />Resumen:</li>
                            <p><br />La película comienza con la historia de amor entre Carl y Ellie, desde su infancia hasta la vejez, mostrando cómo comparten el sueño de visitar las Cataratas del Paraíso en Sudamérica. Después de la muerte de Ellie, Carl, ahora un anciano solitario, decide llevar a cabo su sueño, pero se encuentra con Russell, un niño explorador que se une a la aventura sin ser invitado.
                                Juntos, la casa de Carl y Russell sobrevuelan Sudamérica y llegan a las Cataratas del Paraíso. Allí, se encuentran con criaturas exóticas, como un ave grande a la que Russell llama Kevin, y un perro llamado Dug, que puede hablar gracias a un collar especial. También se enfrentan al villano, Charles Muntz, un explorador que Carl admiraba de niño, pero que ahora se ha vuelto obsesionado con capturar a Kevin.
                                A lo largo de la aventura, Carl y Russell aprenden a valorar la amistad, a superar el dolor y a encontrar la felicidad en nuevas experiencias. La película explora temas como la vejez, la pérdida, la amistad y la importancia de vivir el presente.
                                En resumen, "Up" es una película conmovedora sobre un anciano que encuentra la aventura y la amistad en la vejez, cumpliendo un sueño y aprendiendo valiosas lecciones en el camino. </p>                        </ul>                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <button className="btn w-80" onClick={() => document.getElementById('my_modal_3').showModal()}>ERA DEL HIELO</button>
                <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gray-900 text-justify">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-bold text-lg pb-5">La Era De Hielo</h3>
                            <img className="w-2xs rounded-2xl" src="\src\assets\hielo.jpeg" alt="" />


                        </div>                        <ul>
                            <li><br />Descripcion:</li>
                            <p><br />La película "La Era de Hielo" narra la historia de tres animales prehistóricos que se unen para devolver un bebé humano a su familia, ambientada en un mundo cubierto de hielo hace 20.000 años. El protagonista, Manny, un mamut, se encuentra con Sid, un perezoso hablador, y juntos rescatan al bebé de un ataque de tigres dientes de sable. Diego, uno de los tigres, se une a ellos con una agenda oculta, pero con el tiempo desarrolla un vínculo con el grupo y termina ayudándolos a proteger al bebé</p>                            <li><br />Resumen:</li>
                            <p><br />La historia comienza con la migración masiva de animales hacia el sur para escapar del frío de la glaciación. Manny y Sid, dos animales que no encajan con la multitud, se encuentran con un bebé humano abandonado y deciden devolverlo a su familia. Diego, un tigre dientes de sable, se une a ellos con el propósito de llevar al bebé a su manada. A lo largo de su viaje, los tres animales enfrentan peligros y desafíos, y a medida que interactúan con el bebé, sus lazos se fortalecen. Diego, inicialmente leal a su manada, comienza a cuestionar sus prioridades y finalmente se une a Manny y Sid en la protección del bebé, redimiéndose de sus intenciones iniciales. La película culmina con el regreso seguro del bebé a su padre y el establecimiento de una amistad duradera entre Manny, Sid y Diego</p>                        </ul>                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <button className="btn w-80" onClick={() => document.getElementById('my_modal_4').showModal()}>LOS CROODS</button>
                <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gray-900 text-justify">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-bold text-lg pb-5">Los Croods</h3>
                            <img className="w-2xs rounded-2xl" src="\src\assets\croods.jpg" alt="" />


                        </div>                        <ul>
                            <li><br />Descripcion:</li>
                            <p><br />Los Croods son una familia prehistórica que vive en un mundo peligroso y lleno de criaturas extrañas. Grug, el padre, es el líder y su prioridad es proteger a su familia, a menudo recurriendo a la fuerza y el miedo. Ugga es la madre, más abierta a nuevas ideas, pero aún preocupada por la seguridad de todos. Eep es la hija mayor, aventurera y curiosa, que anhela explorar más allá de su cueva. Thunk es el hijo del medio, torpe pero con buen corazón, y Sandy es la más joven, aún en una etapa en la que solo gruñe.</p>                            <li><br />Resumen:</li>
                            <p><br />La historia comienza cuando la cueva de los Croods es destruida, obligándolos a buscar un nuevo hogar. Grug, temeroso de lo desconocido, intenta mantener a su familia a salvo siguiendo sus estrictas reglas. Sin embargo, la aparición de Guy, con sus ideas y conocimientos, desafía la forma de vida de los Croods y los empuja a aventurarse en un mundo peligroso. A medida que viajan, los Croods deben aprender a confiar en Guy y en sus propias habilidades para sobrevivir. La película explora las tensiones entre la tradición y la innovación, y la importancia de adaptarse a un mundo en constante cambio, mientras los Croods descubren un nuevo hogar y una nueva forma de vida</p>                        </ul>                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
                <button className="btn w-80" onClick={() => document.getElementById('my_modal_5').showModal()}>COMO ENTRENAR A TU DRAGON</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box bg-gray-900 text-justify">
                        <div className="flex flex-col items-center justify-center">
                            <h3 className="font-bold text-lg pb-5">Como Entrenar a Tu Dragon</h3>
                            <img className="w-2xs rounded-2xl" src="\src\assets\dragon.jpg" alt="" />


                        </div>                        <ul>
                            <li><br />Descripcion:</li>
                            <p><br />"Cómo entrenar a tu dragón" es una película de animación de DreamWorks que cuenta la historia de Hipo, un joven vikingo que vive en la isla de Mema, donde la guerra con los dragones es una constante. A pesar de las tradiciones de su tribu, Hipo se hace amigo de un dragón herido llamado Desdentao, un Furia Nocturna, y descubre que los dragones no son las criaturas malvadas que todos creen. Juntos, Hipo y Desdentao desafían las viejas costumbres y demuestran que la amistad y la comprensión pueden superar el miedo y la violencia</p>                            <li><br />Resumen:</li>
                            <p><br />En la isla de Mema, los vikingos y los dragones llevan generaciones en guerra. Hipo, el hijo del jefe Estoico el Vasto, es un joven vikingo que no encaja con el resto de su tribu. A pesar de ser considerado débil y torpe, Hipo demuestra ser ingenioso e inteligente. Una noche, mientras intenta probar su valía cazando dragones, captura a un Furia Nocturna, la especie más temida. Sin embargo, en lugar de matarlo, Hipo lo ayuda a sanar y descubre que el dragón es mucho más inteligente y amigable de lo que todos pensaban. Hipo llama al dragón Desdentao y comienza a entrenarlo en secreto, aprendiendo a montar y comunicarse con él.
                                A medida que Hipo y Desdentao se hacen amigos, Hipo comienza a cuestionar las creencias de su pueblo sobre los dragones. Comparte su conocimiento con sus amigos y comienza a enseñarles a entender a los dragones, demostrando que la violencia no es la única solución. Eventualmente, Hipo debe enfrentarse a su padre y al resto de la tribu para mostrarles la verdadera naturaleza de los dragones y convencerlos de que pueden coexistir pacíficamente. La película culmina con una batalla épica donde Hipo y Desdentao lideran a los vikingos y dragones unidos para proteger su hogar de una amenaza mayor. Al final, Hipo logra cambiar la percepción de su pueblo sobre los dragones y demuestra que la amistad y la valentía pueden surgir de los lugares más inesperados. </p>                        </ul>                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    )
}
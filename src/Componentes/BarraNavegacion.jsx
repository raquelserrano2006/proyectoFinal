import { Link } from "react-router-dom";

export function BarraNavegacion() {
    return (
        <div>
            <div className="items-center justify-center navbar bg-gray h-20 shadow-sm gap-5">
                    <Link className="btn w-[40%]  btn-soft btn-info " to="/">Principal</Link>
                    <Link className="btn w-[40%] btn-soft btn-warning" to="/Peliculas">Peliculas</Link>
                    
                
            </div>
        </div>
    )
}

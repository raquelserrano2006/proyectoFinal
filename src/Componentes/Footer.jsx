export function Footer() {
    return (
        <div className="rounded">
            <footer className="footer sm:footer-horizontal bg-blue-600  p-10">
                <nav>
                    <h6 className="footer-title font-medium text-3xl text-gray-950">RAQUEL ARACELI SERRANO MAMANI</h6>
                    <a className="link link-hover  text-2xl">Derechos Reservados</a>
                </nav>
                
                <nav>
                    <h6 className="footer-title text-3xl  text-gray-950">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    )
}
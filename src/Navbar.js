import { Link } from "react-router-dom/cjs/react-router-dom";

const Navbar = () => {
	return ( 
		<nav className="navBar">
			<h1>El Blog de DWEC</h1>
			<div className="links">
				<Link to="/">Inicio</Link>
				<Link to="/create">Nuevo Blog</Link>
				<Link to="/detalle">Detalle</Link>
			</div>
		</nav>
	 );
}
 
export default Navbar;
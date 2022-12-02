import { Navigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
const Loginroute = () => {

     
      
    const token=localStorage.getItem("token")
		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(token){
        return <Navigate to='/' />
    } else { 
        return <Outlet />
    }                     // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default Loginroute;
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const mensajeria = async ({
    titulo,
    texto, 
    icono, 
    showConfirmButton = false, 
    confirmButtonText = 'Aceptar',
    timer = 2000, 
    showCancelButton = false, 
    cancelButtonText, 
    allowOutsideClick, 
    allowEscapeKey, 
    customClass = {}, 
    input
  } ) =>{  
  
  const swalOptions = {
    title: titulo,
    html: texto,
    icon: icono,
    input : input,    
    showConfirmButton: showConfirmButton,   
    showLoaderOnDeny : true,    
    confirmButtonText: confirmButtonText,
    showCancelButton : showCancelButton,
    cancelButtonText : cancelButtonText, 
    confirmButtonColor: 'var(--primary-color)',
    iconColor: 'var(--primary-color)',
    timer: timer,
    allowOutsideClick: allowOutsideClick == 'N' ? false : true,
    allowEscapeKey: allowEscapeKey == 'N' ? false :  true, 
    customClass : customClass,
    draggable : true,
  }

  await MySwal.fire(swalOptions).then((result)=>{
    return result
  });  
}


export default mensajeria
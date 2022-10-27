import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'
import logo from '../../img/logo.png'

function Footer(){
    return(

        //O footer mais externo é customizado e vem do Footer.moduel.css.
        <footer className={styles.footer}>
        {/* //Este footer mais interno é bootstrap */}
         <div className="container-fluid">
            <footer className="d-flex flex-wrap  text-center text-lg-start justify-content-around align-items-center py-3 my-4 border-top">
            
                <div className="col-md-4 d-flex align-items-center">
                    <a className="navbar-brand" href="index.html">
                         {/* <img src={aprendizado_mainsection.png} alt="foto-primeira-pagina"/>  */}
                        <img src={logo} alt="logo-zetta" width="75"/>
                    </a>
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use href="#bootstrap"></use></svg>
                    </a>

                        <span className="mb-3 mb-md-0" >© 2020 Copyright: Zetta</span>
                
                </div>
                <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                    <FaFacebook />
                    <FaLinkedin/>
                    <FaGoogle/>
                    <FaInstagram />
                </div>
                
            </footer>
         </div>
        </footer>
      )
}
export default Footer



// <footer className="d-flex flex-wrap  text-center text-lg-start justify-content-around align-items-center py-3 my-4 border-top" style="background-color: #285872">
// <div className="col-md-4 d-flex align-items-center">
//   <a className="navbar-brand" href="index.html">
//     <img src="assets/img/logo_transparent.png" alt="logo-zetta" width="75"/>
//   </a>
//   <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
//     <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
//   </a>
//   <span className="mb-3 mb-md-0" style="color: white">© 2020 Copyright: Zetta </span>
// </div>



// <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
//   {/* <!-- Facebook --> */}
//   <a className="btn btn-outline-light btn-floating m-1 text-white"
//       role="button"
//       />
//     <i className="bi bi-facebook"></i>
  

//   {/* <!-- Twitter --> */}
//   <a className="btn btn-outline-light btn-floating m-1 text-white"
//       role="button"
//       /><i className="bi bi-twitter"/>
    

//   {/* <!-- Google --> */}
//   <a className="btn btn-outline-light btn-floating m-1 text-white"
//       role="button"
//       /><i className="bi bi-google"/>

//   {/* <!-- Instagram --> */}
//   <a className="btn btn-outline-light btn-floating m-1 text-white"
//       role="button"
//       /><i className="bi bi-instagram"/>
// </div>
// </footer>
import React,{ Component } from "react";



class Contact extends Component{
    render(){
        return(
        <div>
            <div class="heading">
          <div class="jumbotron text-center" id="heading">
            <h1 class="myname"> SONA NATARAJAN </h1> 
            <p class="myoccupation"> RESUME </p>
            <ul class="nav nav-pills nav-justified" id="navigation">
                <li class="nav-item active">
                    <a class="nav-link active" href="/">HOME
                    </a>  
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="/about">ABOUT
                    </a>  
                </li>   
                
                <li class="nav-item">
                    <a class="nav-link active" href="contact/">CONTACT
                    </a>  
                </li>   
            </ul>  
             </div>  
           <hr />
           
            <div class="container">
              <div class="row">
                <div class="col">
                    <div class="small">
                        <h2 class=" offset-sm-4"><span class="badge rounded-pill bg-light">Contact Details</span></h2>
                        <table class="table table-striped bg-dark text-white">
                            <tbody>
                                <tr>
                                    <td>Native</td>
                                    <td>Murugamanagalam</td>
                                </tr>
                                <tr>
                                    <td>district</td>
                                    <td>Thiruvannamalai</td>
                                </tr>
                                <tr>
                                    <td>State</td>
                                    <td>Tamil Nadu </td>
                                </tr>
                                <tr>
                                    <td>Country</td>
                                    <td>India </td>
                                </tr>
                                <tr>
                                    <td>Mobile Number</td>
                                    <td>9345180370</td>
                                </tr>
                                <tr>
                                    <td>Gmail</td>
                                    <td>sonanatarajan02@gmail.com</td>
                                </tr>
                                
                                
                            </tbody>
                        </table>
                        
                         </div>
                </div>
              </div>
              <br />
              <hr />
              
                
                
                <div class="jumbotron text-center" id="footer">
                    <ul class="nav justify-content-center offset-sm-0">
                        <li class="nav-item">
                            <a href="https://www.linkedin.com/in/sona-n-600766244"
                            class="fa fa-linkedin nav-link"
                            style={{color:"blue"}} >.</a>
                            
                        </li>
                        <li class="nav-item">
                            <a href="https://www.instagram.com/"
                            class="fa fa-instagram nav-link"
                            style={{color:"blue"}}>.</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.github.com/SONANATARAJAN"
                            class="fa fa-github nav-link"
                            style={{color:"blue"}} >.</a>
                        </li>
                    </ul>
                </div>
                
             </div>             
           </div>
        </div>
        );
    }
}
export default Contact;

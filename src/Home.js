import React,{ Component } from "react";



class Home extends Component{
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
           
           
            <div class="container">
              <div className="row">
                <div className="col">
                    <div className="small">
                        <h2>Career Objectives</h2>
                        <p>
                        Hardworking student seeking employment.ready to utilize my skills and passion to further the mission of a company.
                            Technologically adept.offering experience with many social media platforms,
                            office technology programs. Bringing forth a <mark> positive attitude, willingness and motivation </mark> to learn new programs
                            </p>
                            
                         </div>
                </div>
              </div>
              <br />
              <hr />
              <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <h2 className="skills"> Technical Skills</h2>    
                    <br />
                    <ul className="skills">
                        <li>
                          Front-end language- HTML, CSS, JavaScript, React js
                        </li>
                        <li>
                           Back-end language-Node js, python
                        </li>
                        <li>
                            Database- MongoDB
                        </li>
                        <li>
                            Cloud Essential
                        </li>
                    </ul>
                    
                    </div>   
                </div>
              </div>
              <hr />
                <div className="col-sm-6">
                    <h2 className="myskills">
                        Internship and Certification </h2>
                    <br />
                    <ul className="skills">
                        <li>
                         I done<b> Web Developement</b> in VGLUG Institute.
                        </li>
                        <li>
                         I done my Workshop about "<b>All internet Things</b>"
                        </li>
                    </ul>


                </div>
                <br /> 
                <hr />
                <div className="col-sm-12">
                    <h2 className="myskills">My Project</h2>  
                        <br />
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th>Project Domain</th>
                                    <th>Programming Language</th>
                                    <th>Project Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Full Stack Web Developement</td>
                                    <td>HTML,CSS,JavaScript,Bootstrap,React</td>
                                    <td>
                                        <a href={"/"} > Bussiness Resume </a>                  
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>Full Stack Web Developement</td>
                                    <td>HTML,CSS,JavaScript,Bootstrap,React</td>
                                    <td>
                                        <a href={"/"} >React JS ToDo List Application </a>                  
                                        
                                    </td>
                                </tr>
                            </tbody>
                            </table>              
                    </div> 
                <div className="jumbotron text-center" id="footer">
                    <ul className="nav justify-content-center">
                        <li class="nav-item">
                            <a href="https://www.linkedin.com/in/sona-n-600766244"
                            class="fa fa-linkedin nav-link"
                            style={{color:"blue"}} >.</a>
                            
                        </li>
                        <li className="nav-item">
                            <a href="https://www.instagram.com/"
                            className="fa fa-instagram nav-link"
                            style={{color:"blue"}}>.</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.github.com/SONANATARAJAN"
                            className="fa fa-github nav-link"
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
export default Home;

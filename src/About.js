import React,{Component} from "react";

class About extends Component{
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

            <div class="container" >
                <div class="row">
                    <div class="col-sm-12">
                       <h3> <span class="badge bg-dark text-white">Profile</span></h3>
                        <table class="table table-striped">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>Sona N</td>
                                </tr>
                                <tr>
                                    <td>Father's Name</td>
                                    <td>Natarajan V</td>
                                </tr>
                                <tr>
                                    <td>
                                        Gender
                                    </td>
                                    <td>Female</td>
                                </tr>
                                <tr>
                                    <td>Date of birth</td>
                                    <td>01/07/2002 </td>
                                </tr>
                                <tr>
                                    <td>Age</td>
                                    <td>22 </td>
                                </tr>
                                <tr>
                                    <td>Blood Group</td>
                                    <td>O+ve</td>
                                </tr>
                                <tr>
                                    <td>National</td>
                                    <td>India V</td>
                                </tr>
                                
                                <tr>
                                    <td>Language Known</td>
                                    <td>Tamil,English</td>
                                </tr>
                                <tr>
                                    <td>Hobby</td>
                                    <td>Drewing,Designing works</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <br />
                <hr />       
                <div class="skills ">
                    <h3><span className="badge bg-dark text-white">Skills</span></h3>
                    <ul class="list-group">
                        <li class="list-group-item">
                            Advanced Web Developement Knowledged
                        </li>
                        <li class="list-group-item">
                            better communication skills
                        </li>
                        <li class="list-group-item">
                           playing BasketBall <span class="small">(district level)</span>
                        </li>
                        <li class="list-group-item">
                            playing Table Tennis and Badminton
                        </li>
                        <li class="list-group-item">
                            Employment Law
                        </li>
                        
                    </ul>

                </div>
                <br />
                <hr />


                <div class="skills">
                    <h3><span class="badge bg-dark text-white">Education</span></h3>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    Education
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Percentage
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        10th
                                    </td>
                                    <td>
                                        Cluny Matric Hr. Sec. school Devikapuram
                                    </td>
                                    <td>
                                        86%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        11th
                                    </td>
                                    <td>
                                        Indo American School Cheyyar.
                                    </td>
                                    <td>
                                        70%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        12th
                                    </td>
                                    <td>
                                        Indo American School Cheyyar.
                                    </td>
                                    <td>
                                        71.6%
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        B.E(ECE)
                                    </td>
                                    <td>
                                        University College of Engineering Villupuram
                                    </td>
                                    <td>
                                        8.3%
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
                
                
                
          </div>
           
    
          <div class="jumbotron text-center" id="footer">
                    <ul class="nav justify-content-center">
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
) ;
   }
}

export default About;

import React from 'react';
import ReactDOM from 'react-dom';
import './footer.css'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';


const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Rainbow kids</h5>
            <p>
               Give us a call :05028387377
               <br />


               <a href="https://instagram.com/amlkady?igshid=bjang2prtqi7"> <i class="fa fa-instagram icon"></i></a>
               <a href=""><i class="fa fa-facebook-f icon"></i></a>
               <a href="#"><i class="fa fa-whatsapp icon"></i></a>
              </p>

          </MDBCol>
          <MDBCol md="3">
            <h5 className="title"> Quick Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Gallery</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title"> Subscribe</h5>

            <form class=" form-control subscribe" novalidate="novalidate" action="#" method="post" id="newsletter-validate-detail">
              <label class=" label mr-5 text-danger " for="newsletter"><span>Sign Up:</span></label>
              <input  name="email" type="email" id="newsletter" placeholder="Enter your email address" data-validate="{required:true, 'validate-email':true}"></input>
              <button type="submit" class="btn btn-default text-danger float-right">Submit</button>
            </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <p > So glad you are here , we will contact you soon THANK YOU !&#128525; &#128151; </p>

   <a href="https://instagram.com/amlkady?igshid=bjang2prtqi7"> <i class="fa fa-instagram icon"></i></a>
   <a href=""><i class="fa fa-facebook-f icon"></i></a>
   <a href="#"><i class="fa fa-whatsapp icon"></i></a>
   <nav  class=" col-12 navbar mr-5 navbar-expand-md bg-light  justify-content-center navbar-light fixed-bottom"id="backtoTop"><a target="-top" href="#">Top</a></nav>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

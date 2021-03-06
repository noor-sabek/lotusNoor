import React from 'react';
import ReactDOM from 'react-dom';
import './contact-us.css';
import Header from '../../parts/header/header.js';
import Footer from '../../parts/footer/footer.js';
import ConUsForm from './ConUsContent.js';
import Selector from './select.js';
import ChildAge from './ChildAge.js';
import Message from './Message.js';
import Parent from './parent.js';


class ContactUs extends React.Component {
  render() {
    return (
      <>
        <Header/>
        <div className="container  p-5 ">
         <div className="col-10 ">
             <h1 className="text-center mt-5 py-5 title">πͺππππππ πΌπ</h1>
                <p className="text-info text-center">ππππ πππππ πππ ππππ ππ ππππ πππππ </p>
                <form action="/action_page.php " class="was-validated  et_pb_newsletter_form et_pb_login_form col-6  mx-auto">
                     <ConUsForm/>
                     <Parent/>
                     <Selector/>
                     <ChildAge/>
                     <Message/>

                     <button type="submit" class="btn btn-primary  border-0 float-right">Submit</button>
                </form>
           </div>
         </div>
        <Footer/>
    </>
    );
  }
}



export default ContactUs ;

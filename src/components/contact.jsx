import React from "react";


export const Contact = (props) => {
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact Info</h2>
                <p>
                  <span>
                    <i className='fa fa-map-marker'></i> Address - {" "}
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-phone'></i> Phone
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className='contact-item'>
                <p>
                  <span>
                    <i className='fa fa-envelope-o'></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='row'>
                <div className='social'>
                  <ul>
                    <li>
                      <a href={props.data ? props.data.facebook : "/"}>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         
          
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>&copy; 2023 Om Facility & Manpower Services.</p>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer font-small special-color-dark pt-4 mt-4">

        <div className="container">
            <ul className="list-unstyled list-inline text-center">
                <li className="list-inline-item">
                    <a href="#!" className="btn btn-social-icon btn-lg btn-facebook"><i className="fa fa-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn btn-social-icon btn-lg btn-twitter"><i className="fa fa-twitter"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="#!" className="btn btn-social-icon btn-lg btn-linkedin"><i className="fa fa-linkedin"></i></a>
                </li>
            </ul>
        </div>

        <div className="footer-copyright text-center py-3" style={{backgroundColor: '#deba5f'}}>© 2019 Copyright:
            <a style={{color: 'black', textDecoration: 'none'}}href="https://mdbootstrap.com/education/bootstrap/"> NutriBuddy.com</a>
        </div>

    </footer>
  )
}

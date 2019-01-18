import React from 'react';
import { Link } from 'react-router-dom';

//https://codeburst.io/tech-stack-2019-frontend-routing-1ae61688d47e
//browser back button
const Nav = () => (
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/utilities/bulkmail/">Bulk Mail</Link></li>
    <li><Link to="/NameForm">Name Form</Link></li>
    <li><Link to="/EssayForm">Essay Form</Link></li>
    <li><Link to="/MultiForm">Multi Form</Link></li>
    <li><Link to="/InputForm">Formik Yup Example</Link></li>
    <li><Link to="/functiongateway">Function Gateway</Link></li>
</ul>
);

export default Nav;
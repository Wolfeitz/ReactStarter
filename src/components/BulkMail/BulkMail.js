import React from 'react';
import Campuses from '../CheckboxContainer/CheckboxContainer';

class BulkMail extends React.Component {
    render() {
       return (
          <div>
             <form class="form" method="post" enctype="multipart/form-data">
                 <Campuses />
             </form>
          </div>
       );
    }
 }
 
 export default BulkMail;
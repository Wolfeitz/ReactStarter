import React from 'react';

class Campuses extends React.Component {
    render() {
       return (
          <div>
             Select Campuses

            <ul class="list-unstyled">
            for (var i = 0; i < Model.MailTo.Count; i++)
            for (var i = 0; i < Model.Campuses.Count; i++)
            
                <li>
                    <input type="checkbox" asp-for="@Model.Campuses[i].vals.Selected" title="@Model.Campuses[i].vals.caption" />
                    <label asp-for="@Model.Campuses[i].vals.Selected">@Model.Campuses[i].vals.caption</label>
                    <input type="hidden" asp-for="@Model.Campuses[i].vals.valInternalCode" />
                </li>
            
            </ul>
          </div>
       );
    }
 }
 
 export default Campuses;
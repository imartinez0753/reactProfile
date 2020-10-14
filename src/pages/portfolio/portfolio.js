import React from "react";
import BasicCard from "../../component/card";



function Portfolio() {
return (
<div>
    <div>
        <div className="container">
      <div className="row">
        <div className="col-sm-7 col mb-2 mt-2">
          <p className="h3 text-info">Portfolio</p>
        </div>
      </div>
    </div>

   
    <div className="container">
      <div className="row my-3">
        <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image="Assets\Images\weatherApp.png"
        CardTitle="weather App"
        HREF="https://imartinez0753.github.io/weatherDashboard/"
        buttonText1="weather App"
        HREF2="https://github.com/imartinez0753/weatherDashboard"
        buttonText2="gitHub"
        />
        
         
        </div>
        
        <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image="Assets/Images/dayPlanner.png"
        CardTitle="Day Planner"
        HREF="https://imartinez0753.github.io/dayPlanner/"
        buttonText1=" Day Planner"
        HREF2="https://github.com/imartinez0753/dayPlanner"
        buttonText2="gitHub"
        />
          
        </div>
      </div>
    </div>
   
    <div className="container">
      <div className="row">
        <div className="col-sm-7 col mb-2 mt-2"></div>
      </div>
    </div>

  
    <div className="container">
      <div className="row my-3">
        <div className="col-sm-4 col-md-6 col-lg-4">
        
          
        <BasicCard 
        Image="Assets/Images/alcoCallV3.png"
        CardTitle="Alcocall"
        HREF="https://fathomless-cove-53726.herokuapp.com/"
        buttonText1=" Alcocall"
        HREF2="https://github.com/imartinez0753/alcoCall"
        buttonText2="gitHub"
        />
        </div>
       
        <div className="col-sm-4 col-md-6 col-lg-4">
        <BasicCard 
        Image="Assets\Images\eat-da-burger.png"
        CardTitle="Eat-Da_burger"
        HREF="https://stark-beach-02156.herokuapp.com/"
        buttonText1="Eat-Da_burger"
        HREF2="https://github.com/imartinez0753/burgerLogger"
        buttonText2="github"
        />
        </div>
      </div>
    </div>
    </div>
</div>
    
)
}
export default Portfolio;
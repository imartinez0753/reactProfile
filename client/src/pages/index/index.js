import React from "react";
import Me from "../../Images/comic-me-2.jpg"

function Home() {
    return (
        <div>
            <div className="container">
      <div className="row">
        <div className="col-sm-8 mb-2 mt-2">
          <p className="h3 text-info">About me</p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row my-3">
        
        <div className="col-sm-8 col-lg-8">
          <div className="float-left mr-2">
            <img
              src={Me}
              
              height="225px"
              width="225px"
              alt="default user image male"
              className="rounded"
            />
          </div>

          

          <p>
            Currently Ian is operating his own construction freelance business.
            He knows the importance of hard work, and dedication tenacity.
            Construction, although not seemingly similar to the world of tech,
            has a number of similarities. The importance of a solid foundation,
            the logic that must be understood to build quickly and safely while
            all the while providing the costumer their desired product.
            Motivated full-stack web developer with proficiencies in HTML, CSS,
            node.js and javascript. Soon to be certified in full-stack web
            development in October 2020. Demonstrated talents in guiding teams
            engaged in program creation.
          </p>

          <p>
            Honesty and integrity are important. If one says one will provide
            something, they best provide that, their name is on the line.
          </p>
        </div>
      </div>
    </div>

    
    <div className="container">
      <div className="row">
        <div className="col-sm-11 col-md-8">
          <p>
            Recent successes are many, most recently built and finished a second
            story deck, tiled backsplash at washroom sink and installed new
            butcher block countertops. Involment in many music ensambles has
            seen Ian to venues the likes of The Whiskey A Go GO, The Viper Room,
            and The Trubador, all in Los Angeles, CA.
          </p>
          <p>
            Ian aspires to be a full-stack web developer and will earn a
            certificate in web development from University California Riverside
            in October 2020.
          </p>
          
        </div>
      </div>
    </div>
        </div>
    )
}
export default Home;
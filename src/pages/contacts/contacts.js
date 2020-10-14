import React from "react";

function Contacts() {
    return (
        <div>
<div className="container">
			<div className="row">
				<div className="col-sm-8 mb-4 mt-2">
					<p className="h3 text-info">contact</p>
				</div>
			</div>

			
			<input className="form-control" type="text" placeholder="Name" />
			<br />
			<input className="form-control" type="text" placeholder="Email  " />
			<br />

			<div className="form-group">
				<label for="exampleFormControlTextarea1"> </label>
				<textarea
					className="form-control"
					placeholder="Message"
					id="exampleFormControlTextarea1"
					rows="3"
				></textarea>
			</div>
		</div>

        </div>
    )
}

export default Contacts;
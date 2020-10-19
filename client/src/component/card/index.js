import React from "react";
import { Card, Button } from "react-bootstrap";

function BasicCard({Image, CardTitle, HREF, HREF2, buttonText2, buttonText1}) {
    return (
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Image} />
  <Card.Body>
    <Card.Title>{CardTitle}</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <div>
    <Button 
    className="card-text btn text-center p-3 mb-2 bg-info text-light"
    variant="primary"
    href={HREF}>{buttonText1}</Button>
    <Button 
    className="card-text btn text-center p-3 mb-2 bg-info text-light"
    variant="primary"
    href={HREF2}>{buttonText2}</Button>
    </div>
    
  </Card.Body>
</Card>
</div>
    )
}
export default BasicCard;
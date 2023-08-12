import React from "react";

const App = (props) => (
  <>
    <div className="col-12 col-sm-10 col-md-8 panels-col-lg-3 col-lg-3 order-4 d-flex flex-column align-items-center justify-content-start panelShadow panelWidth panelOther">
      <p className="mt-3 h3">{props.name}</p>
      <p className="text-break">{props.description}</p>
      <button className="btn btn-secondary order-button m-3">{props.price}</button>
    </div>
  </>
);
export default App;
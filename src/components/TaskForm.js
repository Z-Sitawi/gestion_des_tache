import React, { useState } from "react";

export default function TaskForm(props) {
  const [show, setSow] = useState(props.show);
  const cancel = () => {
    setSow(false);
  };
  return (
    <>
      {show && (
        <div className={(props.mainBtnTxt === "Modifier")? "bg-success p-2 card col-6": "bg-primary p-2 card col-6"}>
          <p className="display-5 text-center">
            <b>{props.title}</b>
          </p>
          <div className="bg-light p-2 d-flex gap-3 flex-column align-items-center">
            <textarea
              className="col-12"
              rows={3}
              placeholder="Ecrire votre tâche ici"
              type="text"
            />
            <div>
              <button className={(props.mainBtnTxt === "Modifier")? "btn btn-success m-1" : "btn btn-primary m-1"}>
                {props.mainBtnTxt}
              </button>
              <button onClick={cancel} className="btn btn-danger m-1">
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

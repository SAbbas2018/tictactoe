import React from "react";
import { useHistory } from "react-router-dom";
export default function DisconnectModal() {
  const history = useHistory();
  const handleDismiss = () => {
    history.push(`/`);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleDismiss}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleDismiss}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

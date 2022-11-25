import React from 'react';


const ConfirmationModal = ({ title, message, modalData, successAction, successButtonName, closeModal }) => {
    return (
        <tr>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <span className="modal">
                <span className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <span className="modal-action flex justify-between btn-sm my-3">
                        <label onClick={() => successAction(modalData)} htmlFor="confirmation-modal" className="btn btn-sm btn-warning">{successButtonName}</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn btn-sm btn-info">Close</label>
                    </span>
                </span>
            </span>
        </tr>
    );
};

export default ConfirmationModal;
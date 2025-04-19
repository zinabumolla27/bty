import React from "react";
import { Modal } from "antd";
import "./modal.css";

const CommonModal = ({
  isModalOpen,
  productDetails,
  handleOk,
  handleCancel,
}) => {
  if (!productDetails) return null; // Check if product details are provided

  const { title, image, detail } = productDetails;

  // Check if 'detail' is available before using replace function
  const formattedDetail = detail
    ? detail.replace(
        /\*\*(.*?)\*\*/g,
        '<span class="bold">$1</span>' // Add bold style to the bolded text in Markdown
      )
    : ""; // Fallback to an empty string if detail is undefined

  return (
    <Modal
      title={null}
      open={isModalOpen} // Updated from `visible` to `open`
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      width="80%" // Make the width responsive
      style={{ maxHeight: "80vh", overflowY: "auto" }}
    >
      <div className="modal-content">
        {/* Image */}
        <img src={image} alt={title} className="modal-image" />

        {/* Product Title */}
        <h3 className="modal-title">{title}</h3>

        {/* Product Details */}
        <div
          className="modal-details"
          dangerouslySetInnerHTML={{
            __html: formattedDetail,
          }}
        />
      </div>
    </Modal>
  );
};

export default CommonModal;

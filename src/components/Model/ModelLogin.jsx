import { Input, Modal } from "antd";
import React, { useContext,useEffect,useState } from "react";
import { AppContext } from "../../context/AppProvider";
export default function () {
    const { isAddUserModalOpen,setisAddUserModalOpen} = useContext(AppContext);
    return (
        <Modal
            title="Đổi tên nhóm"
            open={isAddUserModalOpen}
            cancelText="Hủy"
            okText="Xác nhận"
        >

        </Modal>
    )
}

import Alert from "react-bootstrap/Alert";
import "./Header.css"
import { Dropdown, Menu } from 'antd';
import { AppContext } from "../../context/AppProvider";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function Heder() {
    const navigate = useNavigate()
    const { user } =
        useContext(AppContext);
    const items = [
    ];
    const [list, setList] = useState([])
    useEffect(() => {
        async function fetchData() {
            // You can await here
            //   console.log("test");
            console.log(user);
            try {

                if (user === undefined) {
                    items.push({ label: 'Đăng nhập', key: 'item-1' })
                    items.push({ label: 'Đăng kí', key: 'item-2' })
                    setList(items);
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchData();
    }, [])
    const menu = (
        <Menu>
            {user === undefined ? (

                <div>
                    <Menu.Item><div  > Đăng kí </div></Menu.Item>
                    <Menu.Item><div onClick={()=>navigate("/login")}> Đăng nhập </div></Menu.Item>
                </div>
            ) : (<div>
                <Menu.Item><div > Thông tin tài khoản </div></Menu.Item>
                <Menu.Item><div onClick={()=>navigate("/login")}> Đăng xuất </div></Menu.Item>
            </div>)}
        </Menu>
    );

    return (
        <div className="containerheader">
            <div style={{ display: "flex", justifyContent: "flex-end", paddingRight: 150, alignItems: "center", width: "100%", height: "100%" }}>
                <div className="herder" style={{ width: 200, display: "flex", justifyContent: "space-between", alignItems: "center", height: "100%" }}>


                    <Dropdown overlay={menu}>
                        {user===undefined?(<div><a href="#" style={{ color: "white", textDecoration: "none" }}>Tài khoản</a></div>):(<div><a href="#" style={{ color: "white", textDecoration: "none" }}>{user.name}</a></div>)}
                        
                    </Dropdown>
                    <a href="#" style={{ color: "white", textDecoration: "none" }}>Giỏ hàng</a>
                </div>

            </div>
        </div>
    );
}


import "./Login.css"
import { Button, Col, Input, Row, Tabs } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LockOutlined, MobileOutlined } from "@ant-design/icons";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../context/AppProvider";
function Login() {
    const { setUser } =
        useContext(AppContext);
    const navigate = useNavigate()
    const [er, seter] = useState("")
    const [phonenumber, setphone] = useState("")
    const [vlphone, setvlphone] = useState("")
    const [vlpass, setvlpass] = useState("")
    const [password, setpass] = useState("")
    const [checkOtp, setCheckOtp] = useState(true);
    const handleLogin = async () => {
        // if (validateForm()) {
        try {
            const { data } = await axios.post("http://localhost:5000/login/login", {
                phoneNumber: phonenumber,
                password,
            });

            //  if (data.status === false) {
            //    seter(data.msg);
            //  }

            //  else if (data.status === true) {
            //    // console.log(process.env.REACT_APP_LOCALHOST_KEY);

            setUser(data)
            navigate("/");

            //  }
        } catch (error) {
            console.log(error);
            seter("Account or password is not valid!");
        }


        //  }


    };
    return (
        <div className="wrapper-login">
            <Row>

                <Col className="login-body" span={24}>
                    <div style={{ display: checkOtp ? "block" : "none" }}>

                        <form className="login-form">
                            <br></br>
                            <span className="login-header-logo">Login</span>
                            <div className="login-phone-input">
                                <MobileOutlined
                                    style={{
                                        fontSize: "17px",
                                        padding: "0 11px",
                                    }}
                                />
                                <ReactPhoneInput
                                    className="phone-input"
                                    country={"vn"}
                                    placeholder="Số điện thoại"
                                    autoFormat
                                    onChange={(e) => setphone(e)}
                                    disableCountryCode
                                    inputStyle={{ border: "none" }}
                                    buttonStyle={{
                                        border: "none",
                                        backgroundColor: "white",
                                    }}
                                ></ReactPhoneInput>
                            </div>
                            <span style={{ color: "red", paddingLeft: 50, fontSize: 15 }} >{vlphone}</span>
                            <br></br>
                            <div className="login-password-input">
                                <Input.Password
                                    size="large"
                                    bordered={false}
                                    placeholder="Mật khẩu"
                                    onChange={(e) => setpass(e.target.value)}
                                    prefix={<LockOutlined />}
                                />
                            </div>
                            <span style={{ color: "red", paddingLeft: 50, fontSize: 15 }} >{vlpass}</span>
                            <Button className="login-btn-login" onClick={() => handleLogin()} >
                                Đăng nhập
                            </Button>


                            <Link className="login-link" to="/repassword">
                                Quên mật khẩu?
                            </Link>
                            <span style={{ color: "red", textAlign: "center", fontSize: 16 }}>{er}</span>
                            <br></br>
                            <span style={{ textAlign: "center" }}>
                                Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay!</Link>
                            </span>
                        </form>


                    </div>

                    {/* <div style={{ display: !checkOtp ? "block" : "none" }}>
                        <AuthOtp />
                    </div> */}
                </Col>

            </Row>


        </div>
    )
}

export default Login
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom"

const { Header } = Layout;

const HeaderComponent = () => {
    return (
        <Link to='/'>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(1).fill(null).map((_, index) => {

                            return {

                                label: "Shops",
                            };
                        })}
                    />
                </Header>
            </Layout>
        </Link>
    );
};

export default HeaderComponent;
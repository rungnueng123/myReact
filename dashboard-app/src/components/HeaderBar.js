import React, { Component } from 'react'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default function Headerbar() {
    return (
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{
                    lineHeight: '64px'
                }}>
                <Menu.Item key="1">Dashboard</Menu.Item>
            </Menu>
        </Header>
    )
}

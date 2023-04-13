import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.png";
import BlockContent from "../components/BlockContent";

export default function Header() {
  const dataMenu = [
    {
      title: "home",
      onclick: "#home",
    },
    {
      title: "features",
      onclick: "#features",
    },
    {
      title: "launchpad",
      onclick: "#launchpad",
    },
    {
      title: "dex",
      onclick: "#dex",
    },
  ];
  const [active, setActive] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    console.log(window.location.pathname);

    setActive(window.location.pathname);
  }, []);
  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };
  // const handleClickMenu = (val: any) => {
  //   sessionStorage.setItem("menu-active", val.onclick);
  // };

  return (
    <React.Fragment>
      <div className={`header-app w-full fixed z-10`}>
        <BlockContent>
          <div className="flex justify-between items-center">
            <div className="flex gap-8">
              <Image alt="logo" src={logo} />
              <Menu className="menu flex justify-between">
                {dataMenu.map((item, key) => (
                  <Menu.Item className="glow-on-hover menu__item" key={key}>
                    <a
                      href={item.onclick}
                      className={`${active === item.onclick && "active-menu"}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            </div>
            <button className="py-2 px-3 text-white font-medium bg-[#040c37] ">
              launch Dapp
            </button>
            <div className="menuButton hidden" onClick={showDrawer}>
              <MenuUnfoldOutlined />
            </div>
            <Drawer
              placement="right"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 99999 }}
            >
              <Menu>
                {dataMenu.map((item, key) => (
                  <Menu.Item key={key}>
                    <a
                      className={`${active === item.onclick && "active-menu"}`}
                      href={`${item.onclick}`}
                    >
                      {item.title}
                    </a>
                  </Menu.Item>
                ))}
                <Menu.Item>
                  <button className="button-d-app" style={{}}>
                    Connect Wallet
                  </button>
                </Menu.Item>
              </Menu>
            </Drawer>
          </div>
        </BlockContent>
      </div>
    </React.Fragment>
  );
}

import Image from "next/image";
import React from "react";
export default function Footer() {
  return (
    <div className="footer">
      <div className="max-width-1276">
        <div className="content-footer">
          <div>
            <Image width={290} height={55} src={""} alt="" />
            <span className="copyright">
              Copyright © 2023 by Zkpax Exchange. All rights reserved.
            </span>
          </div>
          <div className="menu-footer">
            <div className="title-footer">COMMUNITY</div>
            <a href="https://discord.gg/zkpaxexchange" target={"_blank"}>
              Discord
            </a>
            <a href="https://twitter.com/ZkPaxExchange" target={"_blank"}>
              Twitter
            </a>
            <a href="https://t.me/ZkPaxCommunity" target={"_blank"}>
              Telegram
            </a>
          </div>
          <div className="menu-footer">
            <div className="title-footer">DOCUMENTATION</div>
            <a href="https://docs.zkpax.exchange/">Document</a>
          </div>
        </div>
      </div>
    </div>
  );
}

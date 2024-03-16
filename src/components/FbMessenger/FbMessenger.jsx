"use client";
import { CustomChat, FacebookProvider } from "react-facebook";

const FbMessenger = () => {
  return (
    <FacebookProvider appId="363305470019931" chatSupport>
      <CustomChat pageId="1625755791026936" minimized={false} />
    </FacebookProvider>
  );
};

export default FbMessenger;

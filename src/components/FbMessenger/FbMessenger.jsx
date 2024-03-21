"use client";

import { CustomChat, FacebookProvider } from "react-facebook";

const FbMessenger = () => {
  const appId = process.env.NEXT_PUBLIC_FB_APP_ID;
  const pageId = process.env.NEXT_PUBLIC_FB_PAGE_ID;
  return (
    <FacebookProvider appId={"1083955279324134"} chatSupport>
      <CustomChat
        pageId={"1625755791026936"}
        minimized={false}
        themeColor="#0a192f"
      />
    </FacebookProvider>
  );
};

export default FbMessenger;

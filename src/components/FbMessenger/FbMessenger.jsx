"use client";
import { CustomChat, FacebookProvider } from "react-facebook";

const FbMessenger = () => {
  const appId = process.env.NEXT_PUBLIC_FB_APP_ID;
  const pageId = process.env.NEXT_PUBLIC_FB_PAGE_ID;
  return (
    <FacebookProvider appId={appId} chatSupport>
      <CustomChat pageId={pageId} minimized={false} themeColor="#0a192f" />
    </FacebookProvider>
  );
};

export default FbMessenger;

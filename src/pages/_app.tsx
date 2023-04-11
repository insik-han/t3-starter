import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { Head } from "src/components/common";
import { fontPretendard } from "src/fonts";
import { api } from "src/utils/api";

import "src/styles/globals.css";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head />
      <style jsx global>{`
        :root {
          --font-pretendard: ${fontPretendard.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default api.withTRPC(App);

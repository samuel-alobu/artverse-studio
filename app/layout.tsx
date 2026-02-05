import "./globals.css";
import NavBar from "./components/NavBar";
import Providers from "@/app/components/Providers"; // client provider
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import Footer from "./components/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <NavBar user={session?.user} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

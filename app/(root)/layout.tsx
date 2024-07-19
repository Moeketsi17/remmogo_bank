import SideBar from "@/components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {firstName: "Raymond", lastName: "Lekoana"};

  return (
    <main className="flex h-screen w-full font-inter">
        <SideBar user={loggedIn}/>
        {children}
    </main>
  );
}

export default async function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      {children}
    </div>
  );
}
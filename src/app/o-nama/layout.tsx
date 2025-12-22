import VerticalPageTitle from "@/components/VerticalPageTitle";

export default function ONamaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerticalPageTitle title="O nama" />
      <div className="md:ml-40">{children}</div>
    </>
  );
}

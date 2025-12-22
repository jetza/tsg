import VerticalPageTitle from "@/components/VerticalPageTitle";

export default function DelatnostiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerticalPageTitle title="Delatnosti" />
      <div className="md:ml-40">{children}</div>
    </>
  );
}

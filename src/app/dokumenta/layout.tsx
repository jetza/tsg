import VerticalPageTitle from "@/components/VerticalPageTitle";

export default function DokumentaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <VerticalPageTitle title="Dokumenta" />
      <div className="md:ml-40">{children}</div>
    </>
  );
}

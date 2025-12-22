"use client";

import { useLocale } from "@/contexts/LocaleContext";
import PageHeader from "@/components/PageHeader";
import DocumentLink from "@/components/DocumentLink";
import FadeInSection from "@/components/FadeInSection";

export default function HrvatskaPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <PageHeader
          title={t.dokumenta.hrvatska.title}
          subtitle={t.dokumenta.hrvatska.subtitle}
        />

        <FadeInSection delay={0.2} className="space-y-8">
          <div className="bg-white p-8">
            <DocumentLink
              href="/pdfs/hrvatska/Zakon-o-prijevozu-u-cestovnom-prometu-Republike-Hrvatske.pdf"
              title="Zakon o prijevozu u cestovnom prometu Republike Hrvatske"
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

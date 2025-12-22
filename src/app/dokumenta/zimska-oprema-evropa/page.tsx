"use client";

import { useLocale } from "@/contexts/LocaleContext";
import PageHeader from "@/components/PageHeader";
import DocumentLink from "@/components/DocumentLink";
import FadeInSection from "@/components/FadeInSection";

export default function ZimskaOpremaEvropaPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <PageHeader
          title={t.dokumenta.zimskaOprema.title}
          subtitle={t.dokumenta.zimskaOprema.subtitle}
        />

        <FadeInSection delay={0.2} className="space-y-6">
          <div className="bg-white p-8">
            <DocumentLink
              href="/pdfs/Zimska-oprema-1.pdf"
              title="Zimska oprema u zemljama Evrope"
            />
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

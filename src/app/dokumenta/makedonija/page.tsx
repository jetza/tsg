"use client";

import { useLocale } from "@/contexts/LocaleContext";
import { makedonijaZakoni } from "@/data/makedonija-zakoni";
import PageHeader from "@/components/PageHeader";
import DocumentLink from "@/components/DocumentLink";
import FadeInSection from "@/components/FadeInSection";

export default function MakedonijaPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <PageHeader
          title={t.dokumenta.makedonija.title}
          subtitle={t.dokumenta.makedonija.subtitle}
        />

        <FadeInSection delay={0.2} className="space-y-6">
          <div className="bg-white p-8">
            <div className="space-y-4">
              {makedonijaZakoni.map((zakon, index) => (
                <DocumentLink
                  key={index}
                  href={zakon.file}
                  title={zakon.name}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

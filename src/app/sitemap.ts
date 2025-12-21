import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tsgserbia.rs";

  // Static pages
  const staticPages = [
    "",
    "/o-nama",
    "/o-nama/firma",
    "/o-nama/tim",
    "/o-nama/strucni-konsultanti",
    "/o-nama/zaposleni",
    "/delatnosti",
    "/delatnosti/edukacije",
    "/delatnosti/edukacije/obuka-za-bezbedno-ucestvovanje",
    "/delatnosti/edukacije/obuka-pc-crash",
    "/delatnosti/ekspertize",
    "/delatnosti/projekti",
    "/delatnosti/simpozijumi",
    "/dokumenta",
    "/dokumenta/srbija/zakoni",
    "/dokumenta/srbija/podzakonska-akta",
    "/dokumenta/crna-gora/zakoni",
    "/dokumenta/crna-gora/podzakonska-akta",
    "/dokumenta/crna-gora/putovanje-automobilom",
    "/dokumenta/bih/zakoni",
    "/dokumenta/bih/podzakonska-akta",
    "/dokumenta/hrvatska",
    "/dokumenta/makedonija",
    "/dokumenta/evropa",
    "/dokumenta/simpozijumi",
    "/blog",
    "/arhiva",
    "/kontakt",
    "/anketa",
  ];

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // PDF documents - key documents only for SEO
  const pdfDocuments = [
    "/pdfs/kazne-evropa/Kazne-za-pojedine-saobracajne-prekrsaje-u-zemljama-Evrope.pdf",
    "/pdfs/zimska-oprema/Zimska-oprema-u-zemljama-Evrope.pdf",
    "/pdfs/makedonija/Zakon-o-obaveznom-osiguranju-u-saobracaju.pdf",
    "/pdfs/makedonija/Zakon-za-vozila.pdf",
  ];

  const pdfRoutes = pdfDocuments.map((pdf) => ({
    url: `${baseUrl}${pdf}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...pdfRoutes];
}

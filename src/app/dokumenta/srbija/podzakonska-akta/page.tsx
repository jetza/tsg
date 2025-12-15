"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

const podzakonskaAktaVazeca = [
  {
    name: "Pravilnik o saobraćajnoj signalizaciji",
    file: "Pravilnik-o-saobracajnoj-signalizaciji-novi.pdf",
  },
  {
    name: "Pravilnik o podeli motornih i priključnih vozila i tehničkim uslovima za vozila u saobraćaju na putevima",
    file: "Pravilnik-o-podeli-motornih-i-priključnih-vozila-i-tehničkim-uslovima-za-vozila-u-saobraćaju-na-putevima.pdf",
  },
  {
    name: "Pravilnik o dimenzijama, ukupnim masama i osovinskom opterećenju vozila i o osnovnim uslovima koje moraju da ispunjavaju uređaji i oprema na vozilima u saobraćaju na putevima",
    file: "Pravilnik-o-dimenzijama-ukupnim-masama-i-osovinskom-opterećenju-vozila-i-o-osnovnim-uslovima-koje-moraju-da-ispunjavaju-uređaji-i-oprema-na-vozilima-u-saobraćaju-na-putevima.pdf",
  },
  {
    name: "Pravilnik o načinu regulisanja saobraćaja na putevima u zoni radova",
    file: "Pravilnik-o-načinu-regulisanja-saobraćaja-na-putevima-u-zoni-radova1.pdf",
  },
  {
    name: "Pravilnik o tehničkim sredstvima za usporavanje saobraćaja na putu",
    file: "Pravilnik-o-tehničkim-sredstvima-za-usporavanje-saobraćaja-na-putu1.pdf",
  },
  {
    name: "Pravilnik o kriterijumima za ugradnju tehničkih sredstava za usporavanje saobraćaja na putu",
    file: "Pravilnik-o-kriterijumima-za-ugradnju-tehničkih-sredstava-za-usporavanje-saobraćaja-na-putu1.pdf",
  },
  {
    name: "Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti i drugi elementi javnog puta",
    file: "Pravilnik-o-uslovima-koje-sa-aspekta-bezbednosti-saobraćaja-moraju-da-ispunjavaju-putni-objekti-i-drugi-elementi-javnog-puta.pdf",
  },
  {
    name: "Pravilnik o načinu obavljanja vanrednog prevoza",
    file: "Pravilnik-o-načinu-obavljanja-vanrednog-prevoza.pdf",
  },
  {
    name: "Pravilnik o načinu transporta opasnog tereta u drumskom saobraćaju",
    file: "Pravilnik-o-načinu-transporta-opasnog-tereta-u-drumskom-saobraćaju.pdf",
  },
  {
    name: "Pravilnik o načinu korišćenja tahografa",
    file: "Pravilnik-o-načinu-korišćenja-tahografa.pdf",
  },
  {
    name: "Pravilnik o osnovnim uslovima koje tunel na javnom putu mora da ispunjava sa gledišta bezbednosti saobraćaja i podobnosti puta za odvijanje saobraćaja",
    file: "Pravilnik-o-osnovnim-uslovima-koje-tunel-na-javnom-putu-mora-da-ispunjava-sa-gledišta-bezbednosti-saobraćaja-i-podobnosti-puta-za-odvijanje-saobraćaja.pdf",
  },
  {
    name: "Pravilnik o načinu ukrštanja železničke pruge i puta",
    file: "Pravilnik-o-načinu-ukrštanja-železničke-pruge-i-puta.pdf",
  },
  {
    name: "Pravilnik o obeležavanju CWZ",
    file: "11-DEC-2014-Pravilnik-o-obelezavanju-CWZ.pdf",
  },
  {
    name: "Daljinar za međumesni saobraćaj",
    file: "Daljinar-za-medjumesni-saobracaj.pdf",
  },
  {
    name: "Opšti uslovi poslovanja autobuskih stanica",
    file: "Opsti-uslovi-poslovanja-autobuskih-stanica.pdf",
  },
  {
    name: "Opšti uslovi prevoza u međumesnom drumskom prevozu putnika",
    file: "Opsti-uslovi-prevoza-u-medjumesnom-drumskom-prevozu-putnika.pdf",
  },
  {
    name: "Pravilnik o ispitivanju vozila",
    file: "Pravilnik-o-ispitivanju-vozila.pdf",
  },
  {
    name: "Pravilnik o izgledu i načinu postavljanja znaka za obeležavanje vozila kojim se vrši organizovan prevoz dece",
    file: "Pravilnik-o-izgledu-i-načinu-postavljanja-znaka-za-obeležavanje-vozila-kojim-se-vrši-organizovan-prevoz-dece.pdf",
  },
  {
    name: "Pravilnik o izgledu sadržini i korišćenju službenog odela i službene legitimacije inspektora za državne puteve",
    file: "Pravilnik-o-izgledu-sadržini-i-korišćenju-službenog-odela-i-službene-legitimacije-inspektora-za-državne-puteve.pdf",
  },
  {
    name: "Pravilnik o izgledu, sadržini i korišćenju službenog odela republičkog inspektora za drumski saobraćaj",
    file: "Pravilnik-o-izgledu-sadrzini-i-koriscenju-sluzbenog-odela-republickog-inspektora-za-drumski-saobracaj.pdf",
  },
  {
    name: "Pravilnik o načinu oduzimanja, čuvanja i postupanja sa privremeno oduzetim vozilom koje je upotrebljeno za izvršenje prekršaja ili privrednog prestupa",
    file: "Pravilnik-o-nacinu-oduzimanja-cuvanja-i-postupanja-sa-privremeno-oduzetim-vozilom-koje-je-upotrebljeno-za-izvrsenje-prekrsaja-ili-privrednog-prestupa.pdf",
  },
  {
    name: "Pravilnik o obrascima dozvola za međunarodni javni prevoz putnika ili stvari",
    file: "Pravilnik-o-obrascima-dozvola-za-medjunarodni-javni-prevoz-putnika-ili-stvari.pdf",
  },
  {
    name: "Pravilnik o posebnoj oznaci na vozilu kojim upravlja lice sa probnom vozačkom dozvolom",
    file: "Pravilnik-o-posebnoj-oznaci-na-vozilu-kojim-upravlja-lice-sa-probnom-vozackom-dozvolom.pdf",
  },
  {
    name: "Pravilnik o radionicama za tahografe",
    file: "Pravilnik-o-radionicama-za-tahografe.pdf",
  },
  {
    name: "Pravilnik o sadržaju elaborata o ekonomskoj opravdanosti uspostavljanja linije, bonitetu domaćeg prevoznika i o načinu određivanja domaćeg prevoznika za uspostavljanje linije u međunarodnom javnom prevozu putnika",
    file: "Pravilnik-o-sadrzaju-elaborata-o-ekonomskoj-opravdanosti-uspostavljanja-linije-bonitetu-domaceg-prevoznika-i-o-nacinu-odredjivanja-domaceg-prevoznika-za-uspost.-linije-u-medj.-j.pdf",
  },
  {
    name: "Pravilnik o sadržini obrasca reda vožnje i sadržini načina vođenja registra i overe reda vožnje u međumesnom i međurepubličkom prevozu",
    file: "Pravilnik-o-sadrzini-obrasca-reda-voznje-i-sadrzini-nacina-vodjenja-registra-i-overe-reda-voznje-u-medumesnom-i-medjurepublickom-prevozu.pdf",
  },
  {
    name: "Pravilnik o sadržini obrasca vođenja evidencije polazaka autobusa",
    file: "Pravilnik-o-sadrzini-obrasca-vodjenja-evidencije-polazaka-autobusa.pdf",
  },
  {
    name: "Pravilnik o sadržini, izdavanju i vođenju putnih naloga i evidenciji o izdatim putnim nalozima",
    file: "Pravilnik-o-sadrzini-izdavanju-i-vodjenju-putnih-naloga-i-evidenciji-o-izdatim-putnim-nalozima_0.pdf",
  },
  {
    name: "Prilog 1. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "Prilog-1.-uz-Pravilnik-o-uslovima-koje-sa-aspekta-bezbednosti-saobraćaja-1.pdf",
  },
  {
    name: "Prilog 2. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "Prilog-2.-uz-Pravilnik-o-uslovima-koje-sa-aspekta-bezbednosti-saobraćaja.pdf",
  },
  {
    name: "Prilog 3. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "Prilog-3.-uz-Pravilnik-o-uslovima-koje-sa-aspekta-bezbednosti-saobraćaja.pdf",
  },
  {
    name: "Prilog 4. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "Prilog-4.-uz-Pravilnik-o-uslovima-koje-sa-aspekta-bezbednosti-saobraćaja.pdf",
  },
  {
    name: "Uredba o kategorizaciji državnih puteva",
    file: "Uredba-o-kategorizaciji-drzavnih-puteva.pdf",
  },
  {
    name: "Uredba o raspodeli stranih dozvola za međunarodni prevoz domaćim prevoznicima",
    file: "Uredba-o-raspodeli-stranih-dozvola-za-medjunarodni-prevoz-domacim-prevoznicima.pdf",
  },
  {
    name: "Uredba o ratifikaciji konvencije o ugovoru o međunarodnom drumskom prevozu putnika i prtljaga (CVR)",
    file: "Uredba-o-ratifikaciji-konvencije-o-ugovoru-o-medjunarodnom-drumskom-prevozu-putnika-i-prtljaga-CVR.pdf",
  },
  {
    name: "Uredba o ratifikaciji konvencije o ugovoru za međunarodni prevoz robe drumom (CMR)",
    file: "Uredba-o-ratifikaciji-konvencije-o-ugovoru-za-medjunarodni-prevoz-robe-drumom-CMR.pdf",
  },
  {
    name: "Uredba o vremenu odmora i upravljanja vozača motornih vozila kada obavljaju međunarodni prevoz, kao i o primeni sistema digitalnih tahografa",
    file: "Uredba-o-vremenu-odmora-i-upravljanja-vozača-motornih-vozila-kada-obavljaju-međunarodni-prevoz-kao-i-o-primeni-sistema-digitalnih-tahografa.pdf",
  },
];

const podzakonskaAktaArhiva = [
  {
    name: "Pravilnik o saobraćajnoj signalizaciji (stara verzija)",
    file: "Pravilnik-o-saobraćajnoj-signalizaciji.pdf",
  },
  {
    name: "Pravilnik o saobraćajnim znakovima na putevima",
    file: "Pravilnik-o-saobraćajnim-znakovima-na-putevima.pdf",
  },
  {
    name: "Pravilnik o podeli motornih i priključnih vozila i tehničkim uslovima za vozila u saobraćaju na putevima (stara verzija)",
    file: "Pravilnik-o-podeli-motornih-i-priključnih-vozila-i-tehničkim-uslovima-za-vozila-u-saobraćaju-na-putevima1.pdf",
  },
  {
    name: "Pravilnik o postavljanju natpisa pored državnih puteva i visini naknada za njihovo postavljanje",
    file: "Pravilnik-o-postavljanju-natpisa-pored-drzavnih-puteva-i-visini-naknada-za-njihovo-postavljanje.pdf",
  },
];

export default function SrbijaPodzakonskaAktaPage() {
  const { t, locale, switchLocale } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-end mb-4">
          <button
            onClick={switchLocale}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition-colors"
          >
            {locale === "sr" ? "EN" : "SR"}
          </button>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-heading font-bold mb-4 text-primary-500"
        >
          {t.dokumenta.srbija.podzakonska.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-primary-300 mb-12"
        >
          {t.dokumenta.srbija.podzakonska.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Važeća podzakonska akta */}
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.dokumenta.srbija.podzakonska.activeTitle}
            </h2>

            <div className="space-y-2">
              {podzakonskaAktaVazeca.map((akt, index) => (
                <Link
                  key={index}
                  href={`/pdfs/srbija/podzakonska-akta/${akt.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 hover:bg-primary-50 transition-colors rounded group"
                >
                  <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-primary-500 text-sm">
                    {akt.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Arhiva podzakonskih akata */}
          <div className="bg-primary-50 p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Podzakonska akta – nisu više u primeni
            </h2>

            <div className="space-y-2">
              {podzakonskaAktaArhiva.map((akt, index) => (
                <Link
                  key={index}
                  href={`/pdfs/srbija/podzakonska-akta/${akt.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 hover:bg-white transition-colors rounded group"
                >
                  <svg
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  <span className="text-gray-700 group-hover:text-primary-500 text-sm">
                    {akt.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-gray-700">
              <strong>Napomena:</strong> PDF dokumenta su dostupna za
              preuzimanje i otvaraju se u novom tabu.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

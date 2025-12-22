"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "@/hooks/useLocale";

const podzakonskaAktaVazeca = [
  {
    name: "Pravilnik o saobraćajnoj signalizaciji",
    file: "pravilnik-o-saobracajnoj-signalizaciji-novi.pdf",
  },
  {
    name: "Pravilnik o podeli motornih i priključnih vozila i tehničkim uslovima za vozila u saobraćaju na putevima",
    file: "pravilnik-o-podeli-motornih-i-prikljucnih-vozila-i-tehnickim-uslovima.pdf",
  },
  {
    name: "Pravilnik o dimenzijama, ukupnim masama i osovinskom opterećenju vozila i o osnovnim uslovima koje moraju da ispunjavaju uređaji i oprema na vozilima u saobraćaju na putevima",
    file: "pravilnik-o-dimenzijama-ukupnim-masama-i-osovinskom-opterecenju-vozila.pdf",
  },
  {
    name: "Pravilnik o načinu regulisanja saobraćaja na putevima u zoni radova",
    file: "pravilnik-o-nacinu-regulisanja-saobracaja-u-zoni-radova.pdf",
  },
  {
    name: "Pravilnik o tehničkim sredstvima za usporavanje saobraćaja na putu",
    file: "pravilnik-o-tehnickim-sredstvima-za-usporavanje-saobracaja.pdf",
  },
  {
    name: "Pravilnik o kriterijumima za ugradnju tehničkih sredstava za usporavanje saobraćaja na putu",
    file: "pravilnik-o-kriterijumima-za-ugradnju-tehnickih-sredstava-za-usporavanje.pdf",
  },
  {
    name: "Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti i drugi elementi javnog puta",
    file: "pravilnik-o-uslovima-bezbednosti-saobracaja-putni-objekti.pdf",
  },
  {
    name: "Pravilnik o načinu obavljanja vanrednog prevoza",
    file: "pravilnik-o-nacinu-obavljanja-vanrednog-prevoza.pdf",
  },
  {
    name: "Pravilnik o načinu transporta opasnog tereta u drumskom saobraćaju",
    file: "pravilnik-o-nacinu-transporta-opasnog-tereta.pdf",
  },
  {
    name: "Pravilnik o osnovnim uslovima koje tunel na javnom putu mora da ispunjava sa gledišta bezbednosti saobraćaja i podobnosti puta za odvijanje saobraćaja",
    file: "pravilnik-o-osnovnim-uslovima-za-tunel-na-javnom-putu.pdf",
  },
  {
    name: "Pravilnik o načinu ukrštanja železničke pruge i puta",
    file: "pravilnik-o-nacinu-ukrstanja-zeleznicke-pruge-i-puta.pdf",
  },
  {
    name: "Pravilnik o obeležavanju CWZ",
    file: "pravilnik-o-obelezavanju-cwz.pdf",
  },
  {
    name: "Daljinar za međumesni saobraćaj",
    file: "daljinar-za-medjumesni-saobracaj.pdf",
  },
  {
    name: "Opšti uslovi poslovanja autobuskih stanica",
    file: "opsti-uslovi-poslovanja-autobuskih-stanica.pdf",
  },
  {
    name: "Opšti uslovi prevoza u međumesnom drumskom prevozu putnika",
    file: "opsti-uslovi-prevoza-u-medjumesnom-drumskom-prevozu-putnika.pdf",
  },
  {
    name: "Pravilnik o ispitivanju vozila",
    file: "pravilnik-o-ispitivanju-vozila.pdf",
  },
  {
    name: "Pravilnik o izgledu i načinu postavljanja znaka za obeležavanje vozila kojim se vrši organizovan prevoz dece",
    file: "pravilnik-o-izgledu-i-nacinu-postavljanja-znaka-za-prevoz-dece.pdf",
  },
  {
    name: "Pravilnik o izgledu sadržini i korišćenju službenog odela i službene legitimacije inspektora za državne puteve",
    file: "pravilnik-o-izgledu-sluzbenog-odela-inspektora-za-drzavne-puteve.pdf",
  },
  {
    name: "Pravilnik o izgledu, sadržini i korišćenju službenog odela republičkog inspektora za drumski saobraćaj",
    file: "pravilnik-o-izgledu-sluzbenog-odela-republickog-inspektora-za-drumski-saobracaj.pdf",
  },
  {
    name: "Pravilnik o načinu oduzimanja, čuvanja i postupanja sa privremeno oduzetim vozilom koje je upotrebljeno za izvršenje prekršaja ili privrednog prestupa",
    file: "pravilnik-o-nacinu-oduzimanja-cuvanja-privremeno-oduzetog-vozila.pdf",
  },
  {
    name: "Pravilnik o obrascima dozvola za međunarodni javni prevoz putnika ili stvari",
    file: "pravilnik-o-obrascima-dozvola-za-medjunarodni-javni-prevoz.pdf",
  },
  {
    name: "Pravilnik o posebnoj oznaci na vozilu kojim upravlja lice sa probnom vozačkom dozvolom",
    file: "pravilnik-o-posebnoj-oznaci-vozila-sa-probnom-dozvolom.pdf",
  },
  {
    name: "Pravilnik o radionicama za tahografe",
    file: "pravilnik-o-radionicama-za-tahografe.pdf",
  },
  {
    name: "Pravilnik o sadržaju elaborata o ekonomskoj opravdanosti uspostavljanja linije, bonitetu domaćeg prevoznika i o načinu određivanja domaćeg prevoznika za uspostavljanje linije u međunarodnom javnom prevozu putnika",
    file: "pravilnik-o-sadrzaju-elaborata-ekonomske-opravdanosti-uspostavljanja-linije.pdf",
  },
  {
    name: "Pravilnik o sadržini obrasca reda vožnje i sadržini načina vođenja registra i overe reda vožnje u međumesnom i međurepubličkom prevozu",
    file: "pravilnik-o-sadrzini-obrasca-reda-voznje-i-registra.pdf",
  },
  {
    name: "Pravilnik o sadržini obrasca vođenja evidencije polazaka autobusa",
    file: "pravilnik-o-sadrzini-obrasca-evidencije-polazaka-autobusa.pdf",
  },
  {
    name: "Pravilnik o sadržini, izdavanju i vođenju putnih naloga i evidenciji o izdatim putnim nalozima",
    file: "pravilnik-o-sadrzini-izdavanju-i-vodjenju-putnih-naloga.pdf",
  },
  {
    name: "Prilog 1. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "prilog-1-uz-pravilnik-o-uslovima-bezbednosti-saobracaja.pdf",
  },
  {
    name: "Prilog 2. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "prilog-2-uz-pravilnik-o-uslovima-bezbednosti-saobracaja.pdf",
  },
  {
    name: "Prilog 3. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "prilog-3-uz-pravilnik-o-uslovima-bezbednosti-saobracaja.pdf",
  },
  {
    name: "Prilog 4. uz Pravilnik o uslovima koje sa aspekta bezbednosti saobraćaja moraju da ispunjavaju putni objekti ili drugi elementi javnog puta",
    file: "prilog-4-uz-pravilnik-o-uslovima-bezbednosti-saobracaja.pdf",
  },
  {
    name: "Uredba o kategorizaciji državnih puteva",
    file: "uredba-o-kategorizaciji-drzavnih-puteva.pdf",
  },
  {
    name: "Uredba o raspodeli stranih dozvola za međunarodni prevoz domaćim prevoznicima",
    file: "uredba-o-raspodeli-stranih-dozvola-za-medjunarodni-prevoz.pdf",
  },
  {
    name: "Uredba o ratifikaciji konvencije o ugovoru o međunarodnom drumskom prevozu putnika i prtljaga (CVR)",
    file: "uredba-o-ratifikaciji-konvencije-cvr-prevoz-putnika-i-prtljaga.pdf",
  },
  {
    name: "Uredba o ratifikaciji konvencije o ugovoru za međunarodni prevoz robe drumom (CMR)",
    file: "uredba-o-ratifikaciji-konvencije-cmr-prevoz-robe-drumom.pdf",
  },
  {
    name: "Uredba o vremenu odmora i upravljanja vozača motornih vozila kada obavljaju međunarodni prevoz, kao i o primeni sistema digitalnih tahografa",
    file: "uredba-o-vremenu-odmora-i-upravljanja-vozaca-medjunarodni-prevoz.pdf",
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
  const { t } = useLocale();

  return (
    <div className="min-h-screen py-20 px-6 pr-6 md:pr-40">
      <div className="container mx-auto max-w-4xl">
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
                <div
                  key={index}
                  className="border-l-4 border-primary-400 pl-4 py-2"
                >
                  <Link
                    href={`/pdfs/srbija/podzakonska-akta/${akt.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 transition-colors"
                  >
                    {akt.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Arhiva podzakonskih akata */}
          <div className="bg-primary-50 p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              {t.dokumenta.srbija.podzakonska.inactiveTitle}
            </h2>

            <div className="space-y-2">
              {podzakonskaAktaArhiva.map((akt, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary-400 pl-4 py-2 bg-white"
                >
                  <Link
                    href={`/pdfs/srbija/podzakonska-akta/${akt.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-primary-500 transition-colors text-sm"
                  >
                    {akt.name}
                  </Link>
                </div>
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

"use client";

export default function EvropaPage() {
  return (
    <div className="min-h-screen py-20 px-6 pr-6 md:pr-40 md:ml-40">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-heading font-bold mb-8 text-primary-500">
          Evropa i region
        </h1>
        <p className="text-xl text-primary-300 mb-12">
          Dokumenti i propisi koji se odnose na zemlje Evrope i region
        </p>

        <div className="space-y-8">
          {/* Zakonska regulativa */}
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Zakonska regulativa
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Opšti propisi i zakonska regulativa za zemlje Evrope
            </p>
            <div className="border-l-4 border-primary-400 pl-4 py-2">
              <a
                href="/dokumenta/zakonska-regulativa"
                className="text-gray-700 hover:text-primary-500 transition-colors"
              >
                Pogledaj propise
              </a>
            </div>
          </div>

          {/* Kazne u zemljama Evrope */}
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Kazne za pojedine saobraćajne prekršaje u zemljama Evrope
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pregled kazni za najčešće saobraćajne prekršaje u evropskim
              zemljama
            </p>
            <div className="border-l-4 border-primary-400 pl-4 py-2">
              <a
                href="/pdfs/Kazne-za-pojedine-saobracajne-prekrsaje-u-zemljama-Evrope.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-500 transition-colors"
              >
                Preuzmi PDF - Kazne za prekršaje
              </a>
            </div>
          </div>

          {/* Zimska oprema */}
          <div className="bg-white p-8">
            <h2 className="text-3xl font-heading font-bold mb-6 text-primary-500">
              Zimska oprema u zemljama Evrope
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Propisi o zimskoj opremi i njihova primena u evropskim zemljama
            </p>
            <div className="border-l-4 border-primary-400 pl-4 py-2">
              <a
                href="/pdfs/Zimska-oprema-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary-500 transition-colors"
              >
                Preuzmi PDF - Zimska oprema
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

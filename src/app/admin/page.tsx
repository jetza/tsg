export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-500 mb-4">
            Admin Panel
          </h1>
          <p className="text-lg text-gray-600">Upravljanje sadržajem sajta</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Posts */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Blog Postovi
              </h2>
              <svg
                className="w-8 h-8 text-primary-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Kreiranje i uređivanje blog postova
            </p>
            <button className="w-full bg-primary-400 text-white py-2 px-4 rounded hover:bg-primary-500 transition-colors">
              Upravljaj postovima
            </button>
          </div>

          {/* Dokumenti */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Dokumenti</h2>
              <svg
                className="w-8 h-8 text-primary-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Upload i organizacija PDF dokumenata
            </p>
            <button className="w-full bg-primary-300 text-white py-2 px-4 rounded hover:bg-primary-400 transition-colors">
              Upravljaj dokumentima
            </button>
          </div>

          {/* Projekti */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Projekti</h2>
              <svg
                className="w-8 h-8 text-primary-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">Dodavanje novih projekata</p>
            <button className="w-full bg-primary-200 text-white py-2 px-4 rounded hover:bg-primary-300 transition-colors">
              Upravljaj projektima
            </button>
          </div>

          {/* Korisnici */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Korisnici</h2>
              <svg
                className="w-8 h-8 text-primary-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Upravljanje korisnicima i pristupima
            </p>
            <button className="w-full bg-primary-400 text-white py-2 px-4 rounded hover:bg-primary-500 transition-colors">
              Upravljaj korisnicima
            </button>
          </div>

          {/* Media */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Media</h2>
              <svg
                className="w-8 h-8 text-primary-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">Galerija slika i medija</p>
            <button className="w-full bg-primary-300 text-white py-2 px-4 rounded hover:bg-primary-400 transition-colors">
              Upravljaj medijima
            </button>
          </div>

          {/* Settings */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-t-4 border-primary-500">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Podešavanja
              </h2>
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">Opšta podešavanja sajta</p>
            <button className="w-full bg-primary-500 text-white py-2 px-4 rounded hover:bg-primary-600 transition-colors">
              Podesi sajt
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-primary-500 mb-2">0</div>
            <div className="text-gray-600 text-sm">Blog postova</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">49</div>
            <div className="text-gray-600 text-sm">PDF dokumenata</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-primary-300 mb-2">0</div>
            <div className="text-gray-600 text-sm">Korisnika</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-primary-200 mb-2">0</div>
            <div className="text-gray-600 text-sm">Slika</div>
          </div>
        </div>
      </div>
    </div>
  );
}

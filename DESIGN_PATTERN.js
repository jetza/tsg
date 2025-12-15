// Minimalist Design Pattern for TSG Serbia

// ✅ DO USE:
// - Plain backgrounds: bg-white, bg-primary-50
// - No rounded corners
// - No shadows
// - Bold typography: text-4xl, text-5xl, font-bold
// - Ample white space: py-20, py-24, mb-12
// - Simple borders: border-2, border-l-4
// - Color transitions on hover: hover:bg-primary-500 hover:text-white

// ❌ DON'T USE:
// - rounded-* classes
// - shadow-* classes
// - gradient backgrounds
// - Complex animations
// - Images (unless essential)

// EXAMPLE STRUCTURE:
/*
<div className="min-h-screen bg-white">
  <section className="px-8 py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary-500">
        Title
      </h1>
      
      <p className="text-2xl text-gray-700">
        Content
      </p>
    </motion.div>
  </section>
  
  <section className="px-8 py-24 bg-primary-50">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-px bg-gray-300 border-2 border-gray-300">
        <div className="bg-white p-16 hover:bg-primary-500 hover:text-white transition-colors">
          <h3 className="text-3xl font-heading font-bold mb-4">Item</h3>
          <p className="text-xl">Description</p>
        </div>
      </div>
    </div>
  </section>
</div>
*/

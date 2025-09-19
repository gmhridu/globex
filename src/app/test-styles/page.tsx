export default function TestStylesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-dark mb-8 text-center">
            Style Test Page
          </h1>

          {/* Button Tests */}
          <div className="section bg-white rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Button Styles</h2>
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full border-2 bg-yellow-400 text-black border-yellow-400 hover:bg-white hover:text-black transition-all duration-300">
                Primary Button
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full border-2 bg-transparent text-blue-600 border-blue-600 hover:bg-blue-900 hover:text-white transition-all duration-300">
                Secondary Button
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold uppercase tracking-wider rounded-full border-2 bg-slate-900 text-white border-slate-900 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                Dark Button
              </button>
            </div>
          </div>

          {/* Color Tests */}
          <div className="section bg-white rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Color Utilities
            </h2>
            <div className="space-y-4">
              <p className="text-yellow-500">Primary color text</p>
              <p className="text-blue-600">Secondary color text</p>
              <p className="text-slate-900">Dark color text</p>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-yellow-400 p-4 rounded-lg">
                  <span className="text-black font-semibold">Primary BG</span>
                </div>
                <div className="bg-blue-600 p-4 rounded-lg">
                  <span className="text-white font-semibold">Secondary BG</span>
                </div>
                <div className="bg-slate-900 p-4 rounded-lg">
                  <span className="text-white font-semibold">Dark BG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Tests */}
          <div className="section bg-white rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-dark mb-6">Form Styles</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Test input field"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm transition-colors focus:outline-none focus:border-yellow-400"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm transition-colors focus:outline-none focus:border-yellow-400 pr-10 bg-white">
                <option>Select an option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <textarea
                placeholder="Test textarea"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm transition-colors focus:outline-none focus:border-yellow-400 min-h-[120px] resize-y"
              ></textarea>
            </div>
          </div>

          {/* Card Tests */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Card Component
              </h3>
              <p className="text-gray-600">
                This is a test card with hover effects.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Another Card
              </h3>
              <p className="text-gray-600">
                Cards should have proper spacing and shadows.
              </p>
            </div>
          </div>

          {/* Animation Tests */}
          <div className="section bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-dark mb-6">
              Animation Tests
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="animate-pulse p-4 bg-yellow-100 rounded-lg">
                <span className="font-semibold">Fade In Animation</span>
              </div>
              <div className="animate-bounce p-4 bg-blue-100 rounded-lg">
                <span className="font-semibold">Slide In Animation</span>
              </div>
              <div className="animate-pulse p-4 bg-slate-100 rounded-lg">
                <span className="font-semibold">Gentle Bounce</span>
              </div>
            </div>
          </div>

          {/* Typography Tests */}
          <div className="section bg-white rounded-3xl p-8 mt-8">
            <h1>H1 Heading</h1>
            <h2>H2 Heading</h2>
            <h3>H3 Heading</h3>
            <h4>H4 Heading</h4>
            <p>This is a paragraph with regular text styling.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

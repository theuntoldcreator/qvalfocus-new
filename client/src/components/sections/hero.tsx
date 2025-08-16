export function Hero() {
  return (
    <section className="pt-32 pb-12 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-100 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 z-10">
              <div className="inline-block bg-white rounded-full px-4 py-1 text-sm font-medium text-slate-700 mb-4">
                Staffing & Project Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans text-slate-900">
                Achieve Your Goals with Expert Talent
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-md">
                We connect visionary companies with exceptional talent in Life Sciences and IT, driving innovation and success.
              </p>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Team of professionals collaborating"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
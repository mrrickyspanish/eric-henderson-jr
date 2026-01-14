export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-3">LaMarin Powell</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Class of 2028 dual-sport athlete. Running Back and Guard committed to excellence on and off the field.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#highlights" className="text-slate-400 text-sm hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-1">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-slate-400 text-sm hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-1">
                  Schedule
                </a>
              </li>
              <li>
                <a href="https://www.hudl.com/profile/22844940/LaMarin-Powell/about" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-1">
                  Hudl Profile
                </a>
              </li>
              <li>
                <a href="https://www.maxpreps.com/il/elgin/elgin-maroons/athletes/lamarin-powell/?careerid=m9ckev6ja8455" target="_blank" rel="noopener noreferrer" className="text-slate-400 text-sm hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded px-1">
                  MaxPreps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
            <p className="text-slate-400 text-sm mb-2">
              Marcia Riley-Harris<br />
              Elgin, Illinois
            </p>
            <p className="text-slate-400 text-sm mb-2">
              Class of 2028
            </p>
            <a href="mailto:Jmelprh22@gmail.com" className="text-slate-400 text-sm hover:text-white transition">
              Jmelprh22@gmail.com
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} LaMarin Powell. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-500 text-sm hover:text-slate-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-400 transition">
                Terms of Service
              </a>
              <a href="#" className="text-slate-500 text-sm hover:text-slate-400 transition">
                Accessibility
              </a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-600">
              Stats updated: Dec 6, 2025
            </p>
          </div>

          <div className="mt-4 flex justify-center">
            <a 
              href="https://creativeeyestudios.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-800 hover:text-slate-400 transition-all duration-500 group"
            >
              <span className="text-[10px] opacity-40 group-hover:opacity-100 transition-opacity duration-500">Meticulously crafted by</span>
              <span className="text-[10px] font-semibold opacity-40 group-hover:opacity-100 group-hover:text-slate-200 transition-all duration-500">
                Creative Eye Studios
              </span>
              <span className="text-sm opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">👁️</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

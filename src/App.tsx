import React from 'react';
import { Phone, Home, User, Mail, MapPin, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <User className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-semibold text-gray-900">Ungdomsstödet</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hem" className="text-gray-700 hover:text-blue-600 transition-colors">Hem</a>
              <a href="#tjanster" className="text-gray-700 hover:text-blue-600 transition-colors">Tjänster</a>
              <a href="#om-oss" className="text-gray-700 hover:text-blue-600 transition-colors">Om oss</a>
              <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
              <a href="tel:+46700000000" className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors">
                Ring nu
              </a>
            </div>
            
            <button className="md:hidden p-2">
              <div className="w-6 h-0.5 bg-gray-900 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-900 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-900"></div>
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section with Spline */}
        <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Vi finns här för <span className="text-blue-600">dig</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                  Professionellt stöd och hjälp för ungdomar i alla livssituationer. Kostnadsfritt, konfidentiellt och tillgängligt när du behöver det.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a 
                    href="tel:+46700000000" 
                    className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Ring nu - 070-000 00 00
                  </a>
                  <a 
                    href="#kontakt" 
                    className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Skicka meddelande
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">År av erfarenhet</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600">5000+</div>
                    <div className="text-sm text-gray-600">Ungdomar hjälpta</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-gray-600">Akut stöd</div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full">
                  <div className="flex justify-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                      <User className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '1s'}}>
                      <Home className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Professionellt stöd</h3>
                    <p className="text-gray-600">Erfarna rådgivare, psykologer och socialarbetare som förstår ungdomars utmaningar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100 to-transparent opacity-50 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-green-100 to-transparent opacity-30 -z-10"></div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-500 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-4">
              <Phone className="w-6 h-6" />
              <div className="text-center">
                <h3 className="font-semibold">Akut stöd</h3>
                <p>Ring <a href="tel:+46700000000" className="underline font-bold">070-000 00 00</a> för omedelbar hjälp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="tjanster" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Våra tjänster</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Vi erbjuder olika former av stöd anpassat efter dina behov</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="service-card">
                <Home className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Bosocialt stöd 21+ (ensamhushåll)</h3>
                <p className="text-gray-600 mb-6">Stöd för vuxna som behöver hjälp med boende och vardagsaktiviteter.</p>
                <a href="#kontakt" className="text-blue-600 font-medium hover:text-blue-700">Boka tid →</a>
              </div>
              
              <div className="service-card">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <Home className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Halvvägshus 
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full ml-2">Under uppbyggnad</span>
                </h3>
                <p className="text-gray-600 mb-4">Strukturerat boende med stöd för personer som behöver hjälp att återintegreras i samhället.</p>
                <p className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg mb-6">Denna tjänst är för närvarande under uppbyggnad. Kontakta oss för mer information.</p>
                <a href="#kontakt" className="text-blue-600 font-medium hover:text-blue-700">Kontakta oss →</a>
              </div>
              
              <div className="service-card">
                <User className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-semibold mb-4">Familjhem/jourhem</h3>
                <p className="text-gray-600 mb-6">Tillfälligt eller långsiktigt boende i familjehem för barn och ungdomar.</p>
                <a href="#kontakt" className="text-blue-600 font-medium hover:text-blue-700">Kontakta oss →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kontakta oss</h2>
              <p className="text-xl text-gray-600">Vi finns här för dig - ta kontakt när du behöver stöd</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefon</h4>
                    <p><a href="tel:+46700000000" className="text-blue-600 hover:underline">070-000 00 00</a></p>
                    <p className="text-sm text-gray-500">Vardagar 9:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">E-post</h4>
                    <p><a href="mailto:info@ungdomsstodet.se" className="text-blue-600 hover:underline">info@ungdomsstodet.se</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Adress</h4>
                    <p className="text-gray-600">Storgatan 123<br />123 45 Stockholm</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Skicka meddelande</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Namn *</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-post *</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meddelande *</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-6 h-6" />
                <span className="text-lg font-semibold">Ungdomsstödet</span>
              </div>
              <p className="text-gray-400">Vi erbjuder professionellt stöd för ungdomar i alla livssituationer.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Tjänster</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#tjanster" className="hover:text-white">Bosocialt stöd 21+</a></li>
                <li><a href="#tjanster" className="hover:text-white">Halvvägshus</a></li>
                <li><a href="#tjanster" className="hover:text-white">Familjhem/jourhem</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Information</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#om-oss" className="hover:text-white">Om oss</a></li>
                <li><a href="#" className="hover:text-white">Sekretess</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 <a href="tel:+46700000000" className="hover:text-white">070-000 00 00</a></p>
                <p>✉️ <a href="mailto:info@ungdomsstodet.se" className="hover:text-white">info@ungdomsstodet.se</a></p>
                <p>📍 Storgatan 123, Stockholm</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ungdomsstödet. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
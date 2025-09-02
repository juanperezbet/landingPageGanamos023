import { Gift, Shield, Star, Users, Clock, CheckCircle, Award, TrendingUp, ThumbsUp } from "lucide-react"

export default function WhatsAppPage() {
  return (
    <div className="max-w-md mx-auto lg:max-w-lg xl:max-w-xl bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col font-sans">
      {/* WhatsApp Header with Verification */}
      <div className="bg-white shadow-lg border-b-4 border-green-500">
        <div className="flex justify-center items-center py-4 sm:py-6 lg:py-8">
          <div className="flex items-center">
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-full p-2 mr-3 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
              </svg>
            </div>
            <div>
              <span className="text-green-600 text-2xl sm:text-3xl lg:text-4xl font-bold">WhatsApp</span>
              <div className="flex items-center mt-1">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-500 mr-1" />
                <span className="text-blue-600 text-xs sm:text-sm lg:text-base font-medium">Verificado</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ganamos Logo with Enhanced Design */}
      <div className="flex justify-center py-6 sm:py-8 lg:py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="relative">
          <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full shadow-2xl border-4 border-white overflow-hidden">
            <img src="/images/ganamos-logo.png" alt="Ganamos Biz 023 Logo" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 lg:-top-3 lg:-right-3 bg-green-500 rounded-full p-1.5 sm:p-2 lg:p-3 shadow-lg">
            <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
          </div>
        </div>
      </div>

      {/* Enhanced Verification Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 mx-3 sm:mx-4 lg:mx-6 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-green-200 mb-3 sm:mb-4 lg:mb-6">
        <div className="text-center">
          <div className="flex justify-center items-center mb-2 sm:mb-3 lg:mb-4">
            <div className="bg-green-500 rounded-full p-1.5 sm:p-2 lg:p-3 mr-2 shadow-md">
              <Shield className="h-4 w-4 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
            </div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-800">Plataforma Verificada</h2>
            <div className="bg-green-500 rounded-full p-1.5 sm:p-2 lg:p-3 ml-2 shadow-md">
              <Award className="h-4 w-4 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-3 sm:mb-4 lg:mb-6">
            <div className="flex items-center bg-white rounded-full px-2 sm:px-3 lg:px-4 py-1 shadow-sm">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-500 mr-1" />
              <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">SSL Seguro</span>
            </div>
            <div className="flex items-center bg-white rounded-full px-2 sm:px-3 lg:px-4 py-1 shadow-sm">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-green-500 mr-1" />
              <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">Licenciado</span>
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl text-green-600 font-bold">Entretenimiento de Confianza</h3>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-1 sm:mt-2">
            Regulado y auditado por autoridades internacionales
          </p>
        </div>
      </div>

      {/* Enhanced Connection Message */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 mx-3 sm:mx-4 lg:mx-6 my-3 sm:my-4 lg:my-6 p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl border border-blue-200 shadow-lg">
        <div className="flex items-center justify-center mb-2 sm:mb-3">
          <div className="animate-pulse bg-green-500 rounded-full w-2 h-2 sm:w-3 sm:h-3 mr-2"></div>
          <Clock className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-blue-600 mr-2" />
          <span className="text-blue-700 text-sm sm:text-base lg:text-lg font-semibold">Conectando en tiempo real</span>
        </div>
        <p className="text-gray-800 text-base sm:text-lg lg:text-xl text-center font-medium">
          Te estamos conectando con nuestro equipo de expertos vía WhatsApp.
        </p>
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base text-center mt-1 sm:mt-2">
          Respuesta garantizada en menos de 30 segundos
        </p>
      </div>

      {/* Enhanced WhatsApp Button */}
      <div className="flex justify-center px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <a
          href="https://wa.me/5492236768882?text=Hola%21%20Me%20gustaria%20crear%20un%20usuario%20para%20comenzar%20a%20ganar"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-lg sm:text-xl lg:text-2xl font-bold py-3 px-8 sm:py-4 sm:px-12 lg:py-5 lg:px-16 rounded-xl sm:rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-200 border-2 border-green-400 inline-block w-full sm:w-auto text-center"
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 mr-2 sm:mr-3"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
            </svg>
            <span className="whitespace-nowrap">Ir a WhatsApp Ahora</span>
          </div>
        </a>
      </div>

      {/* Enhanced Clients Section */}
      <div className="flex justify-center px-3 sm:px-4 lg:px-6 py-1 sm:py-2">
        <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl sm:rounded-2xl py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 text-white shadow-xl border border-green-400 w-full sm:w-auto">
          <div className="flex items-center justify-center sm:justify-start">
            <div className="flex -space-x-1 sm:-space-x-2 mr-2 sm:mr-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 sm:border-3 border-white shadow-lg flex items-center justify-center">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 sm:border-3 border-white shadow-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 sm:border-3 border-white shadow-lg flex items-center justify-center text-xs sm:text-sm lg:text-base font-bold">
                +
              </div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-bold text-base sm:text-lg lg:text-xl">+10.000 CLIENTES</div>
              <div className="text-xs sm:text-sm lg:text-base opacity-90">GANANDO todos los días</div>
            </div>
          </div>
        </div>
      </div>

      {/* Completely Redesigned Trustpilot Section */}
      <div className="mx-3 sm:mx-4 lg:mx-6 my-4 sm:my-6 lg:my-8">
        <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 border-green-100">
          {/* Trustpilot Header */}
          <div className="bg-[#00b67a] p-2 sm:p-3 lg:p-4 flex items-center justify-between">
            <div className="flex items-center">
              <img src="/images/trustpilot-logo.png" alt="Trustpilot" className="h-4 sm:h-6 lg:h-8 w-auto" />
              <div className="ml-1 sm:ml-2 lg:ml-3 text-white text-sm sm:text-base lg:text-lg font-bold">
                Reseñas Verificadas
              </div>
            </div>
            <div className="bg-white rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 lg:px-3 lg:py-1.5 text-xs sm:text-sm lg:text-base font-bold text-[#00b67a] flex items-center">
              <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 mr-0.5 sm:mr-1" />
              OFICIAL
            </div>
          </div>

          {/* Rating Overview */}
          <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">4.9/5</div>
                <div className="flex mt-1">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#00b67a] fill-current" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#00b67a] fill-current" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#00b67a] fill-current" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#00b67a] fill-current" />
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#00b67a] fill-current" strokeWidth={1} />
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-600">Basado en</div>
                <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-800">2,847 reseñas</div>
                <div className="text-xs sm:text-sm text-gray-500">Última reseña: hace 2 horas</div>
              </div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 border-b border-gray-100 bg-gray-50">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center justify-between">
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 w-16 sm:w-20">Excelente</div>
                <div className="flex-1 mx-2 sm:mx-3">
                  <div className="h-1.5 sm:h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#00b67a] rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-800 w-8 sm:w-10 text-right">
                  92%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 w-16 sm:w-20">Bueno</div>
                <div className="flex-1 mx-2 sm:mx-3">
                  <div className="h-1.5 sm:h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#73cf11] rounded-full" style={{ width: "6%" }}></div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-800 w-8 sm:w-10 text-right">
                  6%
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-600 w-16 sm:w-20">Regular</div>
                <div className="flex-1 mx-2 sm:mx-3">
                  <div className="h-1.5 sm:h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ffb900] rounded-full" style={{ width: "2%" }}></div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-800 w-8 sm:w-10 text-right">
                  2%
                </div>
              </div>
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="space-y-3 sm:space-y-4">
              <div className="pb-2 sm:pb-3 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs sm:text-sm lg:text-base mr-2">
                      M
                    </div>
                    <div className="font-medium text-sm sm:text-base lg:text-lg">María L.</div>
                  </div>
                  <div className="flex">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700">
                  "Increíble servicio, gané en mi primera maxwin y el retiro fue instantáneo. ¡Muy recomendado!"
                </div>
                <div className="flex items-center mt-1 text-xs sm:text-sm text-gray-500">
                  <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                  <span>Hace 2 horas</span>
                  <div className="mx-1">•</div>
                  <div className="flex items-center">
                    <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 text-green-500 mr-1" />
                    <span>Cliente verificado</span>
                  </div>
                </div>
              </div>

              <div className="pb-2 sm:pb-3 border-b border-gray-100">
                <div className="flex items-center justify-between mb-1 sm:mb-2">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs sm:text-sm lg:text-base mr-2">
                      J
                    </div>
                    <div className="font-medium text-sm sm:text-base lg:text-lg">Juan P.</div>
                  </div>
                  <div className="flex">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] fill-current" />
                  </div>
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-700">
                  "Excelente atención al cliente. Me ayudaron a crear mi usuario y empecé a jugar de inmediato."
                </div>
                <div className="flex items-center mt-1 text-xs sm:text-sm text-gray-500">
                  <Clock className="h-2 w-2 sm:h-3 sm:w-3 mr-1" />
                  <span>Hace 1 día</span>
                  <div className="mx-1">•</div>
                  <div className="flex items-center">
                    <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 text-green-500 mr-1" />
                    <span>Cliente verificado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center mt-3 sm:mt-4">
              <a href="#" className="text-[#00b67a] text-xs sm:text-sm lg:text-base font-medium flex items-center">
                Ver todas las reseñas
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Trustpilot Footer */}
          <div className="bg-gray-50 p-2 sm:p-3 lg:p-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 gap-2 sm:gap-0">
            <div className="flex items-center">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-gray-500 mr-1" />
              <span className="text-xs sm:text-sm lg:text-base text-gray-500">Reseñas verificadas por Trustpilot</span>
            </div>
            <div className="flex items-center">
              <ThumbsUp className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-[#00b67a] mr-1" />
              <span className="text-xs sm:text-sm lg:text-base font-medium text-[#00b67a]">98% Recomendado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Winner Notification */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 mx-3 sm:mx-4 lg:mx-6 my-3 sm:my-4 lg:my-6 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-2xl border border-gray-700">
        <div className="flex items-center">
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl mr-3 sm:mr-4 shadow-lg">
            <div className="text-white text-xs sm:text-sm lg:text-base font-bold text-center leading-tight">
              <div>CREAMOS</div>
              <div>TU</div>
              <div>USUARIO</div>
              <div className="text-yellow-300">GRATIS</div>
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center mb-1 sm:mb-2">
              <div className="text-white text-base sm:text-xl lg:text-2xl font-bold mr-0 sm:mr-2 truncate">
                Exequiel Torres
              </div>
              <div className="bg-green-500 rounded-full px-2 py-1 mt-1 sm:mt-0 self-start">
                <span className="text-white text-xs sm:text-sm font-bold">GANADOR</span>
              </div>
            </div>
            <div className="flex items-center mb-1 sm:mb-2">
              <Gift className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-yellow-400 mr-1" />
              <span className="text-yellow-400 text-sm sm:text-base lg:text-lg font-bold">Premio PAGADO 200.000$</span>
            </div>
            <div className="text-gray-400 text-xs sm:text-sm lg:text-base flex items-center">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mr-1 sm:mr-2 animate-pulse"></div>
              <span>📍 Desde Jujuy • hace 20 minutos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-6 px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
        <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-md border border-gray-200 flex-1 min-w-0 sm:flex-none">
          <div className="text-center">
            <Shield className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-600 mx-auto mb-1" />
            <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">256-bit SSL</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-md border border-gray-200 flex-1 min-w-0 sm:flex-none">
          <div className="text-center">
            <Award className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-blue-600 mx-auto mb-1" />
            <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">Licencia MGA</div>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2 sm:p-3 lg:p-4 shadow-md border border-gray-200 flex-1 min-w-0 sm:flex-none">
          <div className="text-center">
            <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-600 mx-auto mb-1" />
            <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-700">Juego Seguro</div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bonus Banner */}
      <div className="mt-auto bg-gradient-to-r from-green-500 to-emerald-600 p-3 sm:p-4 lg:p-6 text-white shadow-2xl">
        <div className="flex items-center justify-center">
          <div className="animate-bounce mr-2 sm:mr-3">
            <Gift className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
          </div>
          <div className="text-center">
            <div className="font-bold text-base sm:text-lg lg:text-xl">🎁 BONO ACTIVO</div>
            <div className="text-xs sm:text-sm lg:text-base opacity-90">¡Solicítalo ahora por WhatsApp!</div>
          </div>
          <div className="animate-bounce ml-2 sm:mr-3">
            <Gift className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { Heart, MessageCircle, Sparkles, Shield, Clock, Users, CheckCircle, Star, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header/Navbar */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-pink-100">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" fill="white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Psicólogo do Amor
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <a href="#beneficios" className="text-gray-700 hover:text-pink-600 transition-colors">Benefícios</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-pink-600 transition-colors">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-pink-600 transition-colors">Depoimentos</a>
              <a href="#precos" className="text-gray-700 hover:text-pink-600 transition-colors">Preços</a>
              <a 
                href="https://pay.kirvano.com/4880c162-c287-41cf-a79c-47ad6dc48afd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                >
                  Começar Agora
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#beneficios" className="text-gray-700 hover:text-pink-600 transition-colors">Benefícios</a>
              <a href="#como-funciona" className="text-gray-700 hover:text-pink-600 transition-colors">Como Funciona</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-pink-600 transition-colors">Depoimentos</a>
              <a href="#precos" className="text-gray-700 hover:text-pink-600 transition-colors">Preços</a>
              <a 
                href="https://pay.kirvano.com/4880c162-c287-41cf-a79c-47ad6dc48afd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white w-full"
                >
                  Começar Agora
                </Button>
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✨ Seu Relacionamento Merece o Melhor
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforme Seu{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Relacionamento
                </span>{" "}
                com Ajuda Profissional
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Conselhos personalizados de relacionamento disponíveis 24/7. 
                Resolva conflitos, fortaleça vínculos e construa o amor que você sempre sonhou.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://pay.kirvano.com/4880c162-c287-41cf-a79c-47ad6dc48afd"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Assinar por R$ 19,99/mês
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 border-2 border-white" />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-gray-900">+10.000</div>
                    <div className="text-gray-600">Casais Felizes</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-semibold">4.9/5</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />
              <Card className="relative p-8 bg-white/80 backdrop-blur-sm border-2 border-pink-200 shadow-2xl rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                    <MessageCircle className="w-8 h-8 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Conversas Ilimitadas</div>
                      <div className="text-sm text-gray-600">Disponível 24 horas por dia</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Conselhos Personalizados</div>
                      <div className="text-sm text-gray-600">Baseados na sua situação única</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">100% Confidencial</div>
                      <div className="text-sm text-gray-600">Suas conversas são privadas</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Por Que Escolher o{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Psicólogo do Amor?
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos suporte completo para você construir relacionamentos mais saudáveis e felizes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Disponível 24/7",
                description: "Receba ajuda sempre que precisar, a qualquer hora do dia ou da noite",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: MessageCircle,
                title: "Conversas Ilimitadas",
                description: "Sem limites de mensagens. Converse o quanto precisar para resolver suas questões",
                gradient: "from-purple-500 to-indigo-500"
              },
              {
                icon: Sparkles,
                title: "Conselhos Personalizados",
                description: "Orientações específicas para sua situação e contexto de relacionamento",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Shield,
                title: "Privacidade Total",
                description: "Suas conversas são 100% confidenciais e protegidas",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: Users,
                title: "Para Todos os Tipos",
                description: "Casais, solteiros, namoro, casamento - ajudamos em todas as fases",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: Heart,
                title: "Baseado em Ciência",
                description: "Conselhos fundamentados em psicologia e terapia de casais comprovada",
                gradient: "from-pink-500 to-purple-500"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 hover:border-pink-200">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Como Funciona?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comece a melhorar seu relacionamento em apenas 3 passos simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Crie Sua Conta",
                description: "Cadastre-se em menos de 1 minuto e comece sua jornada para um relacionamento melhor.",
                icon: Users
              },
              {
                step: "2",
                title: "Escolha Seu Plano",
                description: "Assine o plano mensal por apenas R$ 19,99 e tenha acesso completo a todos os recursos.",
                icon: MessageCircle
              },
              {
                step: "3",
                title: "Receba Orientação",
                description: "Obtenha conselhos personalizados e práticos para resolver seus desafios.",
                icon: Sparkles
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 bg-white border-2 border-pink-100">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="mt-8 mb-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-pink-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-pink-300" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://pay.kirvano.com/4880c162-c287-41cf-a79c-47ad6dc48afd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-lg px-10 py-6 rounded-xl shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
              >
                Começar Minha Jornada Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milhares de casais já transformaram seus relacionamentos com nossa ajuda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria & João",
                role: "Casados há 5 anos",
                content: "O Psicólogo do Amor salvou nosso casamento! Estávamos à beira do divórcio e os conselhos nos ajudaram a nos reconectar. Hoje somos mais felizes do que nunca!",
                rating: 5
              },
              {
                name: "Ana Paula",
                role: "Relacionamento de 3 anos",
                content: "Incrível ter acesso a conselhos profissionais 24/7! Sempre que surge um conflito, consigo orientação imediata. Meu relacionamento melhorou muito!",
                rating: 5
              },
              {
                name: "Carlos & Beatriz",
                role: "Noivos",
                content: "Estamos nos preparando para o casamento e o app tem sido essencial. Aprendemos a nos comunicar melhor e resolver conflitos de forma saudável.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-pink-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preços Section */}
      <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Plano Mensal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acesso completo por apenas R$ 19,99/mês
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="p-8 relative border-4 border-pink-500 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Melhor Escolha
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Premium</h3>
                <p className="text-gray-600 text-sm mb-4">Acesso completo ao app</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    R$ 19,99
                  </span>
                  <span className="text-gray-600 mb-2">/mês</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Conversas ilimitadas",
                  "Conselhos personalizados 24/7",
                  "Acesso prioritário",
                  "Exercícios para casais",
                  "Suporte completo",
                  "Sem anúncios",
                  "Cancele quando quiser"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="https://pay.kirvano.com/4880c162-c287-41cf-a79c-47ad6dc48afd"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full py-6 text-lg rounded-xl transition-all duration-300 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-xl hover:shadow-pink-500/50 hover:scale-105"
                >
                  Assinar Agora
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto Para Transformar Seu Relacionamento?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de casais que já estão construindo relacionamentos mais felizes e saudáveis
          </p>
          <a 
            href="https://pay.kirvano.com/4880c162-c287-41cf-a79c-47ad6dc48afd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg"
              className="bg-white text-pink-600 hover:bg-gray-100 text-lg px-10 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Assinar por R$ 19,99/mês
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          <p className="text-pink-100 mt-4 text-sm">
            ✨ Cancele quando quiser • Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl">
                  <Heart className="w-5 h-5 text-white" fill="white" />
                </div>
                <span className="text-xl font-bold text-white">Psicólogo do Amor</span>
              </div>
              <p className="text-sm text-gray-400">
                Ajudando casais a construírem relacionamentos mais felizes e saudáveis desde 2024.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#beneficios" className="hover:text-pink-400 transition-colors">Benefícios</a></li>
                <li><a href="#como-funciona" className="hover:text-pink-400 transition-colors">Como Funciona</a></li>
                <li><a href="#precos" className="hover:text-pink-400 transition-colors">Preços</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Psicólogo do Amor. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

import Image from 'next/image'
import { Check, MapPin } from '@phosphor-icons/react/dist/ssr'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'

export function About() {
    return (
        <section id="sobre" className="py-20 bg-gradient-to-b from-[#fcf5ea] to-white">
            <div className="container px-4 mx-auto">
                <h2 
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#9c410b]"
                    data-aos="fade-up"
                >
                    Sobre a <span className="text-amber-600">Fernanda Mel</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
                        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/foto2.jpg"
                                alt="Sabão caseiro artesanal"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 transition-transform duration-500"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 overflow-hidden rounded-lg shadow-lg border-4 border-white">
                            <Image
                                src="/logo.png"
                                alt="Logotipo Fernanda Mel"
                                fill
                                quality={100}
                                className="object-contain bg-white"
                                priority
                            />
                        </div>
                    </div>

                    <div className="space-y-6" data-aos="fade-up-left" data-aos-delay="300">
                        <p className="text-gray-700 leading-relaxed">
                            A <strong className="text-amber-600">Fernanda Mel</strong> nasceu do amor e cuidado por produtos sustentáveis e naturais. 
                            Cada sabão artesanal é produzido com ingredientes selecionados, pensados para cuidar da sua casa 
                            e da sua pele com qualidade, simplicidade e respeito ao meio ambiente.
                        </p>
                        
                        <p className="text-gray-700 leading-relaxed">
                            Nosso compromisso é oferecer um sabão caseiro autêntico — feito à mão, 
                            com carinho e consciência, seguindo receitas tradicionais que preservam 
                            a eficiência da limpeza sem abrir mão da sustentabilidade.
                        </p>

                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mt-8">
                            <h3 className="font-semibold text-amber-800 mb-3">Por que escolher nossos produtos?</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2">
                                    <span className="bg-green-100 p-1 rounded-full">
                                        <Check className="text-green-600 w-5 h-5" weight="bold" />
                                    </span>
                                    <span className="text-gray-700"><strong>100% Natural</strong> - Sem produtos químicos agressivos</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-green-100 p-1 rounded-full">
                                        <Check className="text-green-600 w-5 h-5" weight="bold" />
                                    </span>
                                    <span className="text-gray-700"><strong>Limpeza Eficiente</strong> - Alto poder de remoção de sujeira</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="bg-green-100 p-1 rounded-full">
                                        <Check className="text-green-600 w-5 h-5" weight="bold" />
                                    </span>
                                    <span className="text-gray-700"><strong>Ecológico e Sustentável</strong> - Respeito ao meio ambiente</span>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-8">
                            <a
                                target="_blank"
                                href={'https://wa.me/5511994540458?text=Oi! Tudo bem? Vi os sabões caseiros no site de vocês e queria mais informações. Como posso comprar?.'}
                                className="bg-[#64d11b] hover:bg-[#58b917] text-white flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md transition-all shadow-md"
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" weight="fill" />
                                Contato via Whatsapp
                            </a>

                            {/* <a
                                href="#contato"
                                className="border border-gray-300 hover:bg-gray-100 flex items-center justify-center w-fit gap-2 px-5 py-3 rounded-md transition-all"
                            >
                                <MapPin className="w-5 h-5 text-[#9c410b]" weight="fill" />
                                Endereço da Loja
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

export function Hero() {
    return (
        <section className="relative text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src="/mel02.jpg" 
                    alt="Background Mel"
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#532205]/90 to-[#c25311]/70"></div>
            </div>
            
            <div className="container mx-auto py-16 px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6 max-w-xl" data-aos="fade-right" data-aos-duration="1000">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Sabão Caseiro <span className="text-amber-200">Fernanda Mel</span>
                        </h1>
                        
                        <p className="lg:text-lg opacity-90">
                            Experimente o Sabão Caseiro Fernanda Mel natural, eficaz e econômico.
                            Limpeza profunda sem produtos químicos. Compre agora e leve mais qualidade para sua casa.
                        </p>

                        <div data-aos="fade-up" data-aos-delay="300">
                            <a
                                target="_blank"
                                href={'https://wa.me/5511994540458?text=Oi! Tudo bem? Vi os sabões caseiros no site de vocês e queria mais informações. Como posso comprar?.'}
                                className="bg-[#64d11b] hover:bg-[#58b917] px-5 py-3 rounded-md font-semibold flex items-center justify-center w-fit gap-2 transition-all shadow-lg shadow-black/20 focus:ring-2 focus:ring-[#64d11b]/50"
                            >
                                <WhatsappLogo className="w-5 h-5" weight="fill" />
                                Contato via Whatsapp
                            </a>
                        </div>

                        <div className="mt-8" data-aos="fade-up" data-aos-delay="500">
                            <div className="flex items-center gap-3 bg-black/30 p-3 rounded-lg backdrop-blur-sm w-fit">
                                <span className="bg-amber-200 text-[#9c410b] px-3 py-1 rounded-md font-bold">7%</span>
                                <p className="text-sm">
                                    de desconto na primeira compra com 10 pedras de sabão!
                                </p>
                            </div>
                            
                            <div className="flex mt-6">
                                <div className="w-32 hidden lg:block">
                                    <Image
                                        src="/foto7.png"
                                        alt="Foto do desconto"
                                        width={200}
                                        height={200}
                                        quality={100}
                                        className="w-32 rounded-lg shadow-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1000">
                        <div className="relative h-[400px] w-full max-w-md bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <Image
                                src="/logo.png"
                                alt="Foto da mulher com o Sabão Caseiro"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 z-10"></div>
        </section>
    )
}
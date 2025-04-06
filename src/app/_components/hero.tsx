import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { } from '../../../public/foto5.png'
import foto5 from "@/assets/foto5.png"


import Image from 'next/image'
export function Hero() {
    return (
        <section className="bg-[#572305] text-white relative overflow-hidden">


            <div className="hidden md:block h-full relative">
                <Image 
                    src="/foto5.png" 
                    alt="Foto da mulher com o Sabão Caseiro"
                    fill
                    sizes='(max-width: 768px) 0vw, 50vw'
                    priority
                    className='object-contain'
                />

                <div className='absolute inset-0 bg-black opacity-40 md:hidden'>

                </div>

            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-4 relative'>

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>


                    <div className='space-y-6 '>

                        <h1 className="text-3xl md: text-4xl lg: text-5xl font-bold leading-10"
                        data-aos="fade-down"
                        >
                            Sabão Caseiro Fernanda Mel a Preço Justo Para Sua Casa.
                        </h1>
                        
                        <p className="lg:text-lg" data-aos="fade-right">
                            Experimente o Sabão Caseiro Fernanda Mel natural, eficaz e econômico.
                            Limpeza profunda sem produtos químicos. Compre agora e leve mais qualidade para sua casa.
                        </p>

                        <div>
                            <a
                                data-aos="fade-up"
                                data-aos-delay="500"
                                target="_blank"
                                href={'https://wa.me/5511953801999?text= Olá vim pelo site e gostaria de mais informações.'}
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                            >
                                <WhatsappLogo className="w-5 h-5" />
                                Contato via Whatsapp
                            </a>

                        </div>

                        <div className="mt-8" data-aos="fade-left">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">7%</b> de desconto na primeira compra com 10 pedras de sabão!
                            </p>

                            <div className='flex mt-4'>
                                <div className='w-32 hidden lg:block'>
                                    <Image
                                        src="/foto7.png"
                                        alt="Foto do desconto"
                                        width={200} // Defina a largura da imagem
                                        height={200} // Defina a altura da imagem
                                        quality={100}
                                        className="w-32"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                            src="/foto5.png"
                            alt="Foto da mulher com o Sabão Caseiro"
                            className='object-con'
                            width={350}
                            height={300}
                            priority
                            sizes='(max-width: 768px) 0px, 50vw'
                            quality={100}
                        />
                    </div>

                </article>

            </div>

        </section>
    )
}
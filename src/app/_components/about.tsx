import Image from 'next/image'
import aboutimg from '../../../public/foto2.jpg'
import aboutimg2 from '../../../public/logo.jpg'
import { Check, Checks, MapPin } from '@phosphor-icons/react/dist/ssr'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'


export function About() {
    return (
        <section className="bg-[fdf6ec] py-16">
            <div className="container px-4 mx-auto ">

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                    <div className='relative' data-aos="fade-up-right" data-aos-delay="300">
                        <div className='relative w-full h-[400px] rounded-3xl overflow-hidden'>
                            <Image
                                src={aboutimg}
                                alt='foto do sabao caseiro'
                                fill
                                quality={100}
                                className='object-cover hover:scale-110 duration-300'
                                priority
                            />
                        </div>


                        <div className='absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white'>
                            <Image
                                src={aboutimg2}
                                alt='foto do sabao caseiro 2'
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    <div className='space-y-6 mt-10' data-aos="fade-up-left" data-aos-delay="300">
                    <h2 className="text-5xl font-bold text-center mb-12" style={{ color: "#F5DEB3" }}>
                        Sobre
                    </h2>
                        <p className='text-center text-justify'>
                        O site Fernanda Mel foi criado para compartilhar o amor e o cuidado por trás de cada sabão artesanal produzido. 
                        Aqui, você encontra produtos feitos com ingredientes naturais, pensados para cuidar da sua casa 
                        e da sua pele com qualidade, simplicidade e sustentabilidade. Nosso compromisso é oferecer um 
                        sabão caseiro de verdade — feito à mão, com carinho e consciência.
                        </p>

                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'>
                                <Check className='text-green-500' />
                                <strong>100% Natural</strong>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-green-500' />
                                <strong>Limpeza Eficiente</strong>
                            </li>
                            <li className='flex items-center gap-2'>
                                <Check className='text-green-500' />
                                <strong>Ecológico e Sustentável</strong>
                            </li>
                        </ul>

                        <div className='flex gap-2'>
                            <a
                                target="_blank"
                                href={'https://wa.me/5511953801999?text= Olá vim pelo site e gostaria de mais informações.'}
                                className='bg-[#64d11b] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via Whatsapp
                            </a>

                            <a
                                href="#"
                                className='flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
                            >
                                <MapPin className="w-5 h-5 text-black" />
                                Endereço da Loja
                            </a>
                        </div>

                    </div>

                </div>




            </div>
        </section>
    )

}


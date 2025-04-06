"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Bookmark, CarTaxiFront, Hotel, icons, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import sabao1 from'../../../public/foto6.png'
import sabao2 from'../../../public/foto8.png'
import sabao3 from'../../../public/foto9.png'
import Image from 'next/image'


const testimonials = [
    {
        content: "🧽 Uso o sabão caseiro todos os dias na pia! Ele tira a gordura das panelas com facilidade e ainda deixa as mãos macias. Nunca mais comprei detergente do mercado!",
        author: "Tatiane Ribeiro",
        role:"Cliente ( Suzano/SP)",
        image: sabao1,
    },
    {
        content: "🧽 Economizei muito usando o sabão caseiro pra lavar louça e limpar o fogão. Além de limpar bem, é natural e não agride o meio ambiente.",
        author: "Ana Maria ",
        role:"Cliente ( Mogi das Cruzes/SP)",
        image: sabao2,
    },
    {
        content: "🏠  Uso o sabão caseiro pra tudo: louça, pia, fogão, banheiro. É versátil, econômico e muito eficaz. Recomendo demais!",
        author: " Marcelo Tavares ",
        role:"Cliente ( São Paulo/SP)",
        image: sabao3,
    },
]

export function Testimonials() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-yellow-400 py-16">

            <div className="container mx-auto px-4">

                <div>
                    <h2 className="text-5xl font-bold text-center mb-12" style={{ color: "#462f04" }}>
                        Depoimentos dos Clientes
                    </h2>

                    <div className="relative max-w-4xl mx-auto">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {testimonials.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                        <article className='bg-[#a36f0e] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>

                                           <div className='flex flex-col items-center text-center space-y-4'>
                                            <div className='relative w-24 h-24'>
                                                <Image
                                                    src={item.image}
                                                    alt={item.author}
                                                    fill
                                                    sizes='96px'
                                                    className='object-cover rounded-full'
                                                />
                                            </div>

                                            <p className='text-gray-200 '>{item.content}</p>

                                            <div>
                                            <p className='font-bold'>{item.author}</p>
                                            <p className='text-sm text-gray-400'>{item.role}</p>
                                            </div>

                                           </div>
                                        </article>
                                    </div>

                                ))}
                            </div>
                        </div>

                        <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollPrev}
                        >
                            <ChevronLeft className='w-6 h-6 text-gray-600 bg-white'/>
                        </button>

                        
                        <button className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                        onClick={scrollNext}
                        >
                            <ChevronRight className='w-6 h-6 text-gray-600 bg-white'/>
                        </button>

                    </div>

                </div>

            </div>
        </section>
    )
}
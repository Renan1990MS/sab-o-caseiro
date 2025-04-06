"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Bookmark, CarTaxiFront, Hotel, icons, Clock } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'


const services = [
    {
        title: 'Composição Natural',
        description: 'Feito com óleos vegetais, ou óleo de cozinha reciclado utiliza soda cáustica para a saponificação e Pode conter ingredientes adicionais, como ervas, óleos essenciais e corantes naturais.',
        duration: "3D",
        // price: 'R$ 8,00',
        icons: <Bookmark />,
        link: '/sabao-caseiro',
    },
    {
        title: 'Ecológico e Sustentável',
        description: 'Biodegradável, não polui o meio ambiente e Livre de agentes químicos agressivos encontrados nos sabões industriais.',
        duration: "3D",
        // price: 'R$ 8,00',
        icons: <Bookmark />,
        link: '/sabao-caseiro',
    },
    {
        title: 'Versatilidade no Uso',
        description: 'Pode ser usado para lavar roupas, louças, pisos e etc. Algumas receitas incluem propriedades antibacterianas.',
        duration: "3D",
        // price: 'R$ 8,00',
        icons: <Bookmark />,
        link: '/sabao-caseiro',

    },
    {
        title: 'Textura e Espuma',
        description: 'A espuma pode ser menor do que os sabões industriais, pois não contém sulfatos.A textura pode ser mais rústica, dependendo do processo de fabricação e ingredientes usados.',
        duration: "3D",
        // price: 'R$ 8,00',
        icons: <Bookmark />,
        link: '/sabao-caseiro',

    },
]

export function Services() {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 768px)": { slidesToScroll: 3 }
        }
    })

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }


    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">

                <div>
                    <h2 className="text-5xl font-bold text-center mb-12" style={{ color: "#F5DEB3" }}>
                        Características do Sabão
                    </h2>

                    <div className="relative">

                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                        <article className='bg-[#a36f0e] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                            <div className='flex-1 flex items-start justify-between'>

                                                <div className="flex items-center gap-3 p-1">
                                                    <span className='text-3xl'>{item.icons}</span>
                                                </div>

                                                <div>
                                                    <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                                                    <p className='text-gray-200 text-sm select-none'>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>


                                            <div className='border-t border-gray-300 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2 text-sm'>
                                                    <Clock className='w-4 h-4' />
                                                    <span>{item.duration}</span>
                                                </div>



                                                <a
                                                    target="_blank"
                                                    href={'https://wa.me/5511953801999?text= Olá vim pelo site e gostaria de mais informações.'}
                                                    className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300 ease-in-out'
                                                >
                                                    <WhatsappLogo className='w-5 h-5' />
                                                    Entrar em contato
                                                </a>

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
"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { Drop, Leaf, Recycle, Scales } from '@phosphor-icons/react'
import { useCallback, useEffect, useState } from 'react'

const services = [
    {
        title: 'Composição Natural',
        description: 'Feito com óleos vegetais ou óleo de cozinha reciclado, utiliza processo natural de saponificação. Pode conter ervas, óleos essenciais e corantes naturais.',
        duration: "100% Natural",
        icon: <Drop weight="fill" className="w-8 h-8 text-amber-100" />,
    },
    {
        title: 'Ecológico e Sustentável',
        description: 'Biodegradável, não polui o meio ambiente e livre de agentes químicos agressivos encontrados nos sabões industriais.',
        duration: "Eco-friendly",
        icon: <Leaf weight="fill" className="w-8 h-8 text-amber-100" />,
    },
    {
        title: 'Versatilidade no Uso',
        description: 'Pode ser usado para lavar roupas, louças, pisos e superfícies diversas. Algumas receitas incluem propriedades antibacterianas.',
        duration: "Múltiplos Usos",
        icon: <Recycle weight="fill" className="w-8 h-8 text-amber-100" />,
    },
    {
        title: 'Textura e Espuma',
        description: 'Textura mais rústica e natural, com espuma adequada para limpeza eficiente sem sulfatos agressivos.',
        duration: "Alta Qualidade",
        icon: <Scales weight="fill" className="w-8 h-8 text-amber-100" />,
    },
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            '(min-width: 640px)': { slidesToScroll: 1 },
            '(min-width: 768px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 }
        }
    })

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setPrevBtnEnabled(emblaApi.canScrollPrev())
        setNextBtnEnabled(emblaApi.canScrollNext())
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
        return () => {
            emblaApi.off('select', onSelect)
            emblaApi.off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <section id="caracteristicas" className="py-20 bg-gradient-to-b from-white to-[#fcf5ea]">
            <div className="container mx-auto px-4">
                <div>
                    <h2 
                        className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#9c410b]"
                        data-aos="fade-up"
                    >
                        Características do <span className="text-amber-600">Sabão</span>
                    </h2>
                    
                    <p className="text-gray-600 text-center max-w-xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
                        Conheça os benefícios e diferenciais do nosso sabão caseiro artesanal
                    </p>

                    <div className="relative px-4" data-aos="fade-up" data-aos-delay="300">
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(100%/2-1rem)] lg:flex-[0_0_calc(100%/3-1rem)] px-3">
                                        <article className='bg-gradient-to-br from-[#a36f0e] to-[#8e5800] text-white rounded-xl p-6 space-y-4 h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow'>
                                            <div className='mb-4 flex'>
                                                <span className='bg-[#9c410b]/40 p-3 rounded-lg'>
                                                    {item.icon}
                                                </span>
                                            </div>
                                            
                                            <div className='flex-1'>
                                                <h3 className='font-bold text-xl mb-2'>{item.title}</h3>
                                                <p className='text-gray-200 text-sm leading-relaxed'>
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className='border-t border-amber-600/30 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2 text-sm text-amber-200'>
                                                    <Clock className='w-4 h-4' />
                                                    <span>{item.duration}</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            className={`bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-0 -translate-y-1/2 top-1/2 z-10 transition-opacity ${!prevBtnEnabled ? 'opacity-50' : 'hover:bg-gray-100'}`}
                            onClick={scrollPrev}
                            disabled={!prevBtnEnabled}
                            aria-label="Anterior"
                        >
                            <ChevronLeft className='w-6 h-6 text-gray-600' />
                        </button>

                        <button 
                            className={`bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-0 -translate-y-1/2 top-1/2 z-10 transition-opacity ${!nextBtnEnabled ? 'opacity-50' : 'hover:bg-gray-100'}`}
                            onClick={scrollNext}
                            disabled={!nextBtnEnabled}
                            aria-label="Próximo"
                        >
                            <ChevronRight className='w-6 h-6 text-gray-600' />
                        </button>
                    </div>
                    
                    <div className="flex justify-center mt-8">
                        <a
                            target="_blank"
                            href={'https://wa.me/5511994540458?text="Oi! Tudo bem? Vi os sabões caseiros no site de vocês e queria mais informações. Como posso comprar?".'}
                            className="bg-[#64d11b] hover:bg-[#58b917] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-md transition-all shadow-md"
                            data-aos="fade-up" 
                            data-aos-delay="500"
                        >
                            Saber mais sobre nossos produtos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
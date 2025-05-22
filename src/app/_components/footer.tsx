import { FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { QrCode as QrCodeIcon } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const whatsappLink = 'https://wa.me/5511994540458?text=Olá vim pelo site e gostaria de mais informações.';
  
  return (
    <footer className="bg-gray-900 text-white py-8 w-full" id="footer">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Informações sobre a marca */}
        <div className="flex flex-col items-start">
          <div className="mb-4 relative h-20 w-40">
            <Image 
              src="/logo.png" 
              alt="Fernanda Mel Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm mb-2">Sabão caseiro feito com amor e ingredientes naturais.</p>
          <p className="text-sm mb-6">Sustentável, econômico e perfeito para o seu lar.</p>

          <a
            target="_blank"
            href={whatsappLink}
            className='bg-[#64d11b] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md transition-all hover:bg-[#58b917] focus:ring-2 focus:ring-[#64d11b]/50'
            rel="noopener noreferrer"
          >
            <WhatsappLogo className="w-5 h-5 text-white" weight="fill" />
            Contato via Whatsapp
          </a>
        </div>

        {/* Informações de produtos e serviços */}
        <div className="mt-6 sm:mt-0">
          <h3 className="text-amber-200 text-xl font-semibold mb-4">Nossos Produtos</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-amber-200 rounded-full mr-2 flex-shrink-0"></span>
              Sabão em barra artesanal
            </li>
            {/* <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-amber-200 rounded-full mr-2 flex-shrink-0"></span>
              Sabão líquido
            </li> */}
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-amber-200 rounded-full mr-2 flex-shrink-0"></span>
              Sabão para roupas
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-amber-200 rounded-full mr-2 flex-shrink-0"></span>
              Produtos naturais para limpeza
            </li>
          </ul>
        </div>

        {/* Contato e redes sociais */}
        <div className="mt-6 lg:mt-0">
          <h3 className="text-amber-200 text-xl font-semibold mb-4">Contatos</h3>
          <p className="text-sm mb-2 flex items-center">
            <WhatsappLogo className="w-4 h-4 mr-2 flex-shrink-0" />
            (11) 9 9454-0458
          </p>
          <p className="text-sm mb-4">Email: Fernandamel@gmail.com</p>
          
          {/* QR Code */}
          <div className="mb-4">
            <p className="text-sm mb-2 flex items-center">
              <QrCodeIcon className="w-4 h-4 mr-2 flex-shrink-0" />
              Escaneie para WhatsApp:
            </p>
            <div className="bg-white p-2 rounded-lg w-24 h-24 relative">
              <Image
                src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(whatsappLink)}`}
                alt="QR Code para WhatsApp"
                width={90}
                height={90}
                className="mx-auto"
              />
            </div>
          </div>
          
          <div className="flex gap-4 mt-4">
            <a href="#" target="_blank" aria-label="Instagram" className="hover:text-amber-200 transition-colors">
              <InstagramLogo className="w-8 h-8" weight="fill" />
            </a>
            <a href="#" target="_blank" aria-label="Facebook" className="hover:text-amber-200 transition-colors">
              <FacebookLogo className="w-8 h-8" weight="fill" />
            </a>
            <a href="https://www.tiktok.com/@fernanda.mel7" target="_blank" aria-label="TikTok" className="hover:text-amber-200 transition-colors" rel="noopener noreferrer">
              <TiktokLogo className="w-8 h-8" weight="fill" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-white/80 px-4">
        &copy; {new Date().getFullYear()} Fernanda Mel. Todos os direitos reservados.
      </div>
    </footer>
  )
}

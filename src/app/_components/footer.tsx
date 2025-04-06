import { FacebookLogo, InstagramLogo, TiktokLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";



export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Informações sobre a marca */}
        <div>
          <h2 className="text-amber-200 text-2xl font-bold mb-4">Fernanda Mel</h2>
          <p className="text-sm">Sabão caseiro feito com amor e ingredientes naturais.</p>
          <p className="text-sm mb-4">Sustentável, econômico e perfeito para o seu lar.</p>

          <a
            target="_blank"
            href={'https://wa.me/5511953801999?text= Olá vim pelo site e gostaria de mais informações.'}
            className='bg-[#64d11b] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md'
          >
            <WhatsappLogo className="w-5 h-5 text-white" />
            Contato via Whatsapp
          </a>
        </div>

        {/* Links úteis */}
        <div>
          <h3 className="text-amber-200 text-xl font-semibold mb-4">Links Úteis</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Início</a></li>
            <li><a href="#" className="hover:underline">Produtos</a></li>
            <li><a href="#" className="hover:underline">Contato</a></li>
            <li><a href="#" className="hover:underline">Política de Privacidade</a></li>
          </ul>
        </div>

        {/* Contato e redes sociais */}
        <div>
          <h3 className="text-amber-200 text-xl font-semibold mb-4">Contatos</h3>
          <p className="text-sm mb-2">WhatsApp: (11) 95380-1999</p>
          <p className="text-sm mb-4">Email: Fernandamel@gmail.com</p>
          <div className="flex gap-4">
            <a href="#" target="_blank" aria-label="Instagram" className="hover:text-gray-200">
              <i className="fab fa-instagram"></i>
              <InstagramLogo className="w-8 h-8" />
            </a>
            <a href="#" target="_blank" aria-label="Facebook" className="hover:text-gray-200">
              <i className="fab fa-facebook"></i>
              <FacebookLogo className="w-8 h-8" />
            </a>
            <a href="https://www.tiktok.com/@fernanda.mel7" target="_blank" aria-label="TikTok" className="hover:text-gray-200">
              <i className="fab fa-whatsapp"></i>
              <TiktokLogo className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Fernanda Mel. Todos os direitos reservados.
      </div>
    </footer>
  );
}

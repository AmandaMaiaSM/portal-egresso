import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/swiper.css";

import "./Styles.css";

import iemagemTesteIEMA1 from "../../imagensdeTeste/iema-bacana-1-1.jpg";
import iemagemTesteIEMA2 from "../../imagensdeTeste/iema-bacana-2.jpeg";
import iemagemTesteIEMA3 from "../../imagensdeTeste/iema-bacana-3.jpeg";

const CarrosselHome = () => {

  // Dados dos slides fictícios para exemplificar o conteúdo do carrossel 

  {/* 
    exemploque de como buscar os dados do banco de dados para o carrossel, caso queira implementar futuramente
  const [slides, setSlides] = useState([]);

    useEffect(() => {
      // Aqui você vamso buscar  os dados do seu banco de dados
      fetch("sua-api.com/slides")
        .then(res => res.json())
        .then(dados => setSlides(dados));
    }, []);  
      
    */}
    
  const slides = [
    {
      titulo: "Conectando histórias, construindo futuros",
      texto: "O Portal para o alunos do IEMA é um espaço dedicado ao acompanhamento da trajetória dos nossos ex-alunos.",
      botao: "Saiba Mais",
      imagem: iemagemTesteIEMA1
    },
    {
      titulo: "Mantenha seu DNA IEMA vivo",
      texto: "Atualize seu perfil e compartilhe suas conquistas com a nossa comunidade acadêmica.",
      botao: "Ver Perfil",
      imagem: iemagemTesteIEMA2
    },
    {
      titulo: "Oportunidades e Networking",
      texto: "Acesse vagas exclusivas e conecte-se com outros profissionais formados pelo IEMA.",
      botao: "Explorar",
      imagem: iemagemTesteIEMA3
    }
  ];

 return (
  <section className="secao-carrossel" id="home">
    <Swiper
      className="meu-swiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
    >
      {slides.map((slide, indice) => (
        <SwiperSlide key={indice}>
          <div className="slide-wrapper">
            <img
              src={slide.imagem}
              alt={slide.titulo}
              className="imagem-slide"
            />

            <div className="conteudo-slide-overlay">
              <h2>{slide.titulo}</h2>
              <p>{slide.texto}</p>
              <button className="botao-destaque">
                {slide.botao}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
}
export default CarrosselHome;
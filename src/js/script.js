const close = document.querySelector('.fecha');
const anuncio = document.querySelector('.banuncio');
const link = 'https://www.amazon.com.br/dp/B0BB3H373V?ref=cm_sw_r_ffobk_mwn_dp_RT4NAF2B9P87ZA5XKVE9&ref_=cm_sw_r_ffobk_mwn_dp_RT4NAF2B9P87ZA5XKVE9&social_share=cm_sw_r_ffobk_mwn_dp_RT4NAF2B9P87ZA5XKVE9&language=en_US&bestFormat=true';

close.addEventListener('click', () => {
    window.open(link, '_blank'); // Abre o link em uma nova aba
    anuncio.style.display = "none"; // Esconde o anúncio
});

anuncio.addEventListener('click', () => {
    window.open(link, '_blank'); // Abre o link em uma nova aba
});
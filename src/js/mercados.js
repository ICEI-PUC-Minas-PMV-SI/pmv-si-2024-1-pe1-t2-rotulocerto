document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.querySelector('.mercado iframe');
  const permissionMessage = document.querySelector('.permission-message');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const url = `https://www.google.com/maps/embed/v1/search?key=AIzaSyBDnxih3tkpqwcDnwruqJ_TmvKyKSreX20&q=supermercado&center=${latitude},${longitude}&zoom=14`;

        iframe.src = url;
        permissionMessage.innerHTML = 'Exibindo mercados próximos a você';
      },
      (error) => {
        console.error('Erro ao obter localização:', error);
        iframe.src = 'https://www.google.com/maps/embed';
        permissionMessage.innerHTML = 'Não foi possível obter sua localização. Para visualizar, permita o acesso à sua localização e recarregue a página.';
      }
    );
  } else {
    console.error('Geolocalização não suportada pelo navegador.');
  }
});

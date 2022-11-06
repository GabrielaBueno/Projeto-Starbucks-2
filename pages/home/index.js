export default()=>{
    const container = document.createElement('div');
    const template =`
    <div class="mySlides fade"> 
    <picture>
        <source srcset="https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_1868687486_mobile.jpg?crc=29404363" media="(max-width: 768px)">
        <source srcset="https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_195590685_desktop.jpg?crc=7f49f1de" >
        <img alt="Starbucks" src="https://s3-sa-east-1.amazonaws.com/manyplaces-p/starbucks/site/banners/banner_195590685_desktop.jpg?crc=7f49f1de">
    </picture>
    </div>
    <section class="box box-a bg-primary text-center py-md">
                <div class="box-inner">
                    <p class="text-md">
                        Conforme abrimos nossas lojas, permanecemos no compromisso com a saúde e bem-estar de nossos partners e consumidores.
    
                    </p>
                    <button class="btn btn-trans">Saiba mais</button>
                </div>
            </section>
    `;
    container.innerHTML=template;
    return container;
}

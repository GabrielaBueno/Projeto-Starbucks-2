export default()=>{
    const container = document.createElement('div');
    const template = `
    <body>
        <h4>Seja Bem-vindo! </h4>
        <h1>Digite o nome da Imagem:
        </h1>
        <input type='text' id='img' name='img' size='15' maxlenght='8' autocomplete='off'>
        <button id='btn'>Consultar</button>
        <div style='padding-top:20px;' id='return'></div>
    </body>
    <span id="element"></span>`;
    
    container.innerHTML=template;
    return container;
    
}

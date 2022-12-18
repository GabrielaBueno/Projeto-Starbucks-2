export default()=>{
    const container = document.createElement('div');
    const template =
    <body>
        <h1>Digite seu CEP
        </h1>
        <input type='text' id='cep' name='cep' size='15' maxlenght='8' autocomplete='off'>
        <button id='btn'>Consultar</button>
        <div style='padding-top:20px;' id='return'></div>
    </body>
    
    ;
    container.innerHTML=template;
    return container;
}

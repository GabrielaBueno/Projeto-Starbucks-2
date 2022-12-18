export default()=>{
    const container = document.createElement('div');
    const template =`
    <link rel="stylesheet" href="teste.css"/>
    <div class="body-wrapper">
    
        <div class="main-container">

            <div class="progress hide r-progress">
                  <div class="indeterminate"></div>
              </div>

     <body>
        <h3> Seja Bem-vindo!</h3>
        <h4>Informe o nome da imagem: </h4>
       <input type='text' id='cep' name='cep' size='15' maxlenght='8' autocomplete='off'>
        <button id='btn'>Consultar</button>
        <div style='padding-top:20px;' id='return'></div>
    </body>
                <ul id="lista">
                </ul>
                
    
    </div>
    </div>
    </section>
    </div>


    `;
    container.innerHTML=template;
    return container;
}

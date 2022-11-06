export default()=>{
    const container = document.createElement('div');
    const template =`
    <link rel="stylesheet" href="teste.css"/>
    <div class="body-wrapper">
    
        <div class="main-container">

            <div class="progress hide r-progress">
                  <div class="indeterminate"></div>
              </div>

            <div class="container-fluid">
                <h3>Seja Bem-vindo!!!</h3>
                <div class="input-section">
						<label>Digite a quantidade de raposas a serem exibidas<span class="required-color">*</span></label>
						<input type="number" placeholder="" id="number" required />
				</div>
                <ul id="lista">             
                    <img id="image" src="https://randomfox.ca/images/27.jpg" width="300px" height="300px">
                </ul>
                <button id="submit-button">Mostrar</button>
            </div>
        </div>
    </div>
    </div>
    </section>
    </div>


    `;
    container.innerHTML=template;
    return container;
}
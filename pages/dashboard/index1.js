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
                    <h3>Raposas!!!</h3>
				</div>
                <ul id="lista">
                </ul>
                
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
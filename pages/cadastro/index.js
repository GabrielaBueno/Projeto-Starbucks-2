export default()=>{
    const container = document.createElement('div');
    const template =`
    <style>#form {
        width: 300px;
        margin: 20vh auto 0 auto;
        padding: 20px;
        background-color: whitesmoke;
        border-radius: 4px;
        font-size: 12px;
    }
    
    #form h1 {
        color: #0f2027;
        text-align: center;
    }
    
    #form button {
        padding: 10px;
        margin-top: 10px;
        width: 100%;
        color: white;
        background-color: #00a862;
        border: none;
        border-radius: 4px;
    }
    
    .input-control {
        display: flex;
        flex-direction: column;
    }
    
    .input-control input {
        border: 2px solid #f0f0f0;
        border-radius: 4px;
        display: block;
        font-size: 12px;
        padding: 10px;
        width: 100%;
    }
    
    .input-control input:focus {
        outline: 0;
    }
    
    .input-control.success input {
        border-color: #09c372;
    }
    
    .input-control.error input {
        border-color: #ff3860;
    }
    
    .input-control .error {
        color: #ff3860;
        font-size: 9px;
        height: 13px;
    }</style>
    <div class="row">
    <div class="col s12 l5 fixed z-depth-1 hide-on-med-and-down">
        <div class="vh-100 flex flex-center">
            
            <div class="sb-global-gutters valign-wrapper signin-info">
                <h1 class="sb-header bold">Entre ou crie uma conta 🌟</h1>
            </div>
        </div>
    </div>
    <div class="col s12 l7 bg-gray push-l5">
    <div class="container">
    <form id="form" action="/">
        <h1>Registro</h1>
        <div class="input-control">
            <label for="username">NOME</label>
            <input id="username" name="username" type="text">
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="email">EMAIL</label>
            <input id="email" name="email" type="text">
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="password">SENHA</label>
            <input id="password"name="password" type="password">
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="password2">CONFIRMAÇÃO DE SENHA</label>
            <input id="password2"name="password2" type="password">
            <div class="error"></div>
        </div>
        <button id="submit" type="submit">Cadastrar</button>
    </form>
</div>
    
</div>
    `;
    container.innerHTML=template;
    return container;
}
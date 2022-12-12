export default()=>{
    const container = document.createElement('div');
    const template =`
    <div class="row">
		<div class="col s12 l5 fixed z-depth-1 hide-on-med-and-down">
			<div class="vh-100 flex flex-center">
				
				<div class="sb-global-gutters valign-wrapper signin-info">
					<h1 class="sb-header bold">Entre ou crie uma conta 🌟</h1>
				</div>
			</div>
		</div>
		<div class="col s12 l7 bg-gray push-l5">
			<div class="row formView checkEmailView onFocus">
				<form class="ajax-form log-form r-log-form sb-content-narrow" method="POST" action="5d15dad0875954edc1830b66efd5669d">
					<input type="hidden" name="systemIdentifier" value="starbucks">
					<div class="col s12">
						<h4 class="log-form-header">Entre com seu e-mail</h4>
						<div class="input-section">
							<label>EMAIL <span class="required-color">*</span></label>
							<input type="email" placeholder="" id="email" required />
							<span id="email-error" class="hide required-color error-message"
							  >E-mail invalido</span>
							<span id="empty-email" class="hide required-color error-message"
							  >Esse campo está vazio!</span>
						  </div>
                          <div class="input-section">
							<label>SENHA <span class="required-color">*</span></label>
							<input
							  type="password"
							  placeholder=""
							  id="password"
							  required
							/>
							<span id="password-error" class="hide required-color error-message">
							  A senha deve conter no minimo 8 caracteres
							</span>
							<span id="empty-password" class="hide required-color error-message">
							  O campo senha está vazio!
							</span>
						  </div>
                          <button id="submit-button">Continuar</button>
					</div>
					<div class="clearfix"></div>
				</form>
			</div>
			<div class="row bg-ceramic">
				<div class="col s12 sb-reward-header bg-blackWarm fullwight">
					<h2 class="clr-white center-align text-upper bold">Quero participar do Starbucks Rewards®</h2>
				</div>
				<div class="col s12 bdr-bt">
					<div class="sb-content-narrow sb-reward-info">
						<a href="signup.html">
							<button class="waves-effect btn btn-pill bp-black btn-dark-outline">Participe agora</button>
						</a>
						<h3>Crie uma conta e ganhe muitas recompensas</h3>
						<p>Participe do Starbucks Rewards®, para que possamos recompensá-lo (a) com bebidas grátis e muitos outros benefícios exclusivos para os membros do programa.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
    `;
    container.innerHTML=template;
    return container;
}


<template>
    <div id="pgCadastro" class="wrapper">
        <a href="./" class="marca">
            <img class="desktop" src="../assets/img/logo.svg">
            <img class="mobile" src="../assets/img/logo-branco.svg">
        </a>
        <div class="clearfix content">
            <div class="perfil">
                <div>
                    <div class="foto">
                        <img src="../assets/img/user-photo.png">
                    </div>
                    <strong>Cadastre-se</strong>
                    <p>ou conecte-se com</p>
                    <a href="javascript:;" class="bFacebook">Facebook</a>
                    <a href="javascript:;" class="bGoogle">Google</a>
                </div>
            </div>
            <div class="registro">
                <div>
                    <form>
                        <ul class="lstForm">
                            <li class="clearfix double inputAndCheck cols2">
                                <input type="radio" name="documento" value="cpf" class="iradio">
                                <span class="clearfix">
                                    <input type="text" name="cpf" placeholder="CPF">
                                </span>
                            </li>
                            <li class="clearfix double inputAndCheck cols2">
                                <input type="radio" name="documento" value="cnpj" class="iradio">
                                <span class="clearfix">
                                    <input type="text" name="cnpj" placeholder="CNPJ">
                                </span>
                            </li>
                            <li>
                                <span><input type="text" name="nome" placeholder="Nome *"></span>
                            </li>
                            <li>
                                <span><input type="text" name="dtnasc" placeholder="Data de nascimento"></span>
                            </li>
                            <li>
                                <span><input type="text" name="email" placeholder="E-mail *"></span>
                            </li>

                            <li class="cols2">
                                <span><input type="password" name="senha" placeholder="Senha *"></span>
                            </li>
                            <li class="cols2">
                                <span><input type="password" name="confirmSenha" placeholder="Confirmar senha *"></span>
                            </li>

                            <li>
                                <span><p>Como conheceu a Donamaid?</p></span>
                            </li>
                            <li class="cols3">
                                <span><label><input type="radio" name="conheceu" value="facebook"> Facebook</label></span>
                            </li>
                            <li class="cols3">
                                <span><label><input type="radio" name="conheceu" value="google"> Google</label></span>
                            </li>
                            <li class="cols3">
                                <span><label><input type="radio" name="conheceu" value="instagram"> Instagram</label></span>
                            </li>
                            <li class="cols3">
                                <span><label><input type="radio" name="conheceu" value="indicacao"> Indicação</label></span>
                            </li>
                            <li class="cols3">
                                <span><label><input type="radio" name="conheceu" value="jornal"> Jornal</label></span>
                            </li>
                            <li class="cols3">
                                <span><label><input type="radio" name="conheceu" value="tv-radio"> TV/Rádio</label></span>
                            </li>
                            <li class="termos">
                                <span><label><input type="checkbox" name="termos" value="termos"> Li e aceito os termos de uso.</label></span>
                            </li>
                            <li>
                                <span>
                                    <!-- <input type="submit" class="bt send" value="cadastrar"> -->
                                    <a href="#/dashboard" class="bt send">cadastrar</a>
                                </span>
                            </li>
                            <li>
                                <p class="mensagem">Ja é cadastrado? <b>Faça <a href="#/login">login.</a></b></p>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Cadastro',
        created() {
            inputPerson();
        }
    }
</script>

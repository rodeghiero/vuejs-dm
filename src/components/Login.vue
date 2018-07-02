
<template>
    <div id="pgLogin">
        <div class="areaLogin">
            <div class="bxLogin">
                <div>
                    <a href="./" class="marca">
                        <img src="../assets/img/logo.svg">
                    </a>
                    <form class="formLogin">
                        <div class="inputs">
                            <span class="nome">
                                <input type="text" name="nome" placeholder="seu email">
                            </span>
                            <span class="senha">
                                <input type="password" name="senha" placeholder="sua senha">
                            </span>
                        </div>
                        <!-- <input class="bt send" type="submit" value="entrar"> -->
                        <a class="bt send" href="#/dashboard">entrar</a>
                        <a class="esqueciSenha" href="javascript:;">esqueci minha senha</a>
                    </form>

                    <form class="formNovaSenha">
                        <b>Esqueceu sua senha?</b>
                        <p>Coloque seu e-mail abaixo. Nós enviaremos um e-mail para você redefinir sua senha.</p>
                        <div class="inputs">
                            <span class="nome">
                                <input type="text" name="email" placeholder="seu email">
                            </span>
                        </div>
                        <input class="bt newPass" type="submit" value="enviar">
                    </form>
                </div>
                <p>Ainda não tem cadastro? <b>Faça <a href="#/cadastro">aqui.</a></b></p>
            </div>
        </div>
    </div>
</template>


<script>
    // $(document).on('click', '.esqueciSenha', function(){
    //     console.log('click on element defined in vue template');
    // });
</script>

<script>
    //loadFunctionsPage();

    export default {
        name: 'Login',
        created() {
            functionsLogin();
        }
    }
</script>

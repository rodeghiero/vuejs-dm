
<template>
    <div id="pgDashboard">

        <div class="bxNavigation">
            <div class="bxMarca">
                <a href="./" class="marca">
                    <img src="../assets/img/logo-branco.svg">
                </a>
            </div>

            <div class="clearfix user">
                <div class="photo">
                    <img src="../assets/img/user.png">
                </div>
                <div class="infos">
                    <p>Bem vinda,</p>
                    <strong>Donie Marker</strong>
                </div>
            </div>

            <div class="navigation">
                <ul>
                    <li>
                        <a href="javascript:;" title="Dashboard"><i class="icon iDash"><!-- --></i> <span>Dashboard</span></a>
                    </li>

                    <li class="indicators">
                        <p>Usuários</p>
                    </li>
                    <li>
                        <a href="javascript:;" title="Doners"><i class="icon iDoners"><!-- --></i> <span>Doners</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Clientes"><i class="icon iClientes"><!-- --></i> <span>Clientes</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Diaristas"><i class="icon iDiaristas"><!-- --></i> <span>Diaristas</span></a>
                    </li>

                    <li class="indicators">
                        <p>Controle</p>
                    </li>
                    <li>
                        <a href="javascript:;" title="Pedidos"><i class="icon iPedidos"><!-- --></i> <span>Pedidos</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Assinaturas"><i class="icon iAssinaturas"><!-- --></i> <span>Assinaturas</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Cidades"><i class="icon iCidades"><!-- --></i> <span>Cidades</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Nota das Parceiras"><i class="icon iParceiras"><!-- --></i> <span>Nota das Parceiras</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Carteira da Empresa"><i class="icon iCarteira"><!-- --></i> <span>Carteira da Empresa</span></a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Transferências"><i class="icon iTransferencias"><!-- --></i> <span>Transferências</span></a>
                    </li>
                </ul>
            </div>

            <div class="navFooter">
                <p>2018 - Donamaid</p>
                <a href="javascript:;" class="esconderMenu">Esconder Menu</a>
                <a href="javascript:;" class="abrirMenu">Abrir Menu</a>
            </div>
        </div>

        <div class="contents">
            <div class="headContent">
                <a href="javascript:;" class="iconNavigation"><!-- --></a>
                <div class="bxSinalizacao">
                    <a href="javascript:;" class="alertas" title="Alertas">
                        <!-- <span>0</span> -->
                    </a>
                    <a href="javascript:;" class="mensagens" title="Mensagens">
                        <span>3</span>
                    </a>
                    <a href="javascript:;" class="usuario" title="Usuário">
                        <!-- <span>0</span> -->
                    </a>
                </div>
            </div>
            <div class="clearfix content">
                <div class="clearfix dadosPessoais">
                    <div class="foto">
                        <img src="">
                    </div>
                    <div class="dados">
                        <ul class="lstForm">
                            <li class="title">
                                <p>Pessoal</p>
                            </li>
                            <li>
                                <p><b>Nome: </b>Maria Smaniotto</p>
                            </li>

                            <li class="cols2">
                                <p><b>Data de Nascimento: </b>20/03/1989</p>
                            </li>
                            <li class="cols2">
                                <p><b>CPF: </b>018.985.122-06</p>
                            </li>

                            <li class="cols3">
                                <p><b>RG: </b>5096235206</p>
                            </li>
                            <li class="cols3">
                                <p><b>Órgão Expedidor: </b>SJS</p>
                            </li>
                            <li class="cols3">
                                <p><b>Expedição: </b>15/04/2006</p>
                            </li>

                            <li class="cols2">
                                <p><b>Ocupação: </b>do lar</p>
                            </li>
                            <li class="cols2">
                                <p><b>MEI: </b>54846546879</p>
                            </li>

                            <li class="cols3">
                                <p><b>Banco: </b>Banco do Brasil</p>
                            </li>
                            <li class="cols3">
                                <p><b>Agência: </b>29605</p>
                            </li>
                            <li class="cols3">
                                <p><b>Conta: </b>180407-x</p>
                            </li>

                            <li class="title espTp">
                                <p>Contato</p>
                            </li>
                            <li>
                                <input type="text" name="endereco" placeholder="Endereço">
                            </li>

                            <li class="cols3">
                                <input type="text" name="numero" placeholder="nº">
                            </li>
                            <li class="cols3">
                                <span><input type="text" name="complement" placeholder="Complemento"></span>
                            </li>
                            <li class="cols3">
                                <input type="text" name="cep" placeholder="CEP">
                            </li>

                            <li>
                                <input type="text" name="pontoRef" placeholder="Ponto de referência">
                            </li>

                            <li class="cols2">
                                <input type="text" name="celular" placeholder="Celular">
                            </li>
                            <li class="cols2">
                                <span class='esp'><input type="text" name="email" placeholder="E-mail"></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="clearfix problemas">
                    <h3>Problemas</h3>
                    <div class="bloco">
                        <p>Atrasar até 15 min</p>
                        <span>
                            <input type="radio" name="atraso" value="1">
                            <input type="radio" name="atraso" value="2">
                            <input type="radio" name="atraso" value="3">
                            <input type="radio" name="atraso" value="4">
                            <input type="radio" name="atraso" value="5">
                        </span>
                    </div>
                    <div class="bloco">
                        <p>Não cumprir os procedimentos</p>
                        <span>
                            <input type="radio" name="processos" value="1">
                            <input type="radio" name="processos" value="2">
                            <input type="radio" name="processos" value="3">
                            <input type="radio" name="processos" value="4">
                            <input type="radio" name="processos" value="5">
                        </span>
                    </div>
                    <div class="bloco">
                        <p>Atrasar de 15 a 60 min</p>
                        <span>
                            <input type="radio" name="atraso2" value="1">
                            <input type="radio" name="atraso2" value="2">
                            <input type="radio" name="atraso2" value="3">
                            <input type="radio" name="atraso2" value="4">
                            <input type="radio" name="atraso2" value="5">
                        </span>
                    </div>
                    <div class="bloco">
                        <p>Cancelar com antecedência (12h+)</p>
                        <span>
                            <input type="radio" name="cancelar" value="1">
                            <input type="radio" name="cancelar" value="2">
                            <input type="radio" name="cancelar" value="3">
                            <input type="radio" name="cancelar" value="4">
                            <input type="radio" name="cancelar" value="5">
                        </span>
                    </div>
                    <div class="bloco">
                        <p>Faltar</p>
                        <span>
                            <input type="radio" name="faltar" value="1">
                        </span>
                    </div>
                </div>

                <div class="clearfix tabs">
                    <ul class="clearfix navigationTabs">
                        <li><a href="javascript:;" data-tab="agenda" class="active" title="Agenda">Agenda</a></li>
                        <li><a href="javascript:;" data-tab="pedidos" title="Pedidos">Pedidos</a></li>
                        <li><a href="javascript:;" data-tab="avaliacoes" title="Avaliações">Avaliações</a></li>
                        <li><a href="javascript:;" data-tab="carteira" title="Carteira">Carteira</a></li>
                    </ul>

                    <div id="agenda" class="tab active">
                        Agenda
                        <div>plugin jquery AGENDA</div>
                    </div>

                    <div id="pedidos" class="tab">
                        <div class="busca">
                            <form>
                                <ul class="lstForm">
                                    <li>
                                        <input class="btnBusca" type="submit">
                                    </li>
                                    <li>
                                        <input type="text" name="buscar" placeholder="buscar">
                                    </li>
                                    <li>
                                        <a href="javascript:;" class="buscaAvancada">busca avançada</a>
                                    </li>
                                </ul>
                            </form>
                        </div>
                        <div class="bxTable">
                            <table class="tblTp1" cellpadding="0" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Pedido</th>
                                        <th>Cliente</th>
                                        <th>Duração</th>
                                        <th>Data</th>
                                        <th>Valor</th>
                                        <th>Total</th>
                                        <th>Status Diarista</th>
                                        <th>Valor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>201801</td>
                                        <td>Adriana Cardozo</td>
                                        <td>4.0 horas</td>
                                        <td>13/03/2018 - 13:00</td>
                                        <td>R$ 60,00</td>
                                        <td>R$ 74,90</td>
                                        <td>Confirmado</td>
                                        <td>Disponível</td>
                                        <td>
                                            <a href="javascript:;" class="btCircle" title="finalizar">finalizar</a>
                                            <a href="javascript:;" class="btCircle" title="relatar problema">relatar problema</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>201801</td>
                                        <td>Adriana Cardozo</td>
                                        <td>4.0 horas</td>
                                        <td>13/03/2018 - 13:00</td>
                                        <td>R$ 60,00</td>
                                        <td>R$ 74,90</td>
                                        <td>Confirmado</td>
                                        <td>Disponível</td>
                                        <td>
                                            <a href="javascript:;" class="btCircle" title="finalizar">finalizar</a>
                                            <a href="javascript:;" class="btCircle" title="relatar problema">relatar problema</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>201801</td>
                                        <td>Adriana Cardozo</td>
                                        <td>4.0 horas</td>
                                        <td>13/03/2018 - 13:00</td>
                                        <td>R$ 60,00</td>
                                        <td>R$ 74,90</td>
                                        <td>Confirmado</td>
                                        <td>Disponível</td>
                                        <td>
                                            <a href="javascript:;" class="btCircle" title="finalizar">finalizar</a>
                                            <a href="javascript:;" class="btCircle" title="relatar problema">relatar problema</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div id="avaliacoes" class="clearfix tab">
                        <div class="head">
                            <h4>
                                <span>Média Avaliações 4,8</span>
                                <div class="stars">
                                    <span><!-- --></span>
                                    <span><!-- --></span>
                                    <span><!-- --></span>
                                    <span><!-- --></span>
                                    <span class="m"><!-- --></span>
                                </div>
                            </h4>
                        </div>
                        <ul class="clearfix comentarios">
                            <li>
                                <div class="photo"><img src="../assets/img/user.png"></div>
                                <div>
                                    <strong>
                                        <span>Adriana Cardozo</span>
                                        <div class="stars">
                                            <span><!-- --></span>
                                            <span><!-- --></span>
                                            <span><!-- --></span>
                                            <span><!-- --></span>
                                            <span class="m"><!-- --></span>
                                        </div>
                                    </strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamm.</p>
                                </div>
                            </li>
                            <li>
                                <div class="photo"><img src="../assets/img/user.png"></div>
                                <div>
                                    <strong>
                                        <span>Adriana Cardozo</span>
                                        <div class="stars">
                                            <span><!-- --></span>
                                            <span><!-- --></span>
                                            <span><!-- --></span>
                                            <span><!-- --></span>
                                            <span class="m"><!-- --></span>
                                        </div>
                                    </strong>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamm.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="carteira" class="tab">
                        <div class="status">
                            <i class="icon"><!-- --></i>
                            <strong class="valorAtual">R$ <b>935</b>,00</strong>
                            <p class="title">Saldo disponível</p>
                            <ul class="clearfix valores">
                                <li>
                                    <p>Saldo Futuro</p>
                                    <strong>R$ 400,50</strong>
                                </li>
                                <li>
                                    <p>Saldo Bloqueado</p>
                                    <strong>R$ 300,50</strong>
                                </li>
                            </ul>
                            <a href="javascript:;" class="sacar">sacar</a>
                        </div>

                        <div class="clearfix mensagemSaque">
                            <p>Transferência realizada com sucesso.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navFooter">
                <a href="javascript:;" class="btCircle" title="excluir">excluir</a>
                <a href="javascript:;" class="btCircle" title="desativar">desativar</a>
                <a href="javascript:;" class="btCircle" title="salvar">salvar</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        created() {
            inputPerson();
            functionsDashboard();
            navigationTabs();
        }
    }
</script>


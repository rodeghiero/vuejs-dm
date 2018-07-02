
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
                        <a href="javascript:;" title="Dashboard"><i class="icon iDash"><!-- --></i> Dashboard</a>
                    </li>

                    <li class="indicators">
                        <p>Usuários</p>
                    </li>
                    <li>
                        <a href="javascript:;" title="Doners"><i class="icon iDoners"><!-- --></i> Doners</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Clientes"><i class="icon iClientes"><!-- --></i> Clientes</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Diaristas"><i class="icon iDiaristas"><!-- --></i> Diaristas</a>
                    </li>

                    <li class="indicators">
                        <p>Controle</p>
                    </li>
                    <li>
                        <a href="javascript:;" title="Pedidos"><i class="icon iPedidos"><!-- --></i> Pedidos</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Assinaturas"><i class="icon iAssinaturas"><!-- --></i> Assinaturas</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Cidades"><i class="icon iCidades"><!-- --></i> Cidades</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Nota das Parceiras"><i class="icon iParceiras"><!-- --></i> Nota das Parceiras</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Carteira da Empresa"><i class="icon iCarteira"><!-- --></i> Carteira da Empresa</a>
                    </li>
                    <li>
                        <a href="javascript:;" title="Transferências"><i class="icon iTransferencias"><!-- --></i> Transferências</a>
                    </li>
                </ul>
            </div>

            <div class="navFooter">
                <p>2018 - Donamaid</p>
                <a href="javascript:;" class="esconderMenu">Esconder Menu</a>
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

                        <!-- Tela Pedidos -->
                        <div class="busca">
                            Busca
                        </div>
                        <table>
                            <thead>
                                <th>
                                    <td>Pedido</td>
                                    <td>Cliente</td>
                                    <td>Duração</td>
                                    <td>Data</td>
                                    <td>Valor</td>
                                    <td>Total</td>
                                    <td>Status Diarista</td>
                                    <td>Valor</td>
                                    <td></td>
                                </th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>201801</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>

                        <!-- Tela Avaliações -->
                        <div>
                            <h4>Média Avaliações 4,8</h4>
                        </div>
                        <ul class="comentarios">
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamm.</li>
                        </ul>
                    </div>
                    <div id="pedidos" class="tab">
                        Pedidos
                    </div>
                    <div id="avaliacoes" class="tab">
                        Avaliações
                    </div>
                    <div id="carteira" class="tab">
                        Carteira
                    </div>
                </div>
            </div>
            <div class="navFooter">
                <a href="javascript:;" title="excluir">excluir</a>
                <a href="javascript:;" title="desativar">desativar</a>
                <a href="javascript:;" title="salvar" class="blocked">salvar</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Dashboard',
        created() {
            inputPerson();
            navigationTabs();
        }
    }
</script>


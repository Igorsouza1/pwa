<template>
    <div class="teste" v-bind:onload="solicitacao()">
        <div class="card m-auto mt-2" style="width: 90%;">
            <div class="card-body">
                <h5 class="card-title">Cavalo Pantaneiro - {{qualidade}}</h5>

                <p class="card-text">(1-2)Altura da Cernelha: {{comprimentoCernelha}} </p>
                <p class="card-text">(3-4)Altura do Dorso: {{alturaDoDorso}} </p>
                <p class="card-text">(5-6)Altura da Garupa: {{alturaDaGarupa}} </p>
                <p class="card-text">(7-8)Comprimento do Corpo: {{comprimentoDoCorpo}} </p>
                <p class="card-text">(9-10)Comprimento da Espadua: {{comprimentoDaEspadua}} </p>
                <p class="card-text">(11-12)comprimento dorsoLombar: {{comprimentoDorsoLombar}} </p>
                <p class="card-text">(13-14)Largura do peito: {{larguraDoPeito}} </p>
                <p class="card-text">(15-16)Largura das Ancas: {{larguraAncas}} </p>

                <div class="imageCavalo">
                    <img src="../assets/cavaloPantaneiroMedidas.png" alt="Medidas Lineares do cavalo Pantaneiro">
                </div>
                <a href="/" class="card-link btn btn-primary mt-5">Novas medidas</a>
            </div>
        </div>

    </div>
</template>
<script>


export default {
    name: "ResultadoCavalo",
    data() {
        return {
            comprimentoCernelha: null,
            alturaDoDorso: null,
            comprimentoDoCorpo: null,
            comprimentoDaEspadua: null,
            comprimentoDorsoLombar: null,
            larguraDoPeito: null,
            larguraAncas: null,
            alturaDaGarupa: null,
            qualidade: ""
        }
    },
    methods: {
        async solicitacao() {
            await fetch('http://localhost:8787/', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.comprimentoCernelha = data.alturaCernelha
                    this.alturaDoDorso = data.alturaDorso
                    this.alturaDaGarupa = data.alturaGarupa
                    this.comprimentoDoCorpo = data.comprimentoCorpo
                    this.comprimentoDaEspadua = data.comprimentoEspadua
                    this.comprimentoDorsoLombar = data.comprimentoDorsoLombar
                    this.larguraDoPeito = data.larguraPeito
                    this.larguraAncas = data.larguraAncas
                    if(data.qualidade == 0){
                        this.qualidade = "Baixa Qualidade"
                    }else if(data.qualidade == 1){
                        this.qualidade = "Média Qualidade"
                    }else if(data.qualidade == 2){
                        this.qualidade = "Alta Qualidade"
                    }
                
                });


        }

    }
}
</script>
<style scoped>

</style>
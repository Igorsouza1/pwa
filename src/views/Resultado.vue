<template>
    <div class="teste">
        <div class="card m-auto mt-2" style="width: 90%;">
            <div class="card-body" >
                <h5 class="card-title">Cavalo Pantaneiro - Alta Qualidade</h5>
                <p class="card-text">Média: {{media}} </p>
                <p class="card-text">(1-2)Altura da Cernelha: {{comprimentoDaEspadua}} </p>
                <p class="card-text">(3-4)Altura do Dorso: {{alturaDaGarupa}} </p>
                <p class="card-text">(5-6)Altura da Garupa: {{comprimentoDaEspadua}} </p>
                <p class="card-text">(7-8)Comprimento do Corpo: {{comprimentoDoCorpo}} </p>
                <p class="card-text">(9-10)Comprimento da Espadua: {{comprimentoDaEspadua}} </p>
                <p class="card-text">(11-12)comprimento dorsoLombar: {{comprimentoDaEspadua}} </p>
                <p class="card-text">(13-14)Largura do peito: {{comprimentoDaEspadua}} </p>
                <p class="card-text">(15-16)Largura das Ancas: {{comprimentoDaEspadua}} </p>
                
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
        return{
            media: null,
            comprimentoDoCorpo: null,
            comprimentoDaEspadua: null,
            alturaDaGarupa: null
        }
    },
    methods:{
       
        }
}
</script>
<style scoped>
    

</style>
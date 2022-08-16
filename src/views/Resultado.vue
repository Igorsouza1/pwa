<template>
    <div class="p-5">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Cavalo Pantaneiro - Alta Qualidade</h5>
                <p class="card-text">Média: {{media}} </p>
                <p class="card-text">Comprimento do Corpo: {{comprimentoDoCorpo}} </p>
                <p class="card-text">Comprimento da Espadua: {{comprimentoDaEspadua}} </p>
                <p class="card-text">Altura da Garupa: {{alturaDaGarupa}} </p>
                <a href="/" class="card-link btn btn-primary">Novas medidas</a>
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
    }
}
</script>
<style scoped>
</style>
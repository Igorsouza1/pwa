<template >
    <div>
        <form class="m-2" @submit.prevent="tiraMedidas">
            <div class="form-group mb-2">
                <label for="comprimentoDoCorpo">Comp. do Corpo:</label>
                <input type="number" v-model="comprimentoDoCorpo" class="form-control" id="comprimentoDoCorpo"
                    placeholder="Comprimento do Corpo">
            </div>
            <div class="form-group mb-2">
                <label for="comprimentoDaEspadua">Comp. da espádua:</label>
                <input type="number" v-model="comprimentoDaEspadua" class="form-control" id="comprimentoDaEspadua"
                    placeholder="Comprimento da espadua">
            </div>
            <div class="form-group mb-2">
                <label for="comprimentoDorsoLombar">Comp. dorso-lombar:</label>
                <input type="number" v-model="comprimentoDorsoLombar" class="form-control" id="comprimentoDorsoLombar"
                    placeholder="Comprimento dorso-lombar">
            </div>
            <div class="form-group mb-2">
                <label for="larguraDoPeito">Largura do peito:</label>
                <input type="number" v-model="larguraDoPeito" class="form-control" id="larguraDoPeito"
                    placeholder="Largura do peito">
            </div>
            <div class="form-group mb-2">
                <label for="larguraDasAncas">Largura das ancas:</label>
                <input type="number" v-model="larguraDasAncas" class="form-control" id="larguraDasAncas"
                    placeholder="Largura das ancas">
            </div>
            <div class="form-group mb-2">
                <label for="alturaDaGarupa">Altura da garupa:</label>
                <input type="number" v-model="alturaDaGarupa" class="form-control" id="alturaDaGarupa"
                    placeholder="Altura da garupa">
            </div>
            <div class="form-group mb-2">
                <label for="alturaDaCernelha">Altura da cernelha:</label>
                <input type="number" v-model="alturaDaCernelha" class="form-control" id="alturaDaCernelha"
                    placeholder="Altura da cernelha">
            </div>
            <div class="form-group mb-2">
                <label for="alturaDoDorso">Altura do dorso:</label>
                <input type="number" v-model="alturaDoDorso" class="form-control" id="alturaDoDorso"
                    placeholder="Altura do dorso">
            </div>
            <fieldset class="form-group mb-2">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Sexo:</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="macho" value="macho"
                                v-model="sexo" checked>
                            <label class="form-check-label" for="Macho">
                                Macho
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="inputRadio" id="femea" value="femea"
                                v-model="sexo">
                            <label class="form-check-label" for="femea">
                                Femea
                            </label>
                            <br />
                            <span>Sexo: {{ sexo }}</span>
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="row justify-content-center">
                <button type="submit" class="btn btn-primary w-50 p-3">Calcular</button>
            </div>
        </form>
    </div>
</template>
<script>


export default {
    name: 'FormCavalo',
    data() {
        return {
            comprimentoDoCorpo: null,
            comprimentoDaEspadua: null,
            comprimentoDorsoLombar: null,
            larguraDoPeito: null,
            larguraDasAncas: null,
            alturaDaGarupa: null,
            alturaDaCernelha: null,
            alturaDoDorso: null,
            sexo: 'macho'
        }
    },
     methods: {
         tiraMedidas(){
            const data = {
                comprimentoDoCorpo: this.comprimentoDoCorpo,
                comprimentoDaEspadua: this.comprimentoDaEspadua,
                comprimentoDorsoLombar: this.comprimentoDorsoLombar,
                larguraDoPeito: this.larguraDoPeito,
                larguraDasAncas: this.larguraDasAncas,
                alturaDaGarupa: this.alturaDaGarupa,
                alturaDaCernelha: this.alturaDaCernelha,
                alturaDoDorso: this.alturaDoDorso,
                sexo: this.sexo
            }
            this.comprimentoDoCorpo = '',
            this.comprimentoDaEspadua = '',
            this.comprimentoDorsoLombar = '',
            this.larguraDoPeito = '',
            this.larguraDasAncas = '',
            this.alturaDaGarupa = '',
            this.alturaDaCernelha = '',
            this.alturaDoDorso = '',
            this.sexo = 'macho'
            
            console.log(data)
        }
    }
}
</script>
<style scoped>
</style>
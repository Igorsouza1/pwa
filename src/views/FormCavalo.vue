<template >
    <div>
        <Form class="m-2"  method="POST" action="http://localhost:8787/submit">
            <div class="form-group mb-2">
                <label for="alturaDaCernelha">Altura da Cernelha:</label>
                <Field type="number" v-model="alturaDaCernelha" class="form-control"
                    id="alturaDaCernelha" placeholder="altura Da Cernelha" :rules="validate"
                    name="alturaDaCernelha" />
                <ErrorMessage name="comprimentoCorpo" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="alturaDoDorso">Altura do Dorso</label>
                <Field type="number" v-model="alturaDoDorso" class="form-control"
                    id="alturaDoDorso" placeholder="altura Do Dorso" :rules="validate"
                    name="alturaDoDorso" />
                <ErrorMessage name="alturaDoDorso" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="alturaDaGarupa">Altura da Garupa:</label>
                <Field type="number" v-model="alturaDaGarupa" class="form-control"
                    id="alturaDaGarupa" placeholder="altura Da Garupa" :rules="validate"
                    name="alturaDaGarupa" />
                <ErrorMessage name="alturaDaGarupa" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="comprimentoDoCorpo">Comprimento do Corpo:</label>
                <Field type="number" v-model="comprimentoDoCorpo" class="form-control" id="comprimentoDoCorpo"
                    placeholder="comprimento Do Corpo" :rules="validate" name="comprimentoDoCorpo" />
                <ErrorMessage name="comprimentoDoCorpo" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="comprimentoDaEspadua">Comprimento da Espadua:</label>
                <Field type="number" v-model="comprimentoDaEspadua" class="form-control" id="comprimentoDaEspadua"
                    placeholder="Comprimento Da Espadua" :rules="validate" name="comprimentoDaEspadua" />
                <ErrorMessage name="comprimentoDaEspadua" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="comprimentoDorsoLombar">Comprimento DorsoLombar:</label>
                <Field type="number" v-model="comprimentoDorsoLombar" class="form-control" id="comprimentoDorsoLombar"
                    placeholder="Comprimento DorsoLombar" :rules="validate" name="comprimentoDorsoLombar" />
                <ErrorMessage name="comprimentoDorsoLombar" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="larguraDoPeito">Largura do Peito:</label>
                <Field type="number" v-model="larguraDoPeito" class="form-control" id="larguraDoPeito"
                    placeholder="largura Do Peito" :rules="validate" name="larguraDoPeito" />
                <ErrorMessage name="larguraDoPeito" style="color: red;" />
            </div>
            <div class="form-group mb-2">
                <label for="larguraDasAncas">Largura das Ancas:</label>
                <Field type="number" v-model="larguraDasAncas" class="form-control" id="larguraDasAncas"
                    placeholder="Altura do dorso" :rules="validate" name="larguraDasAncas" />
                <ErrorMessage name="larguraDasAncas" style="color: red;" />
            </div>
            <fieldset class="form-group mb-2">
                <div class="row">
                    <legend class="col-form-label col-sm-2 pt-0">Sexo:</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexo" id="macho" value="0"
                                v-model="sexo" checked>
                            <label class="form-check-label" for="Macho">
                                Macho
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="sexo" id="femea" value="1"
                                v-model="sexo">
                            <label class="form-check-label" for="femea">
                                Femea
                            </label>
                            <br />
                        </div>
                    </div>
                </div>
            </fieldset>
            <div class="row justify-content-center">
                <button type="submit" href="/#/resultado" class="btn btn-primary w-50 p-3">Calcular</button>
            </div>

        </Form>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'


export default {

    name: 'FormCavalo',
    components: {
        Form,
        Field,
        ErrorMessage
    },
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
                sexo: 0
        }
    },
    methods: {
       
        tiraMedidas() {
            this.$emit('tiraMedidas', this.medidaCavalo)
        },
       

        //Verifica se os campos do formulario estao vazios
        validate(value) {
            // if the field is empty
            if (!value) {
                return 'Este campo é obriagatório';
            }
            // All is good
            return true;
        },
    },

}
</script>
<style scoped>
</style>
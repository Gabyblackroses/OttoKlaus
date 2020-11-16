<template>
  <v-row justify="center">
    <v-dialog
      v-model="showForm"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">Formulario de Juguetes</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Código" v-model="toy.data.code" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Nombre" required v-model="toy.data.name" ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Stock" v-model="toy.data.stock" required ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field label="Precio" prefix="$" v-model="toy.price.code" required ></v-text-field>
              </v-col>  
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('close-form')"
          >
            Close
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="submitForm"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props:{
    showForm:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      toy:{
        id: null,
        data:{
          name: null,
          code: null,
          price: 0,
          stock: 0
        }
      }
    }
  },
  methods:{
    ...mapActions(["createToy", "updateToy"]),
    submitForm(){
      if(!confirm('Estás seguro?')){ return }
      if(this.toy.id){
        this.updateToy(this.toy)
      }else{
        this.createToy(this.toy)
      }
    }
  }
}
</script>
<template>
  <div>
    <toys-form :showForm="showForm" @close-form="showForm = false" @save-form="showForm= false"></toys-form>
    <v-container>
      <v-row>
        <h1>Juguetes</h1>
        <v-spacer></v-spacer>
        <v-btn dark color="green accent-2" @click.prevent="showForm=true">Nuevo</v-btn>
      </v-row>
    </v-container>
    <v-container>
      <v-simple-table>
        <thead>
          <tr>
            <th class="text-left">Código</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Stock</th>
            <th class="text-left">Precio</th>
            <th class="text-left"></th>
            <th class="text-left"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="toy in toys" :key="toy.id">
            <td>{{ toy.data.code }}</td>
            <td>{{ toy.data.name }}</td>
            <td>{{ toy.data.stock }}</td>
            <td>{{ toy.data.price }}</td>
            <td><v-btn text color="yellow accent-3">Editar</v-btn></td>
            <td><v-btn text color="red accent-3" @click="removeToy(toy.id)">Eliminar</v-btn></td>   
          </tr>
        </tbody>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
import ToysForm from '@/components/ToysForm'
import { mapState, mapActions } from "vuex";
export default {
  name: "Toy",
  components:{
    ToysForm
  },
  data(){
    return{
      showForm: false
    }
  },
  computed: {
    ...mapState(["toys"]),
  },
  methods: {
    ...mapActions(["getToys", "deleteToy"]),
    removeToy(toyId){
      if (confirm('Estás seguro??')){
        this.deleteToy(toyId)
      }
    }
  },
  created() {
    this.getToys();
  },
};
</script>

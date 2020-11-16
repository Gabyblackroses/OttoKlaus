<template>
  <v-simple-table>
    <template>
      <thead>
        <tr>
          <th class="text-left">
            Código
          </th>
          <th class="text-left">
            Nombre
          </th>
          <th class="text-left">
            Stock
          </th>
          <th class="text-left">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="toy in toys" :key="toy.name">
        <td>{{ toy.code }}</td>
        <td>{{ toy.name }}</td>
        <td>{{ toy.stock }}</td>
        <td>{{ toy.price }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed:{
    ...mapState(["toys"])
  },
  created(){
    this.getToys()
  }
}
</script>

<!-- <template>
  <div>
    {{ test }}
    {{ test2 }}
    <button @click="add">mutate</button>
    <button @click="actionAdd">actionx</button>
    <button @click="getIP">getIP</button>
    <button @click="mapMutate">mapMutate</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    test() {
      return this.$store.getters.editX;
    },
    test2() {
      return this.$store.state.x;
    },
  },
  methods: {
    ...mapMutations({
      mapAddx: "addX",
    }),
    add() {
      this.$store.commit("addX", 1);
    },
    actionAdd() {
      this.$store.dispatch("actionX", 3);
    },
    getIP() {
      this.$store.dispatch("getIp");
    },
    mapMutate() {
      this.mapAddx("mapAddx");
    },
  },
};
</script>
 -->

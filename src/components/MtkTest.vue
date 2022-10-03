<template>
  <tr>
    <th class="main">
      <span class="up"
        ><button @click="MissionsortList()">
          <i class="fa-solid fa-angles-up up"></i></button></span
      >Mission Name
      <span class="down"
        ><button @click="MissionzsortList()">
          <i class="fa-solid fa-angles-down down"></i></button
      ></span>
    </th>
    <th class="main">
      <span class="up"
        ><button @click="RocketsortList()">
          <i class="fa-solid fa-angles-up up"></i></button
      ></span>
      Rocket Name
      <span class="down"
        ><button @click="RocketzsortList()">
          <i class="fa-solid fa-angles-down down"></i></button
      ></span>
    </th>
    <th class="main">
      <span class="up"
        ><button @click="RocketTypesortList()">
          <i class="fa-solid fa-angles-up up"></i></button
      ></span>
      Rocket Type
      <span class="down"
        ><button @click="RocketTypezsortList()">
          <i class="fa-solid fa-angles-down down"></i></button
      ></span>
    </th>
    <th class="main">
      <span class="up"
        ><button @click="DatesortList()">
          <i class="fa-solid fa-angles-up up"></i></button
      ></span>
      Launch Date
      <span class="down"
        ><button @click="DatezsortList()">
          <i class="fa-solid fa-angles-down down"></i></button
      ></span>
    </th>
  </tr>
  <div v-for="(datas, index) in paginatedData" :key="index">
    <tr>
      <th class="second">{{ datas.mission_name }}</th>
      <th class="second">{{ datas.rocket.rocket_name }}</th>
      <th class="second">{{ datas.rocket.rocket_type }}</th>
      <th class="second">{{ datas.launch_date_local.slice(0, 10) }}</th>
    </tr>
  </div>
  <button @click="prepage()">上一頁</button>
  <button @click="nextpage()">下一頁</button>
  <button @click="clicked()">測適用</button>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      zero: 0,
      per: 20,
    };
  },
  methods: {
    clicked() {
      console.log();
    },
    prepage() {
      if (this.zero <= 0) {
        this.zero = 0;
      } else {
        this.zero--;
      }
    },
    nextpage() {
      if (this.zero >= Math.floor(this.data.launches.length / this.per)) {
        this.zero = Math.floor(this.data.launches.length / this.per);
      } else {
        this.zero++;
      }
    },
    MissionsortList() {
      return this.data.launches.sort((a, b) => {
        return a["mission_name"].localeCompare(b["mission_name"]);
      });
    },
    MissionzsortList() {
      this.data.launches.sort((a, b) => {
        return b["mission_name"].localeCompare(a["mission_name"]);
      });
    },
    RocketsortList() {
      return this.data.launches.sort((a, b) => {
        a.rocket.rocket_name.charCodeAt(0) - b.rocket.rocket_name.charCodeAt(0);
      });
    },
    RocketzsortList() {
      return this.data.launches.sort((a, b) => {
        a.rocket.rocket_name.charCodeAt(0) - b.rocket.rocket_name.charCodeAt(0);
      });
    },
    RocketTypesortList() {
      return this.data.launches.sort((a, b) => {
        a.rocket.rocket_type.charCodeAt(0) - b.rocket.rocket_type.charCodeAt(0);
      });
    },
    RocketTypezsortList() {
      return this.data.launches.sort((a, b) => {
        return b[".rocket.rocket_type"].localeCompare(a["rocket_type"]);
      });
    },
    DatesortList() {
      return this.data.launches.sort((a, b) => {
        return b["launch_date_local"].localeCompare(a["launch_date_local"]);
      });
    },
    DatezsortList() {
      return this.data.launches.sort((a, b) => {
        return b["launch_date_local"].localeCompare(a["launch_date_local"]);
      });
    },
  },
  computed: {
    ...mapState(["data"]),
    paginatedData() {
      let start = this.zero * 20;
      let end = start + 20;
      return this.data.launches.slice(start, end);
    },
  },
};
</script>

<style>
.main {
  background-color: #009fcc;
  padding: 10px;
  border: 1px solid #000;
  color: #fff;
  width: 300px;
}
.second {
  padding: 10px;
  border: 1px solid #000;
  color: black;
  width: 300px;
}
td {
  border: 1px solid #000;
  padding: 5px;
}
</style>

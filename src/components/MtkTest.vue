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
  <div>
    <div v-for="(datas, index) in paginatedData" :key="index">
      <tr>
        <th class="second">{{ datas.mission_name }}</th>
        <th class="second">{{ datas.rocket.rocket_name }}</th>
        <th class="second">{{ datas.rocket.rocket_type }}</th>
        <th class="second">
          {{ datas.launch_date_local.slice(0, 10).replace(/-/g, "/") }}
        </th>
      </tr>
    </div>
  </div>
  <button @click="prepage()">上一頁</button>
  <button @click="nextpage()">下一頁</button>
  <input
    type="search"
    v-model.lazy.trim="keyWord"
    placeholder="請輸入要查詢的東西"
  />
  <button @click="search()">搜尋</button>
  <button @click="clicked()">按我喔吼吼</button>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      zero: 0,
      per: 20,
      keyWord: "",
      newarray: [],
    };
  },
  methods: {
    clicked() {
      console.log(this.data.launches[0].launch_date_local);
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
      this.data.launches.sort((a, b) => {
        return a["mission_name"].localeCompare(b["mission_name"]);
      });
    },
    MissionzsortList() {
      this.data.launches.sort((a, b) => {
        return b["mission_name"].localeCompare(a["mission_name"]);
      });
    },
    RocketsortList() {
      this.data.launches.sort((a, b) => {
        return a.rocket.rocket_name.localeCompare(b.rocket.rocket_name);
      });
    },
    RocketzsortList() {
      this.data.launches.sort((a, b) => {
        return b.rocket.rocket_name.localeCompare(a.rocket.rocket_name);
      });
    },
    RocketTypesortList() {
      this.data.launches.sort((a, b) => {
        return a.rocket.rocket_type.localeCompare(b.rocket.rocket_type);
      });
    },
    RocketTypezsortList() {
      this.data.launches.sort((a, b) => {
        return b.rocket.rocket_type.localeCompare(a.rocket.rocket_type);
      });
    },
    DatesortList() {
      this.data.launches.sort((a, b) => {
        return a["launch_date_local"].localeCompare(b["launch_date_local"]);
      });
    },
    DatezsortList() {
      this.data.launches.sort((a, b) => {
        return b["launch_date_local"].localeCompare(a["launch_date_local"]);
      });
    },
    search() {
      this.data.launches = this.data.launches.filter(
        (searchResult) =>
          searchResult.launch_date_local.includes(this.keyWord) ||
          searchResult.rocket.rocket_type.includes(this.keyWord) ||
          searchResult.rocket.rocket_name.includes(this.keyWord) ||
          searchResult.mission_name.includes(this.keyWord)
      );
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

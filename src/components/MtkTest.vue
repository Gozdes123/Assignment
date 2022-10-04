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
    <div v-for="(datas, index) in PaginatedData" :key="index">
      <tr>
        <th class="second">{{ datas.mission_name }}</th>
        <th class="second">{{ datas.rocket.rocket_name }}</th>
        <th class="second">{{ datas.rocket.rocket_type }}</th>
        <th class="second">
          {{ datas.launch_date_local }}
        </th>
      </tr>
    </div>
  </div>
  <div class="pagebuttonbar">
    <button @click="PrePage()" class="prebutton">上一頁</button>
    <button
      v-for="(page, index) in TotalPage"
      :key="index"
      :style="{ backgroundColor: index == this.zero ? '#fcaa3f' : 'white' }"
      class="pagebutton"
      @click="ClickPage(index)"
    >
      {{ index + 1 }}
    </button>
    <button @click="NextPage()" class="nextbutton">下一頁</button>
  </div>
  <div class="searchbar">
    <input
      type="search"
      v-model.lazy.trim="keyWord"
      placeholder="請輸入要查詢的東西"
      class="inputext"
    />
    <button @click="search()" class="searchbutton">搜尋</button>
    <button @click="reset()" class="resetbutton">Reset</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  created() {
    this.data.launches.map(function (array) {
      array.launch_date_local = array.launch_date_local
        .slice(0, 10)
        .replace(/-/g, "/");
    });
    this.newarray = this.data.launches;
  },
  data() {
    return {
      zero: 0,
      per: 20,
      keyWord: "",
      newarray: [],
    };
  },
  methods: {
    reset() {
      this.newarray = this.data.launches;
      this.keyWord = "";
      this.zero = 0;
    },
    PrePage() {
      if (this.zero <= 0) {
        this.zero = 0;
      } else {
        this.zero--;
      }
    },
    ClickPage(num) {
      this.zero = num;
    },
    NextPage() {
      if (this.zero >= Math.floor(this.newarray.length / this.per)) {
        this.zero = Math.floor(this.newarray.length / this.per);
      } else {
        this.zero++;
      }
    },
    MissionsortList() {
      this.newarray.sort((a, b) => {
        return a["mission_name"].localeCompare(b["mission_name"]);
      });
    },
    MissionzsortList() {
      this.newarray.sort((a, b) => {
        return b["mission_name"].localeCompare(a["mission_name"]);
      });
    },
    RocketsortList() {
      this.newarray.sort((a, b) => {
        return a.rocket.rocket_name.localeCompare(b.rocket.rocket_name);
      });
    },
    RocketzsortList() {
      this.newarray.sort((a, b) => {
        return b.rocket.rocket_name.localeCompare(a.rocket.rocket_name);
      });
    },
    RocketTypesortList() {
      this.newarray.sort((a, b) => {
        return a.rocket.rocket_type.localeCompare(b.rocket.rocket_type);
      });
    },
    RocketTypezsortList() {
      this.newarray.sort((a, b) => {
        return b.rocket.rocket_type.localeCompare(a.rocket.rocket_type);
      });
    },
    DatesortList() {
      this.newarray.sort((a, b) => {
        return a["launch_date_local"].localeCompare(b["launch_date_local"]);
      });
    },
    DatezsortList() {
      this.newarray.sort((a, b) => {
        return b["launch_date_local"].localeCompare(a["launch_date_local"]);
      });
    },
    search() {
      if (this.keyWord !== "") {
        this.newarray = this.data.launches.filter(
          (searchResult) =>
            searchResult.launch_date_local.includes(this.keyWord) ||
            searchResult.rocket.rocket_type.includes(this.keyWord) ||
            searchResult.rocket.rocket_name.includes(this.keyWord) ||
            searchResult.mission_name.includes(this.keyWord)
        );
        this.zero = 0;
      } else {
        this.newarray = this.data.launches;
      }
    },
  },
  computed: {
    ...mapState(["data"]),
    PaginatedData() {
      let start = this.zero * 20;
      let end = start + 20;
      return this.newarray.slice(start, end);
    },
    TotalPage() {
      return Math.ceil(this.newarray.length / this.per);
    },
  },
};
</script>

<style>
.main {
  background-color: #61daf8;
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
.pagebuttonbar {
  text-align: center;
  margin-top: 10px;
}
.pagebutton {
  width: 100px;
  height: 50px;
}
.nextbutton {
  width: 100px;
  height: 50px;
}
.prebutton {
  width: 100px;
  height: 50px;
}
.inputext {
  width: 400px;
  height: 30px;
}
.searchbar {
  text-align: center;
  margin-top: 10px;
}
.searchbutton {
  width: 100px;
  height: 50px;
  margin: 10px;
}
.resetbutton {
  width: 100px;
  height: 50px;
}
</style>

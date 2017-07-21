<template>

  <nav class="lotto-menu">
    <Hamburger  v-show="showOtherMenu" @close="showOtherMenu=false">
      <nav slot="header">
        <ul class="other-menu-list">
          <li class="other-menu-list-item"><a href="#">수동으로 번호 뽑기</a></li>
          <li class="other-menu-list-item"><a href="#">사러가기</a></li>
          <li class="other-menu-list-item" @click="watchWinningNumbers"><a href="#">지난 당첨번호들 조회</a></li>
        </ul>
      </nav>
      <span slot="footer" @click="showOtherMenu = false">
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </Hamburger>
    <ul class="lottonumber-setting-list">
      <li class="lottonumber-setting-list-item">
          <span class="btn-othersmenus" @click="openHamberger">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </span>
      </span>
      </li>
      <li class="lottonumber-setting-list-item">
        <span class="btn-make-lottonumber" @click="makeLottoNumber">Make LottoNumber
          <span class="btn-make-lottonumber-icon">
          <i class="fa fa-eercast" aria-hidden="true"></i>
        </span>
      </span>
      </li>
      <li class="lottonumber-setting-list-item" v-if="displaySaveButton">
        <span class="btn-save-lottonumber" @click="saveLottoNumber">Save it!
        <span class="btn-save-lottonumber-icon">
          <i class="fa fa-floppy-o" aria-hidden="true"></i>
        </span>
      </span>
      </li>
    </ul>
  </nav>
</template>
<script>
import Hamburger from './common/hamburger.vue'

export default {
  name: "",
  data: function data() {
    return {
      displaySaveButton: false,
      showOtherMenu: false
    }
  },
  methods: {
    makeLottoNumber() {
      this.$emit("makeLottoNumber");
      this.displaySaveButton = true;
    },
    saveLottoNumber(){
      this.$emit("saveLottoNumber");
      this.displaySaveButton = false;
    },
    openHamberger(){
      this.showOtherMenu=true
    },
    watchWinningNumbers(){
      this.showOtherMenu=true  
      this.$emit("watchWinningNumbers")
    }
  },
  components: {
    Hamburger: Hamburger
  }
}
</script>

<style lang="sass">


// other menu
.other-menu-list
  padding: 1em

.other-menu-list-item
  line-height: 2em
  margin-bottom: 1em
  border-bottom: 1px solid #181818
  & a
      color: #181818
      text-decoration: none
//

.lotto-menu

.make-number-icon
  margin-left: 0.5em

.lottonumber-setting-list
  margin-top: 0.8em
  margin-bottom: 0.8em
  display: flex
  align-items: center
  line-height: 2em
  // background-color: #fff

.lottonumber-setting-list-item
  margin-right: 0.8em

.btn-make-lottonumber, .btn-save-lottonumber
  display: inline-block
  background-color: #fff
  line-height: 2em
  padding-left: 0.5em
  border-radius: 0.3em

.btn-make-lottonumber-icon,.btn-save-lottonumber-icon,.btn-othersmenus
  text-align: center
  display: inline-block
  width: 2em
  height: 2em
  border-radius: 0.3em
  line-height: 2em


.btn-othersmenus
  margin-left: auto
  background-color: #FB8C00
  color: #fff

.btn-make-lottonumber-icon
  background-color: #E2591E

.btn-save-lottonumber-icon
  background-color: #E65100
</style>

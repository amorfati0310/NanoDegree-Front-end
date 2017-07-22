<template>
  <section class="last-number-box">
    <h2 class="last-number-heading">지난 당첨번호들</h2>
    <ul class="lastwinning-list">
      <!-- <li class="lastwinning-list-item" v-for="(lastwinningnumber, index) in lastWinningNumberdata"> -->
      <!-- <span class="last-win-inning">{{lastwinningnumber.drwNo}} 회</span>
      <span class="last-win-each-number">{{lastwinningnumber.drwtNo1}}</span>
      <span class="last-win-each-number">{{lastwinningnumber.drwtNo2}}</span>
      <span class="last-win-each-number">{{lastwinningnumber.drwtNo3}}</span>
      <span class="last-win-each-number">{{lastwinningnumber.drwtNo4}}</span>
      <span class="last-win-each-number">{{lastwinningnumber.drwtNo5}}</span>
      <span class="last-win-each-number">{{lastwinningnumber.drwtNo6}}</span>
    </li> -->
      <li class="lastwinning-list-item" >
        <span class="last-win-inning">{{lastWinningNumberdata.drwNo}} 회</span>
        <span class="last-win-each-number">{{lastWinningNumberdata.drwtNo1}}</span>
        <span class="last-win-each-number">{{lastWinningNumberdata.drwtNo2}}</span>
        <span class="last-win-each-number">{{lastWinningNumberdata.drwtNo3}}</span>
        <span class="last-win-each-number">{{lastWinningNumberdata.drwtNo4}}</span>
        <span class="last-win-each-number">{{lastWinningNumberdata.drwtNo5}}</span>
        <span class="last-win-each-number">{{lastWinningNumberdata.drwtNo6}}</span>
      </li>
    </ul>
    <div class="lastwinning-searching-box">
      <span class="btn-previous-lastwinning" @click="previousSearching(lastWinningNumberdata.drwNo)">
        <i class="fa fa-caret-left" aria-hidden="true"></i>
      </span>
      <input type="text">
      <span class="btn-next-lastwinning">
        <i class="fa fa-caret-right" aria-hidden="true" @click="nextSearching"></i>
      </span>
    </div>
    <div class="go-to-main-box">
      <button class="btn-main" @click="gotoMain">Go to Main</button>
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  props:['lastWinningNumberdata'],
  data: function data() {
    return {
      nowInning:''
    }
  },
  methods: {
    gotoMain() {
      this.$emit('gotoMain');
    },
    previousSearching(nowinning){
      nowinning--;
      this.$emit('previousSearching',nowinning)
    },
    nextSearching(nowinning){
      
      nowinning++;
      this.$emit('previousSearching',nowinning)
    }
  }
}
</script>
<style lang="sass">
.last-number-box
  position: absolute
  top: 4.4em
  width: 100%
  min-height: 80vh
  background-color: #ffF

.last-number-heading
  text-align: center

.lastwinning-list
  margin-top: 2em

.lastwinning-list-item
  text-align: center
  line-height: 1.5em

.last-win-inning
  font-size: 1.2em
  margin-right: 0.8em

.last-win-each-number
  display: inline-block
  text-align: center
  background-color: #f1561d
  width: 1.5em
  line-height: 1.5em
  margin-right: 0.5em
  border-radius: 50%

//searchingbox
.lastwinning-searching-box
  margin-top: 2em
  height: 2em
  display: flex
  justify-content: center
  align-items: center

.btn-previous-lastwinning, .btn-next-lastwinning
  width: 1.5em
  line-height: 1.5em
  margin-left: 0.5em
  margin-right: 0.5em
  text-align: center
  border: 1px solid #181818
  border-radius: 50%


//gotoMain
.go-to-main-box
  text-align: center
  margin-top: 3em

.btn-main
  border: 0
  background-color: #722F21
  padding: 1em
  text-align: center
  color: #fff
  border-radius: 0.3em


</style>

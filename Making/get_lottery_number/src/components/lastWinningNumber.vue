<template>
  <section class="last-number-box">
    <h2 class="last-number-heading">지난 당첨번호들</h2>
    <ul class="lastwinning-list">
      <li class="lastwinning-list-item" v-for="(lastwinningnumber, index) in lastWinningNumberdata">
        <span class="last-win-inning">{{lastwinningnumber.drwNo}} 회</span>
        <span class="last-win-each-number">{{lastwinningnumber.drwtNo1}}</span>
        <span class="last-win-each-number">{{lastwinningnumber.drwtNo2}}</span>
        <span class="last-win-each-number">{{lastwinningnumber.drwtNo3}}</span>
        <span class="last-win-each-number">{{lastwinningnumber.drwtNo4}}</span>
        <span class="last-win-each-number">{{lastwinningnumber.drwtNo5}}</span>
        <span class="last-win-each-number">{{lastwinningnumber.drwtNo6}}</span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "",
  props:['lastWinningNumberdata'],
  data: function data() {
    return {

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

</style>

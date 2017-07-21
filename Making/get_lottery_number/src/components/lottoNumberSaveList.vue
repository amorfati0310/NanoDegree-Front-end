<template>
<section class="saved-lotto-numbers">
    <div class="saved-lotto-number-box" v-if="savedNumbers.length">
        <ul class="saved-number-list">
            <li v-for=" (savedlottoNumber,index) in savedNumbers" class="saved-lotto-number">
                <span v-for="lottoitems in savedlottoNumber.numbers">{{lottoitems}}</span>
                <!-- <span class="each-number">{{String(savedlottoNumber.numbers)}}</span> -->
                <span class="btn-delete-lottonumber-icon" @click="deleteLottoNumbers(savedlottoNumber,savedlottoNumber.index,index)">
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
            </li>
        </ul>
        <span class="saved-numbers-count">Saved Lotto Numbers: {{ savedNumbersCount }}</span>
    </div>
    <div class="clear-savedNumber">
      <button class="btn-clearall-savedNumber" @click="allCLear">All Clear</button>

    </div>
</section>
</template>
<script>
export default {
    name: "",
    props: ['savedNumbers','savedNumbersCount'],
    data: function data() {
        return {
        }
    },
    computed: {
        displayNumbers(Numbers) {
            return Numbers;
        }
    },
    methods: {
       displayNumbers() {

      },
      deleteLottoNumbers(savedlottoNumber,localIndex,appdataIndex){
        this.$emit('deleteLottoNumbers',savedlottoNumber,localIndex,appdataIndex);
        console.log(savedlottoNumber,localIndex,appdataIndex);

      },
      allCLear(){
        this.$emit('allCLear')
      }
    },

    updated: function updated() {
        //do something after updating vue instance
        console.log(this.savedNumbers);
    }
}
</script>
<style lang="sass">
.saved-lotto-numbers
  width: 100%
  text-align: center
  line-height: 2.5em
  border-radius: 0.5em
  margin-top: 1em

.saved-lotto-number-box
  background-color: #ffeaba


.saved-number-list

.btn-delete-lottonumber-icon,
  text-align: center
  display: inline-block
  width: 2em
  height: 2em
  border-radius: 0.3em
  line-height: 2em
  color: #cd2015

.saved-numbers-count
  color: #f57a16
  font-weight: bold

.clear-savedNumber


.btn-clearall-savedNumber
  border: 0
  background-color: #fff
  padding: 1em
  text-align: center
  color: #cd2015
  border-radius: 0.3em
  margin-top: 1.2em


</style>

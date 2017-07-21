<template>
  <transition name="modal" >
    <div class="modal-mask" @keyup.esc="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              <!--  -->
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!--  -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="sass">
// vue에서 제공해주는 기본 모달 기능
.modal-mask
  z-index: 1000
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, .5)
  transition: all .3s ease

.modal-wrapper
  width: 100%
  height: 100%
  // background-color: rgba(0, 0, 0, .9)
  transition: all 1s ease
// .modal-container.active
//   transform: translate(0, 0)

.modal-container
  z-index: 2000
  position: relative
  width: 80%
  height: 100vh
  padding: 20px 30px
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33)


.modal-footer
  position: absolute
  top: 0
  right: 0


// .modal-header h3
//   margin-top: 0
//   color: #42b983
//
//
// .modal-body
//   margin: 20px 0
//
//
// .modal-default-button
//   float: right
//
// .footer
//   position: absolute
//   top: 0
//   right: 1em


.modal-enter, .modal-leave-to

  transform: translateX(-100%)

.modal-enter-to, .modal-leave
  transform: translate(0,0)

.modal-enter-active,.modal-leave-active
  transition: all .3s ease

.modal-wrapper-enter
  opacity: 0
.modal-wrapper-enter-to
  opacity: 1
// .modal-wrapper-enter-active
//   transition: all 2.8s ease

</style>

<template>
  <transition name="modal">
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
  transition: opacity .3s ease


.modal-container.active
  transform: translate(0, 0)
// .modal-wrapper
//   display: table-cell
//   vertical-align: middle


.modal-container
  position: relative
  width: 80%
  height: 100vh
  padding: 20px 30px
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33)
  transform: translate(-%, 0)
  transition: transform 0.3s ease


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


.modal-enter
  opacity: 0

.modal-leave-active
  opacity: 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)

</style>

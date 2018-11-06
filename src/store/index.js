import Vue from 'vue'
import vuex from 'vuex'
import IpPopupStore from '../static/js/ipPopup_store.js'
import commentStore from '../static/js/commentPopup_store.js'
import schoolStore from '../static/js/schoolPopup_store.js'
import navbarStore from '../static/js/navbar.js'
import sortStore from '../static/js/sortPopup_store.js'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
    ipPopup: IpPopupStore,
    commentPopup: commentStore,
    schoolPopup: schoolStore,
    navbar: navbarStore,
    sortPopup: sortStore
  }
})

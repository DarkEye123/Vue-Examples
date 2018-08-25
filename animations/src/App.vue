<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <H1>Animations</H1>
          <hr>
          <button class="btn btn-outline-primary btn-lg " @click="isContentVisible = !isContentVisible">Toogle Alert</button>
          <br>
          <br>
          <transition name="fade" appear>
            <div class="alert alert-primary text-center" role="alert" v-if="isContentVisible">
              A simple example of fading
            </div>
          </transition>

          <transition name="slide" appear>
            <div class="alert alert-info text-center" role="alert" v-if="isContentVisible" type="animation">
              A simple example of sliding
            </div>
          </transition>

          <transition name="combo" appear>
            <div class="alert alert-dark text-center" role="alert" v-if="isContentVisible" type="animation">
              A simple example of sliding & fading
            </div>
          </transition>

          <transition appear enter-active-class="animated bounce" leave-active-class="animated fade">
            <div class="alert alert-warning text-center" role="alert" v-if="isContentVisible">
              A simple example of custom animation classes
            </div>
          </transition>

          <hr>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="alertSelect">Options</label>
            </div>
            <select v-model="alertName" class="custom-select" id="alertSelect">
                <option value="fade">fade animation</option>
                <option value="slide">slide animation</option>
              </select>
          </div>

          <br>
          <transition :name="alertName" appear>
            <div class="alert alert-danger text-center" role="alert" v-if="isContentVisible" type="animation">
              A simple example of dynamic animation chosen by input
            </div>
          </transition>

          <transition name="combo" appear mode="out-in">
            <!-- note the key which is mandatory - see https://vuejs.org/v2/guide/transitions.html#Transitioning-Between-Elements -->
            <div class="alert alert-primary text-center" role="alert" v-if="isContentVisible" key="1">
              A simple example of transition between elements | element 1
            </div>
            <div class="alert alert-info text-center" role="alert" v-else key="2">
              A simple example of transition between elements | element 2
            </div>
          </transition>

          <hr>
          <button @click="animate=!animate" class="btn btn-outline-primary btn-lg">toogle js animation</button>
          <br><br>
          <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @leave="leave"
            :css="false"
            appear
          >
            <div style="width:100px; height:100px; background-color:lightgreen;" v-if="animate"></div>
          </transition>

          <hr>

          <button @click="selectedComponent == 'app-danger-component' ? selectedComponent='app-success-component' : selectedComponent='app-danger-component'" class="btn btn-outline-primary">toogle component switch</button>
          <br>
          <transition mode="out-in" enter-active-class="animated rubberBand">
            <component :is="selectedComponent" class="mt-3"></component>
          </transition>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DangerComponent from "./components/DangerAlert";
import SuccessComponent from "./components/SuccessAlert";
export default {
  data() {
    return {
      visible: true,
      animate: true,
      componentSwitch: false,
      selectedComponent: "app-danger-component",
      alertName: "fade"
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      el.style.opacity = 0;
      el.style.width = 100 + "px";
      el.style.height = 100 + "px";
    },
    enter(el, done) {
      console.log("Enter");
      Velocity(
        el,
        { opacity: 1, width: "200px", height: "150px" },
        { duration: 500 }
      );
      Velocity(el, { width: "100px", height: "100px" }, { complete: done });
    },
    leave: function(el, done) {
      console.log("Leave");
      Velocity(el, { translateX: "15px", rotateZ: "50deg" }, { duration: 600 });
      Velocity(el, { rotateZ: "100deg" }, { loop: 2 });
      Velocity(
        el,
        {
          rotateZ: "45deg",
          translateY: "30px",
          translateX: "100px",
          opacity: 0
        },
        { complete: done }
      );
    }
  },
  computed: {
    isContentVisible: {
      get() {
        return this.visible;
      },
      set(value) {
        this.visible = value;
        console.log(this.visible);
      }
    }
  },
  components: {
    appDangerComponent: DangerComponent,
    appSuccessComponent: SuccessComponent
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave-to {
  opacity: 0;
}

.fade-leave-active {
  transition: opacity 1s;
}

.slide-enter-active {
  animation: slide-in 1s ease-out;
}

.slide-leave-active {
  animation: slide-out 1s ease-out;
}

.combo-enter {
  opacity: 0;
}

.combo-enter-active {
  animation: slide-in 1s ease-out;
  transition: opacity 1s;
}

.combo-leave-active {
  animation: slide-out 1s ease-out;
  transition: opacity 1s;
}

.combo-leave-to {
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>



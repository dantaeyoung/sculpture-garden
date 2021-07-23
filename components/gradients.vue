<template>
  <div id="gradients">
    <div class="background" :style="gradientBackgroundStyle"></div>
  </div>
</template>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 0px;
  left: 0px;
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 100%;
  z-index: -10;
}
</style>

<script>
import _ from "lodash";
import everpolate from "everpolate";

console.log("HEY");

export default {
  data() {
    return {
      scrollPercent: 0,
      blah: 0,
      gradientFunc: function() {},
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.generateGradientFunc();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      var h = document.documentElement,
        b = document.body,
        st = "scrollTop",
        sh = "scrollHeight";
      this.scrollPercent =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    },
    generateGradientFunc() {
      this.gradientFunc = Events.generateGradientInterpolationFunction({
        darkmode: this.darkmode,
      });
    },
  },
  computed: {
    gradientBackgroundStyle() {
      return {
        background: this.gradientFunc(this.scrollPercent),
      };
    },
    darkmode() {
      return this.$store.state.darkmode;
    },
  },
  watch: {
    darkmode: function() {
      this.generateGradientFunc();
    },
  },
};


var Events = {};

Events.randPastelVars = function(opts) {
  var difference = 0.6; // 0 ~ 1; 0 = same, 1 = different colors
  var spread = 0.4; // 0 ~ 1: 0 = always same/different, 1 = total randomness

  var hue1 = _.random(0, 360);
  var hue2 =
    (hue1 +
      _.random(
        180 * difference - 180 * spread,
        180 * difference + 180 * spread
      )) %
    360;

  if (typeof opts === "object" && "darkmode" in opts && opts.darkmode == true) {
    var lightness = _.random(10, 30);
  } else {
    var lightness = _.random(60, 90);
  }

  return [hue1, hue2, lightness];
};

Events.pastelPairFromVars = function(vars) {
  var hue1 = vars[0];
  var hue2 = vars[1];
  var lightness = vars[2];

  var pastel1 = "hsl(" + hue1 + ", 100%, " + lightness + "%)";
  var pastel2 = "hsl(" + hue2 + ", 100%, " + lightness + "%)";
  return [pastel1, pastel2];
};

Events.scrollPoints = function(n) {
  return _.map(_.range(n), function(x) {
    return x * (100 / (n - 1));
  });
};

Events.generateGradientInterpolationFunction = function(opts) {
  // we make four sets of gradients -- for color 1 hue, color 2 hue, color 1 & 2 lightness, direction
  var sampleN = 3;

  var interparray = [];
  for (let i = 0; i < sampleN; i++) {
    var pastelvars = Events.randPastelVars(opts);
    pastelvars[pastelvars.length] = _.random(0, 360, false);
    interparray.push(pastelvars);
  }

  interparray = _.zip.apply(_, interparray); //transpose the array

  // we now have x values and y values
  var xValues = Events.scrollPoints(sampleN);
  var hue1Values = interparray[0];
  var hue2Values = interparray[1];
  var lightnessValues = interparray[2];
  var directionValues = interparray[3];

  var generateInterpolatedBackground = function(x) {
    var vars = [
      everpolate.polynomial(x, xValues, hue1Values),
      everpolate.polynomial(x, xValues, hue2Values),
      everpolate.polynomial(x, xValues, lightnessValues),
    ];
    var pastelPair = Events.pastelPairFromVars(vars);
    var dir = everpolate.polynomial(x, xValues, directionValues);

    var backgroundString =
      "linear-gradient(" +
      dir +
      "deg, " +
      pastelPair[0] +
      ", " +
      pastelPair[1] +
      ")";

    // $(".scrollgradient").css({ background: backgroundString });
    return backgroundString;
  };

  return generateInterpolatedBackground;
};
</script>

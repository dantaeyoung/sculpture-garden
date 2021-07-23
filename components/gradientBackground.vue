<template>
  <div id="gradients">
      WOOOOOOOOOO
		<div id="background-over"></div>
		<div id="background-under"></div>
	</div>
</template>

<style lang="scss" scoped>

.backgrounds {
/*    -webkit-transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -o-transition: opacity 1s ease-in-out;
    transition: opacity 1s ease-in-out;*/
    opacity: 0.9;

}

.background {
	position: fixed;
	top: 0px;
	left: 0px;
	margin: 0px;
	padding: 0px;
	height: 100%;
	width: 100%;
/*	transition: opacity 1s; */
}
#background-over { z-index: 20; }
#background-under { z-index: 10; }


</style>

<script>
console.log("HEY");
export default {
	data() {
		return {};
	},
  created() {
      console.log("ook");
  },
};

var Events = {};

Events.init = function() {

    if(typeof(window.darkmode) == "undefined") {
        window.darkmode = false;
    }

    if(window.darkmode == true) {
        $("body").addClass("darkmode");
    } else {
        $("body").removeClass("darkmode");
    }


    initInterpolation()
    var sp = getScrollPercent();
    console.log( Events.generateInterpolatedBackground(sp));

    var scrollHandler = function () {
        var sp = getScrollPercent();
        Events.generateInterpolatedBackground(sp);
    }

    $(window).off("scroll");
    $(window).scroll(scrollHandler);
}










Events.randPastelVars = function() {

    var difference = 0.6;  // 0 ~ 1; 0 = same, 1 = different colors
    var spread = 0.4; // 0 ~ 1: 0 = always same/different, 1 = total randomness

    var hue1 = _.random(0, 360);
    var hue2 = (hue1 + _.random((180 * difference) - (180 * spread), (180 * difference) + (180 * spread))) % 360;

    if(window.darkmode == true) {
        var lightness = _.random(10, 30);
    } else {
        var lightness = _.random(60, 90);
    }

    return [hue1, hue2, lightness]
}


Events.pastelPairFromVars = function(vars) {
    var hue1 = vars[0];
    var hue2 = vars[1];
    var lightness = vars[2];

    var pastel1 = 'hsl(' + hue1 + ', 100%, ' + lightness + '%)';
    var pastel2 = 'hsl(' + hue2 + ', 100%, ' + lightness + '%)';
    return [pastel1, pastel2];
}

Events.randPastelPair = function() {
    var vars = Events.randPastelVars();
    return Events.pastelPairFromVars(vars);
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - (h.clientHeight||b.clientHeight)) * 100;
}

function scrollPoints(n) {
	return _.map(_.range(n), function(x) { return x * (100 / (n - 1)); })
}

function initInterpolation () {

    // we make four sets of lists -- for color 1 hue, color 2 hue, color 1 & 2 lightness, direction 
    var sampleN = 3;  

    var interparray = []
    for(let i = 0; i < sampleN; i++) {
        var pastelvars = Events.randPastelVars()
        pastelvars[pastelvars.length] = _.random(0, 360, false)
        interparray.push(pastelvars)
    }
    interparray = _.zip.apply(_, interparray) //transpose the array

    // we now have x values and y values
    var xValues = scrollPoints(sampleN);
    var hue1Values = interparray[0]
    var hue2Values = interparray[1]
    var lightnessValues = interparray[2]
    var directionValues = interparray[3]

    Events.generateInterpolatedBackground = function(x) {
        var vars = 
           [everpolate.polynomial(x, xValues, hue1Values),
            everpolate.polynomial(x, xValues, hue2Values),
            everpolate.polynomial(x, xValues, lightnessValues)]
        var pastelPair = Events.pastelPairFromVars(vars);
        var dir = everpolate.polynomial(x, xValues, directionValues);

        var backgroundString = "linear-gradient(" + dir + "deg, " + pastelPair[0] + ", " + pastelPair[1] + ")";

        $(".scrollgradient").css({ background: backgroundString});
    }


    console.log(interparray)
    return interparray
}


</script>



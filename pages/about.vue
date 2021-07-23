<template>
  <div id="sections">
    <section id="myself">
      <logo />
                <br>
                <br>
                Hi there. I am an assemblage of:
                <ul>
                  <li>cooperatives / spaces / technologies</li>
                  <li>learnings / teachings / communities</li>
                  <li>systems / heuristics / practices</li>
                  <li>architecture / pedagogy / software</li>
                  <li>families / friends / societies / cultures</li>
                </ul>

                I am a learner, teacher, spatial designer, technologist, and artist, creating design tools, architectural spaces, and social collectives. 
                
                <br><br>I am interested in how our environments and relations change the way we think, feel, collaborate, and play together. I am especially excited about creating and maintaining inclusive and just spaces, organizations, and learning/working structures that are intentional about power, agency, and care.<br><br>
                
                I teach at <a href="https://www.arch.columbia.edu/">Columbia University GSAPP</a>, am a founding member of <a href="https://www.primeproduce.coop/">Prime Produce</a> (an intentional community for social good), <a href="https://www.instagram.com/softsurplus/">Soft Surplus</a> (a community space for making and learning near each other), and the <a href="http://cybernetics.social/">Cybernetics Library</a>, an artist-run library focused on socio-technological systems.
    </section id="myself">

   <dots class="height200"></dots>

    <section id="news">
        <div class="title">Recent/Upcoming News</div>
        <nuxt-content :document="news" />
    </section>

    <dots class="height200"></dots>

    <section id="thoughts">

        <div class="title">Things I am thinking about lately</div>
        (as of 2019-10)<br><br>

        <a href="https://twitter.com/dantaeyoung/status/1185970849423208449">What is the relationship between racism and aesthetics</a>? Doesn't aesthetics or some sort of visual taste always have a form of exclusion that either aids, or is structured by racism? The gated community, the idea of 'purity', the <i>dangerous, dirty, unkempt</i> 'other' -- the racial other is always <i>unaesthetic, disorganized, distasteful</i>. Is there an aesthetics that is untouched by racism and power? What does just pedagogy around representation and aesthetics look like?<br /><br/>
<!--
	Design is often about planning to arrive at an ideal future scenario -- an ideal aesthetics, an ideal construction, an ideal space, an ideal result. Sometimes, design and planning is the start of broadening possibilities, like designing a raised garden bed for an unknown myriad of future plants. Sometimes, design and planning is the narrowing down to a point, when we would like spaces to be built like our construction documents, paper pages to be printed like our screens, travel itineraries to mesh with a 8:42pm flight time. Is it possible to find an aesthetics that can accept broadening possibilities, without falling into the trap of being "modular", "movable", "open source"?<br/><br/> -->

        Is an aesthetics ever possible without a power that enforces it? Is aesthetics itself ever NOT a manifestation of power in terms of form/vision/taste?<br/><br/>

				Feeling like the Other can be a good sign. It is (at least) a sign that I am being myself, when I am in white spaces. Maybe the problem is not the othering of people; it is the "Us"ing of people, the definition of a boundary in which "we" exist, the declaration of <a href="https://www.wired.co.uk/article/virtual-segregation-narrows-our-real-life-relationships">homophily</a> and sharedness that builds gated communities.<br /><br />

				Physical space is a <a href="https://dynamicland.org/">computational medium</a>. Physical space computes things. The sound that a doorbell makes in the space is a social/spatial computation that balances proximity and attention.<br/><br/>

				We are our environments. Our cognition is distributed in the environment. We are the relationships and spaces that surround us. We think through our friends and collaborators and our spaces. If we drew a closed loop around our thought in space, most of it would be outside of our bodies.<br/><br/> 

				A culture of 'professionalism' is predicated on a denial of gender, race, culture, the body, and a denial of (soft, hard) power structures.
				Let's avoid 'professionalism culture' and find healthier ways of thoughtful, insightful action by being in our bodies and acknowledging them. <br /> <br/>

				(or in other words: 'professionalism culture' comes from a hierarchy of effort, an axis of unvalued labor to valued labor, or a (horrible, flawed) <a href="https://en.wikipedia.org/wiki/The_Human_Condition_(book)">labor/work/action</a> hierarchy.
				A taxonomy of labor/work/action or personal/professional is maintained by power & aesthetics.
				Instead: there is no politics without an acknowledgment of our bodies; the personal is political, even though professionalism culture may not want it to be.
				Our environments should support and acknowledge this. If not; it's not worth it.)<br/>
				<br/><br/>

				Texts I'm thinking about / (re)reading lately:
				<ul>
					<li>김혜진,<b> 딸에 대하여</b></li>
					<li>Adrienne Maree Brown, <a href="https://www.akpress.org/emergentstrategy.html"><i>Emergent Strategy</i></a> and <a href="https://www.akpress.org/pleasure-activism.html">Pleasure Activism</i></a></li>
					<li>Joy Lisi Franklin, <a href="http://www.hup.harvard.edu/catalog.php?isbn=9780674970977"><i>A People’s History of Computing in the United States</i></a></li>
					<li>Wendy Chun, <a href="https://www.brown.edu/Departments/MCM/people/chun/papers/software.pdf"><i>On Software, or the Persistence of Visual Knowledge</i></a></li>
					<li>Jo Freeman, <a href="https://www.jofreeman.com/joreen/tyranny.htm"><i>The Tyranny of Structurelessness</i></a></li>
					<li>Édouard Glissant, <a href="files/Glissant_For_Opacity.pdf"><i>For Opacity</i></a>, from Poetics of Relation</li>
					<li>Fred Turner, <i><a href="https://www.press.uchicago.edu/ucp/books/book/chicago/F/bo3773600.html">From Counterculture to Cyberculture</a></i></li>
					<li>Kim Stanley Robinson, <i><a href="https://buellcenter.columbia.edu/research-programs/power-infrastructure-america/new-york-2140-kim-stanley-robinson">New York 2140</a></i></li>
					<li>Edward Hutchins, <i><a href="https://mitpress.mit.edu/books/cognition-wild">Cognition in the Wild</a></i></li>
					<li>Ivan Illich, <i><a href="https://en.wikipedia.org/wiki/Deschooling_Society">Deschooling Society</a></i></li>
					<li>Molly Wright Steenson, <i><a href="https://mitpress.mit.edu/books/architectural-intelligence">Architectural Intelligence</a></i></li>
					<li>Kim Stanley Robinson, <i><a href="https://libcom.org/library/mars-trilogy-kim-stanley-robinson">The Mars Trilogy</a></i></li>
					<li>Sarah Schulman, <i><a href="http://www.arsenalpulp.com/bookinfo.php?index=449">Conflict is Not Abuse</a></i></li>
					<li>Jane Bennett, <i><a href="files/Jane_Bennet__Vibrant_Matter.pdf">Vibrant Matter</a></i></li>
					<li>Gordon Pask, <i><a href="https://are.na/block/1352930">The Architectural Relevance of Cybernetics</a></i></li>
					<li>Bruno Latour, <i><a href="https://are.na/block/1352931">The Berlin Key</a></i></li>
					<li>James Carse, <i>Finite and Infinite Games</i></li>
					<li>Jodi Dean, <i><a href="files/Jodi_Dean_Communicative_Capitalism.pdf">Communicative Capitalism</a></i></li>
					<li>Bruno Latour, <i><a href="files/Bruno_Latour_Reassembling_the_social.pdf">Reassembling The Social</a></i></li>
					<li>Michael Polanyi, <i><a href="files/Polanyi_Michael_The_Tacit_Dimension.pdf">The Tacit Dimension</a></i></li>
				</ul>

                More things I am interested in: <a href="https://www.are.na/dan-taeyoung/channels?sort=random">Are.na</a>
     </section id="thoughts">

     <dots class="height200"></dots>

    <section id="names">
        <div class="title">On work and projects</div>
        <br><br>

        I teach, or have taught at 
        <a href="https://www.arch.columbia.edu/">Columbia University GSAPP</a>, 
        <a href="https://www.newschool.edu/parsons/mfa-transdisciplinary-design/">Parsons School of Design</a>,  
        <a href="https://sfpc.io/">The School for Poetic Computation</a>, 
        and <a href="http://www.tsinghua.edu.cn/publish/ardeen/1685/index.html">Tsinghua University</a>. 

        <br>
        <br>

            Past clients and collaborators include:
        <a href="https://www.stephaniedinkins.com/">Stephanie Dinkins</a>, 
        <a href="https://sidewalklabs.com/">Sidewalk Labs</a>,
        <a href="http://www.superbright.me/">Superbright</a>, 
        <a href="https://thenewinquiry.com/simparty/">The New Inquiry</a>, 
        <a href="https://www.vera.org/">Vera Institute of Justice</a>, 
        <a href="http://pioneerworks.org/">Pioneer Works</a>, 
        <a href="http://designguggenheimhelsinki.org/en/exhibition/">The Solomon R. Guggenheim Museum</a>, 
        <a href="http://storefrontnews.org/">Storefront for Art and Architecture</a>, 
        <a href="http://www.spatialinformationdesignlab.org/">Spatial Information Design Lab, </a>
        <a href="http://www.newinc.org/gsapp/">NEW INC/GSAPP Incubator</a>

              <br/><br/> 
              
        My work has been mentioned/published in 
        <a href="https://urbanomnibus.net/2019/09/tools-of-collective-intelligence/">Urban Omnibus</a>, 
        <a href="https://thecreativeindependent.com/people/designer-architect-teacher-and-learner-dan-taeyoung-on-growing-a-cooperative-like-youd-grow-a-garden/">The Creative Independent</a>,
        <a href="https://nathanschneider.info/books/everything-for-everyone/">Everything for Everyone: The Radical Tradition that Is Shaping the Next Economy</a>,
        <a href="http://www.bloomsbury.com/us/the-politics-of-parametricism-9781472581662/">The Politics of Parametricism</a>,
        <a href="http://projectjournal.org/">Project Journal</a>, 
        <a href="https://www.newyorker.com/business/currency/the-new-guilded-age">The New Yorker</a>, 
        The Observer, 
        The Awl, 
        Vice, 
        The New York Times, 
        among other publications.

        <br>
        <br>
        <br>
        <b>Things I do</b>: Collective decision-making facilitation, critical & technological curriculum design, architectural design, construction management, commercial real estate renovation, physical prototyping, digital fabrication, software development, web development, physical computing, data visualization.
		<br>
		<br>
        <b>Things I specialize in</b>: Starting & maintaining community-run organizations, designing and building/renovating physical spaces for collective organizations, creating cooperative decision-making tools and practices, developing custom computational design workflows & tools, structuring open & collaborative pedagogy practices, critical & technological curriculum design, poetic technology experiments and workshops. 
        <br>
        <br>
        <b>Long-term (10+ yr) goals</b>: Collectively designing, building, running, growing a cooperative school -- an intentional learning institution. 
        <br>
    </section id="names">
    <dots class="height100"></dots>
    <section id="sayhello">
        <div class="title">say hello</div><br><br>
        If you'd like to collaborate, work together, or say hello, get in touch at <b>dan [at] dantaeyoung [dot] com</b> or through <a href="https://keybase.io/dantaeyoung">Keybase</a>. !
    </section id="sayhello">

    <gradients />

</div>



 </div>
</template>

<style lang="scss" scoped>

$desktop-width: 624px;

@mixin phone {
  @media (max-width: #{$desktop-width - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$desktop-width}) {
    @content;
  }
}

/* this is used:::
@include phone { } 
@include desktop { } 
*/

#sections {
    position: relative;
    display: flex;
    flex-direction: column;
	  width: 500px;
	  padding: 40px 40px 100px 40px;
    padding-bottom: 100px;

    @include phone {
        font-size: 0.95em;
        padding: 15px;
        width: calc(100vw - 30px);
    }

}



section {
    //background-color: rgba(255, 255, 255, 0.7);
/*    border-top: 3px solid #FFF;
    border-bottom: 3px solid #FFF;
    border-radius: 0px; */
    width: calc(100% - 20px);
    padding: 30px 10px;

    @include phone {
        line-height: 1.5em;
    }

    & .title {
        font-size: 1.0em;
        font-weight: bold;
        background-color: #F3E940;
        display: inline-block;
        padding: 3px 5px;

        .darkmode & {
            color: #333;
        }
    }
}


ul {
 padding-left: 20px;
}

::v-deep .nuxt-content li {
    margin-top: 10px;
}
//* { border: 1px dotted #AAA; margin: -1px;  }



</style>

<script>
export default {
  data() {
    return {
      news: [],
      thoughts: [],
    };
  },
  async fetch() {
    this.news = await this.$content('news').fetch()
    this.thoughts = await this.$content('thoughts').fetch()
  },
}

</script>

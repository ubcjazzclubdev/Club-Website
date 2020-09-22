import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Events extends Vue {

  moveTo(refName : string) : void {
    // console.log(refName);
    const el = document.querySelector(refName);
    if (el != null)
    {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  }

  data() {
    return {
      allEvents : [
        {
          eventYear : [
            { 
              year : "2020",
              sep : "",
              events : [
                { 
                  first : "first",
                  month : "June",
                  date : "29",
                  image : require("../../assets/images/christmas_1.jpg"),
                  title : "Quarantunez",
                  desc : "Play far away lol"
                }
              ]
            },
            { 
              year : "2019",
              sep : "separator",
              events : [
                { 
                  first : "first",
                  month : "November",
                  date : "29",
                  image : require("../../assets/images/christmas_1.jpg"),
                  title : "Cozy Christmas with UBC Jazz Club",
                  desc : "The comfiest night of the year to celebrate the holidays. A Peanuts/Vince Gauraldi pajama-casual social with various group games, competitions and most importantly, delicious treats."
                },
                { 
                  first : "",
                  month : "September",
                  date : "9",
                  image : require("../../assets/images/christmas_1.jpg"),
                  title : "Imagine Day",
                  desc : "A campus-wide initiative held at the beginning of the school year allowing students to be introduced to the many clubs on campus. An opportunity to ask us questions and meet us jazz kids."
                },
                { 
                  first : "",
                  month : "March",
                  date : "23",
                  image : require("../../assets/images/christmas_1.jpg"),
                  title : "Dancing with the Stars",
                  desc : "A lively evening of jazz and swing dance experimentation, organized in collaboration with UBC Swing Kids. It included a beginners-friendly workshop, and an open dance floor to the swing tunes performed by our musicians. The previous iteration (2018) of this event was themed around the La La Land musical and featured performances from the 45th Avenue Jazz Band."
                },
                { 
                  first : "",
                  month : "February",
                  date : "8",
                  image : require("../../assets/images/christmas_1.jpg"),
                  title : "Mates & Dates",
                  desc : "An annual valentines themed social in collaboration with UBC Music Initiative (UMI) and The Chinese Student Association (CSA) to enjoy fun games and a dinner accompanied with live jazz music and performances."
                },
                { 
                  first : "",
                  month : "January",
                  date : "25",
                  image : require("../../assets/images/christmas_1.jpg"),
                  title : "Bossa de Janeiro",
                  desc : "A upbeat, bossa-filled social event held in collaboration with the Brazilian Students’ Association (BRASA). Delicious food, live music, enjoyable company and smiles all around: what more can you ask for?"
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

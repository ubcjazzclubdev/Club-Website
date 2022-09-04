import { defineComponent } from "vue";

export default defineComponent({
  moveTo(refName: string): void {
    // console.log(refName);
    const el = document.querySelector(refName);
    if (el != null) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  },

  /**
   * Return the events data for the timeline on the page
   * @return allEvents : in order to generate the correct number of divs
   * @return eventYear : in order to include style separation for different years
   * Each eventYear item includes the year definition and whether or not a separation
   *    gap is required.
   * For each event make sure to include whether or not its the first entry, because
   *    there is special styling for the first event of each year.
   * For the image property make sure to use require otherwise the absolute path will
   *    be used and it won't function properly.
   */
  data() {
    return {
      allEvents: [
        {
          eventYear: [
            {
              year: "2021",
              sep: "",
              events: [
                {
                  first: "first",
                  month: "January",
                  date: "29",
                  image: require("../../assets/images/timeline/2021_housewarming.jpg"),
                  title: "A Harmonic Housewarming",
                  desc: "In the midst of trying times -- a global pandemic and lockdown no less -- it’s time to bring the hibernating jazz members together again for term 2. This one’s special because it’ll be the first opportunity for new members to meet existing members and executives. Huddle up, we’re going to have a good time!",
                },
              ],
            },
            {
              year: "2020",
              sep: "separator",
              events: [
                {
                  first: "first",
                  month: "November",
                  date: "28",
                  image: require("../../assets/images/timeline/2020_jazz_halls.jpg"),
                  title: "Jazz the Halls",
                  desc: "Our annual Holiday Season event! We brought our members together with holiday themed jazzpardy (jeopardy + jazz). This intense game had all of our participants at the edge of their seats as they competed in trivia for a gift card.",
                },
                {
                  first: "",
                  month: "September",
                  date: "30",
                  image: require("../../assets/images/timeline/2020_september_rain.jpg"),
                  title: "September in the rain",
                  desc: "After a month of virtual outreach and promotions, we held our first members-only social / icebreaker for the 2020W school year. Participants had the chance to mingle, compete, play games and win prizes. Newcomers in particular had their first opportunity to connect with their new community.",
                },
                {
                  first: "",
                  month: "August",
                  date: "29",
                  image: require("../../assets/images/timeline/2020_august_social.jpg"),
                  title: "The Jazz Must Go On: August Social",
                  desc: "To wrap up the unique 2020 summer, we held a virtual social for our returning members on Zoom. We had a combination of large group games (jazz bingo anyone?) and breakout room competitions where people had the chance to win prizes including a free club membership for 2020/21!",
                },
                {
                  first: "",
                  month: "August",
                  date: "16",
                  image: require("../../assets/images/timeline/2020_quarantunez_3.jpg"),
                  title: "Quarantunez: Summer Series III",
                  desc: "Over the summer, Vancouver-based club execs live streamed socially distant, face mask-casual jams on Instagram Live. Viewers had the chance to interact with our musicians live via the chat, request songs, and bask in the familiar jazz club vibes. Luckily, our execs in Vancouver also constitute each other’s small social bubbles.",
                },
                {
                  first: "",
                  month: "July",
                  date: "26",
                  image: require("../../assets/images/timeline/2020_quarantunez_2.jpg"),
                  title: "Quarantunez: Summer Series II",
                  desc: "Over the summer, Vancouver-based club execs live streamed socially distant, face mask-casual jams on Instagram Live. Viewers had the chance to interact with our musicians live via the chat, request songs, and bask in the familiar jazz club vibes. Luckily, our execs in Vancouver also constitute each other’s small social bubbles.",
                },
                {
                  first: "",
                  month: "June",
                  date: "20",
                  image: require("../../assets/images/timeline/2020_quarantunez_1.jpg"),
                  title: "Quarantunez: Summer Series",
                  desc: "Over the summer, Vancouver-based club execs live streamed socially distant, face mask-casual jams on Instagram Live. Viewers had the chance to interact with our musicians live via the chat, request songs, and bask in the familiar jazz club vibes. Luckily, our execs in Vancouver also constitute each other’s small social bubbles.",
                },
              ],
            },
            {
              year: "2019",
              sep: "separator",
              events: [
                {
                  first: "first",
                  month: "November",
                  date: "29",
                  image: require("../../assets/images/timeline/2019_christmas.jpg"),
                  title: "Cozy Christmas with UBC Jazz Club",
                  desc: "The comfiest night of the year to celebrate the holidays. A Peanuts/Vince Gauraldi pajama-casual social with various group games, competitions and most importantly, delicious treats.",
                },
                {
                  first: "",
                  month: "September",
                  date: "9",
                  image: require("../../assets/images/timeline/2019_imagine_day.jpg"),
                  title: "Imagine Day",
                  desc: "A campus-wide initiative held at the beginning of the school year allowing students to be introduced to the many clubs on campus. An opportunity to ask us questions and meet us jazz kids.",
                },
                {
                  first: "",
                  month: "March",
                  date: "23",
                  image: require("../../assets/images/timeline/2018_dancing_with_stars.jpg"),
                  title: "Dancing with the Stars",
                  desc: "A lively evening of jazz and swing dance experimentation, organized in collaboration with UBC Swing Kids. It included a beginners-friendly workshop, and an open dance floor to the swing tunes performed by our musicians. The previous iteration (2018) of this event was themed around the La La Land musical and featured performances from the 45th Avenue Jazz Band.",
                },
                {
                  first: "",
                  month: "February",
                  date: "8",
                  image: require("../../assets/images/timeline/2019_mates_dates.jpg"),
                  title: "Mates & Dates",
                  desc: "An annual valentines themed social in collaboration with UBC Music Initiative (UMI) and The Chinese Student Association (CSA) to enjoy fun games and a dinner accompanied with live jazz music and performances.",
                },
                {
                  first: "",
                  month: "January",
                  date: "25",
                  image: require("../../assets/images/timeline/2019_janeiro.jpg"),
                  title: "Bossa de Janeiro",
                  desc: "A upbeat, bossa-filled social event held in collaboration with the Brazilian Students’ Association (BRASA). Delicious food, live music, enjoyable company and smiles all around: what more can you ask for?",
                },
              ],
            },
          ],
        },
      ],
    };
  },
});

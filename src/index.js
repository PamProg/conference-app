
import SpeakerList from "./speakers/list"
import SessionList from "./sessions/list"
import Layout from "./layout";
import TalkService from "./common/talk.service";

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService);

let speakers = talkService.findAllSpeakers();
speakers.then(resSpeakers => {

    resSpeakers.map(s => s.firstname)
               .forEach(sFirstName => console.log(sFirstName));
    }, error => {
        console.log(error);
});

layout.render();

let router = () => {
    if (location.hash == '#speakers-list') {
        speakerList.render("main-view");
    } else if (location.hash == '#sessions-list') {
      sessionList.render("main-view")
    } else {
        
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
        router();
});









import "bootstrap"; // Pour importer jQuery
import "bootstrap/dist/css/bootstrap.css";

import SpeakerList from "./speakers/list";
import SessionList from "./sessions/list";
import Layout from "./layout";
import TalkService from "./common/talk.service";

const talkService = new TalkService();
const layout = new Layout();
const speakerList = new SpeakerList(talkService);
const sessionList = new SessionList(talkService);

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








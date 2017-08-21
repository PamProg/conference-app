
class SessionList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        let sessions = this.talkService.findAllSessions();

        sessions.then(resSessions => {

            // Transformer la liste des sessions en liste de titre de session,
            // entouré par des balises <li>, 
            // en enlevant les ',' qui viennent de notre liste originale
            let listSessions = resSessions.map(s => "<li>" + s.title + "</li>"
                                          .replace(',','')); // ne marche pas encore
            document.getElementById(idView).innerHTML = listSessions;

            }, error => {
                console.log(error);
        });
    }
}

export default SessionList;
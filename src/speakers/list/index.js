
class SpeakerList {

    constructor(talkService) {
        this.talkService = talkService;
    }

    render(idView) {

        let speakers = this.talkService.findAllSpeakers();

        speakers.then(resSpeakers => {

            // Transformer la liste des speakers en liste de prenom de speaker,
            // entouré par des balises <li>, 
            // en enlevant les ',' qui viennent de notre liste originale
            let listSpeakers = resSpeakers.map(s => "<li>" + s.firstname + "</li>"
                                          .replace(',','')); // ne marche pas encore
            document.getElementById(idView).innerHTML = listSpeakers;

            }, error => {
                console.log(error);
        });
    }
}

export default SpeakerList;
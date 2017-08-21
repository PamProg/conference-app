
import layoutHtml from "./layout.html";

class Layout {
    render() {
        document.querySelector("body").innerHTML = layoutHtml;
    }
}

export default Layout;
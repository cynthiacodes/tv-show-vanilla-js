import { getElementByIdOrFail } from "./utils.js";
import { episodes } from "./episodes.js";

const episodesList = getElementByIdOrFail("episodesList");

function makeEpisodesList() {
  return episodes.map((episode) => {
    const element = document.createElement("li");
    element.classList.add("episode");
    element.innerHTML =
      episode.name + " - S" + episode.season + "E" + episode.number;
    element.innerHTML += "<br>";
    const img = document.createElement("img");
    img.src = episode.image.medium;
    element.appendChild(img);
    const summary = document.createElement("p");
    summary.innerHTML = episode.summary;
    element.appendChild(summary);
    return element;
  });
}

const episodeLiElements = makeEpisodesList();
console.log("return from makeEpisodesList", episodeLiElements);

for (const li of episodeLiElements) {
  episodesList.appendChild(li);
}

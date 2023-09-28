import { getElementByIdOrFail } from "./utils";
import { episodes } from "./episodes";

const episodesList = getElementByIdOrFail("episodesList");

function makeEpisodesList() {
  return episodes.map((episode) => {
    const element = document.createElement("li");
    element.innerHTML =
      episode.name + " - S" + episode.season + "E" + episode.number;
    return element;
  });
}

const episodeLiElements = makeEpisodesList();
console.log("return from makeEpisodesList", episodeLiElements);

for (const li of episodeLiElements) {
  episodesList.appendChild(li);
}

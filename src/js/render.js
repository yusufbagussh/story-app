import data from "../data/stories.json";
import "./components/StoryCard";

export function renderDashboard(container) {
  const title = document.createElement("h1");
  title.innerText = "Story Dashboard";
  container.appendChild(title);

  const storyContainer = document.createElement("div");
  storyContainer.classList.add("story-container", "row", "g-4");

  data.listStory.forEach((story) => {
    const card = document.createElement("story-card");
    card.setAttribute("name", story.name);
    card.setAttribute("description", story.description);
    card.setAttribute("photoUrl", story.photoUrl);
    card.setAttribute("createdAt", story.createdAt);

    storyContainer.appendChild(card);
  });

  container.appendChild(storyContainer);
}

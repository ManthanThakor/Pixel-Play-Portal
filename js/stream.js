const apiKey = 'AIzaSyBcNzyfg4pUjAyGjvhpJM3NYfy08osJduw'; // Replace with your YouTube API key
const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
let nextPageToken = '';

// Function to fetch live streams from YouTube API
async function fetchLiveStreams(pageToken = '') {
  try {
    const response = await fetch(`${apiUrl}?part=snippet&eventType=live&type=video&maxResults=10&q=gaming+india&regionCode=IN&pageToken=${pageToken}&key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch live streams');
    }
    const data = await response.json();
    nextPageToken = data.nextPageToken; // Update next page token
    return data.items; // Array of live streams
  } catch (error) {
    console.error('Error fetching live streams:', error.message);
    return [];
  }
}

// Function to display live streams on the webpage
async function displayLiveStreams() {
  const streamsContainer = document.getElementById('streams-container');
  try {
    const liveStreams = await fetchLiveStreams();
    liveStreams.forEach(stream => {
      const streamElement = createStreamElement(stream);
      streamsContainer.appendChild(streamElement);
    });
    // Add a "Load More" button for pagination
    if (nextPageToken) {
      const loadMoreBtn = createLoadMoreButton();
      loadMoreBtn.addEventListener('click', async () => {
        const moreLiveStreams = await fetchLiveStreams(nextPageToken);
        nextPageToken = moreLiveStreams.nextPageToken; // Update next page token
        moreLiveStreams.forEach(stream => {
          const streamElement = createStreamElement(stream);
          streamsContainer.appendChild(streamElement);
        });
        // Remove the "Load More" button if there are no more streams
        if (!nextPageToken) {
          loadMoreBtn.remove();
        }
      });
      streamsContainer.appendChild(loadMoreBtn);
    }
  } catch (error) {
    console.error('Error displaying live streams:', error.message);
  }
}

// Function to create a stream element
function createStreamElement(stream) {
  const streamElement = document.createElement('div');
  streamElement.classList.add('stream');
  streamElement.innerHTML = `
    <div>
      <img src="${stream.snippet.thumbnails.medium.url}">
      <h3>${stream.snippet.title}</h3>
      <p>Channel: ${stream.snippet.channelTitle}</p>
      <a href="https://www.youtube.com/watch?v=${stream.id.videoId}" target="_blank">Watch</a>
    </div>
  `;
  return streamElement;
}

// Function to create the "Load More" button
function createLoadMoreButton() {
  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.textContent = 'Load More';
  return loadMoreBtn;
}

// Call displayLiveStreams() function to fetch and display live streams when the page loads
window.onload = displayLiveStreams;
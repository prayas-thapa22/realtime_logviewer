# realtime_logviewer
## Overview
This project is a real-time log viewer web application. It uses a WebSocket server to stream logs to the browser. Users can see live logs in real-time, pause/resume the log feed, and clear the log display. The logs are randomly generated quotes from*Twin Peaks with levels like INFO, WARN, and ERROR.

## Running Locally with Docker
### Prerequisites
- Docker installed
- Docker Compose installed

### Steps
1. Clone the repository:
git clone https://github.com/prayas-thapa22/realtime_logviewer.git
cd realtime_logviewer


2. Build and start the application using Docker Compose in CMD:
docker-compose up --build


This will build Docker images for both client and server, start the containers, and link them together.

3. Open the application in your browser:
http://localhost:8081


4. Use the app:
- Click Pause to stop new logs from displaying
- Click Resume to continue
- Click Clear to empty the log window

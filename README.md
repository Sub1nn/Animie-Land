# 🎬 Random Anime Discovery App

A lightweight React + TypeScript application that fetches and displays random anime details (title, image, and description) using the Jikan API.

## 🚀 Features

* **Randomized Fetching:** Pulls data dynamically from the Jikan (MyAnimeList) API.
* **Type Safety:** Built with TypeScript using custom interfaces for robust data handling.
* **Asynchronous Logic:** Uses Axios and React Hooks (`useEffect`, `useState`) for smooth data loading.
* **Modern Styling:** Built on top of the Vite + React ecosystem.

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Language:** TypeScript
* **HTTP Client:** Axios
* **API:** [Jikan API](https://jikan.moe/) (Unofficial MyAnimeList API)

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-project-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Navigate to `http://localhost:5173` in your browser.

## 📄 Project Structure

* `src/get_data.ts`: Contains the logic for fetching and processing API data.
* `src/App.tsx`: The main UI component handling state and rendering.
* `src/App.css`: Custom styles for the anime display layout.

## 📝 License

This project is open source and available under the MIT License.

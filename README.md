## What is Cloud Gallery?

### Cloud Gallery is an app that connects to Cloudinary and from which you can upload your photos. It is also powered by AI with which you can generate Halloween horror stories and detect Halloween images.

## is it open source?

- If Cloud Gallery is open source, you can contribute by enhancing the app, adding new features, fixing bugs, and more. Your contributions help improve the project and benefit the community!

## DEMO

![Cloud-demo](./src/assets/img/git-cloud.gif)

### photos

- **Desktop**
  ![Cloud-demo](./src/assets/img/desktop.png)

## Setup

To use this project, you'll need your Cloudinary credentials. You will need the following:

- **Cloud Name**: The name of your Cloudinary account.
- **API Key and Secret**: The API key followed by a colon and then the secret API key (e.g., `7374ee773ufyye3:2372372737273ee2372`).

### Steps for Configuration

1. **Create a `.env` file** in the root of your project (if you don’t have one already).

2. **Add the following variables** to the `.env` file:

   ```plaintext
   VITE_PUBLIC_CLOUD_NAME="your_cloud_name_here"  # e.g., "my_cloud"
   VITE_SECRET_API_KEY="7374ee773ufyye3:2372372737273ee2372"  # API Key and Secret
   VITE_CLOUDINARY_FOLDER="your_folder_here"       # e.g., "uploads"
   VITE_GOOGLE_GEMINI_API="your_gemini-api-key"    # e.g, "eru4uwu4422ueeesd32frt5434eerr"

   ```

## Running the Project

To run the project, you can use any of the following package managers: **pnpm**, **npm**, or **yarn**. Here’s how to do it with each:

### Using pnpm

1. Make sure you have `pnpm` installed. If you haven't installed it yet, you can do so with:

   ```bash
   npm install -g pnpm
   ```

   ```bash
   pnpm i && pnpm run dev
   ```

## Contributing

We welcome contributions to Cloud Gallery! Here’s how you can help:

1. **Fork the Repository**: Create a personal copy of the repository by clicking the "Fork" button on GitHub.

2. **Clone the Forked Repository**: Clone your fork to your local machine:

   ```bash
   git clone https://github.com/your-username/Cloud-gallery.git
   ```

### By following these guidelines, you help us improve the project and make it better for everyone!

Feel free to customize the repository link and any other specific details as needed!

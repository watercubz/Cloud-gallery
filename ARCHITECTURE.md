## Project Structure

### The project follows a modular structure, organized to make it easy for developers to navigate and contribute:

```
    └── 📁src
        ── 📁features
            ── 📁ai
                ── 📁components
                    ── ImageDetect.jsx
                    ── PageImage.jsx
                    ── PageText.jsx
                    ── TextGenerateAI.jsx
                ── 📁pages
                    ── Page.jsx
            ── 📁auth
                ── 📁components
                    ── AuthComponent.jsx
                    ── ProtecteRoutes.jsx
                ── 📁pages
                    ── ImboxComponent.jsx
                    ── LogoutComponent.jsx
            ── 📁chats
                ── 📁componentes
                    ── chatComponent.jsx
                ── 📁pages
                    ── page.jsx
             ── 📁docs
                ── 📁components
                    ── DocsButton.jsx
                    ── DocsComponet.jsx
            ── 📁gallery
                ── 📁components
                    ── GalleryComponent.jsx
                ── 📁pages
                    ── Home.jsx
            ── 📁Layouts
                ── Hero.jsx
                ── ProductsComponent.jsx
                ── SideBar.jsx
                ── SidebarDropdonw.jsx
            ── 📁pricing
                ── 📁components
                    ── PricingButton.jsx
                    ── PricingComponent.jsx
                ── 📁pages
                    ── Pricing.jsx
            ── 📁profile
               ── 📁components
                    ── LogoutButton.jsx
                    ── LogoutComponent.jsx
                ── 📁pages
                    ── Profile.jsx
            ── 📁ui
                ── AImage.jsx
                ── AiText.jsx
                ── ErrorPage.jsx
                ── Loading.jsx
                ── UploadFile.jsx
        ── 📁hooks
            ── useCloudUpload.jsx
            ── useFecthcloud.jsx
       ── 📁services
            ── 📁3D
                ── Chess.jsx
            ── 📁cloudinary
                ── cloudinaryUploadWidget.jsx
        ── 📁utils
            ── 📁supabase
                ── supabase.js
            ── getBase64.js
         App.jsx
         index.css
         main.jsx
         setupTests.js
     .dockerignore
     .editorconfig
     .env
     .env.example
     .gitignore
     .prettierrc
     ARCHITECTURE.md
     docker-compose.yaml
     eslint.config.js
     index.html
     LICENSE.md
     package.json
     pnpm-lock.yaml
     postcss.config.js
     README.md
     tailwind.config.js
     vercel.json
     vite.config.js
```

# **FE Task: Build a Weather Dashboard using Next.js and an Online Weather API**

### **Objective:**

Create a responsive weather dashboard that displays current weather information for multiple cities. The dashboard should use an online weather API like OpenWeatherMap or WeatherAPI to fetch real-time data.

### **Requirements:**

1. **Framework:**
    - Use **Next.js** as the framework for the application.
2. **Features:**
    - **City Search:** Implement a search bar where users can input a city name and view the current weather details.
    - **City List:** Predefine a list of at least five cities (e.g., Dubai, New York, London, Tokyo, Sydney) and display their current weather on the dashboard by default.
    - **Weather Details:** Display the following weather information for each city:
        - City Name
        - Temperature (in Celsius)
        - Weather Condition (e.g., Clear, Rain, Snow)
        - Wind Speed
        - Humidity
        - An icon representing the current weather condition.
    - **Responsive Design:** Ensure the dashboard is responsive and works well on both desktop and mobile devices.
3. **API:**
    - Use a free API from **OpenWeatherMap** or **WeatherAPI** to fetch weather data.
4. **Styling:**
    - The developer is free to use any CSS framework, library, or methodology they prefer (e.g., CSS Modules, Styled Components, Tailwind CSS, plain CSS, etc.).
    - The design should be clean and user-friendly, with appropriate use of color and typography.
5. **Bonus:**
    - **Favorites:** Allow users to mark certain cities as favorites and display these at the top of the dashboard.
    - **Local Storage:** Persist the user’s favorite cities in local storage so they remain after a page refresh.
    - **Detailed View:** Provide an option to view more detailed weather information (e.g., forecast for the next few days) when a user clicks on a city.
6. **Documentation:**
    - Provide a README file with instructions on how to set up and run the project.
    - Include brief documentation on how the application is structured and how it interacts with the weather API.

### **Expected Outcome:**

A fully functional weather dashboard that meets the above requirements. The developer should demonstrate an understanding of Next.js, API integration, and responsive design. The project should be well-structured, with clean and maintainable code.



### **Submission Task Assignment :**

1. Use Next.js as the framework for the application.
2. On the search part, as you type one letter, it also suggests the name of the city and then searches, updates, and shows the weather.
3. The requirement of the document was to display five cities, where the details would update upon clicking on the Card. These are by default.
4. For this, I used the OpenWeatherMap API and added its key into it.
5. To create the design, I used Tailwind, and it is both mobile-responsive and desktop-responsive.
6. I have also added the functionality of adding cities to favorites and displaying them at the top of (Bonus point)
7. I have also added the functionality of displaying the detailed view of the weather (Bonus point)
8. I have also added the functionality of persisting the user’s favorite cities in local storage (Bounus Point)
9. The local storage automatically clears within fifteen minutes, and if you want to clear it immediately, I've also provided a "Clear Favorites" button. (This is an extra feature).
10. At the top, there is a location icon. When you click on it, the current location is fetched, whether it's the user's or the place's location, and it will display the weather according to that current location. (This is an extra feature).
11. I have also displayed the hourly forecast results for every two hours.
12. It has taken me almost two days to complete this work, and today is the second day. I am now delivering it. I have made every effort to write the code cleanly, ensuring there are no issues. The work is done using components, which you can review. I have also formatted all the code to make it easier for you to read.
13. All this work is being handled through a custom hook that I created. This hook uses an API endpoint to get weather data, which is passed from the main component to the child component. The entire implementation is component-based.






































































This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Who wants to become a millionaire, link

https://andbabenko-milloinaire-game.vercel.app

# The point of a pet project

- To try a different approach in development. After receiving a list of requirements before starting development, specify the requirements, plan the entire structure and then start development, creating a foundation for further functionality expansion.
- Practice creating custom controls (with clip-path: polygon) and integrating them into the adaptive design.
- Try to write in pure CSC without preprocessors.
- Try to use ESLint Airbnb config.

# Recieved requirements:

- The player takes turns answering one of the 12 questions.
- Each question has 4 possible answers and only one is correct.
- If the answer is correct, the player gets to the next question.
- If the answer is incorrect, the player gets to the final screen.
- On the final screen you need to show the overall result of the game.
- Layout needs to be adaptive.

# Questions.

- Can there be more than 12 questions in the future? **Yes**
- Can there be more correct answers than one in the future? **Yes**
- Can there be more/less than 4 answers in the future? **Probably**
- Do you plan to add a timer (for one question or for the whole game) or other features? **Yes**
- What should I do if the length of the answer choice does not fit in the block? **Move the word to the next row**.
- Can questions have images? **No**
- What to show if questions are not recieved? **Make 404 page**
- What should be shown while questions are being submitted? **Create spinner**
- Should the request be terminated if the answer has not yet been received and the user leaves the page? **No**
- If the user leaves the page during the test and reopens it, what should I show? **Continue taking the test**
- Can the user go back to previous questions and see their old answers? **No**
- Do I need to do validation? **No**
- Do we receive questions depending on the complexity? **Yes, arrange in order of increasing difficulty**.
- Do you need a pixel-perfect layout? **Yes**

# Plan

In general, we got something with this structure:
https://andbabenko-milloinaire-game.vercel.app/plan.png

# Architecture

Here, I have a simple mix between FSD (shared and app) and a conventional modular architecture. The data exchange is unidirectional, top-down, and imports between components of the same level are prohibited. Everything is encapsulated through the public api index.ts and re-exported from it.

1. Shared - UIs that can be reused, assets, helpers, etc.
2. Components - public components.
3. Modules - encapsulated logic with its own side, types, private components.
4. Pages - a composite layer for modules. Routing.
5. App - global styles, HOCs, customization of the entire project.

Note. AnserItem UI component has to mush logic inside as for UI element. Also, Page components have to much logic inside rather than being a simple listing of components or modules. I'll keep this problem in mind in the next projects.

# Technologies used:

- React.
- Redux Toolkit.
- TypeScript.
- React Router.
- CreateAsyncThunk for requests.
- Redux Presist for Local Storage.
- Create React CLI with script "run component" for creating templates for components with connected imports.

# Explanation of decisions:

1. Why make two Requests?
   The number of questions the size of the rewards, the duration of the timer in the future, should be obtained from the server. By making a breakdown into two requests we can be more flexible in getting questions: in response to the first request, we can get the right number of questions on the right topic.

2. Why do we need local storage and its synchronization with slice?
   If the user has left the app during the test, we must return them to the same question. Probably the timer should be in the same state as when he left the page. Which means that we need to save the entire rule list as well, not just all 12+ questions with answers, which means we need to save the entire store with two slices.

   Redux Presist will automate the whole process of synchronizing the local storage and store and avoid a lot of checks in the code. And the library functionality will allow us to easily add slices to or remove them from the list of synchronized slices in the future.

3. Why do we have one page which is responsible for both the beginning of the game and its finale?
   The point is that they were too similar in the layout we were using, changing the styles of one page would have meant changing the styles of the other. Since the project used a modular styles rather than the BEM methodology, there was a choice. Either create two almost identical pages and then have trouble editing the styles in two page components at once, or create a single but large comoponent with problems with adding functionality.

   But since the next few features will be aimed not at displaying statistics after finishing the game, but to expand the game functionality, I assume that the "problematic" page component will not be rewritten in the nearest future.

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
<h2>Game Description</h2>
  <p>An antagonistic, turn based competition where participants are conventionally assigned the 24th or 15th letter of the alphabet and seek to place 3 of their respective characters on a 3x3 grid. </p>
  <p>Also known as tic-tac-toe.</p>

  <h2>Technologies Used</h2>
    <ul>
      <li><h3>JavaScript</h3>
        <p>Game engine, dynamic game rendering in the browser, communication with server-side via API.</p></li>
      <li><h3>jQuery</h3></li>
      <li><h3>HTML and CSS</h3>
        <p> Used to create a consistent user-experience with straight-forward affordances so that possible actions are obvious to the user and straight-forward to execute.</p></li>
      <li><h3>Bootstrap</h3>
        <p> Used to add a symmetric grid system for page layout, and to switch between multiple layouts depending on screen-size.</p></li>
    </ul>

  <h2>Development Principles</h2>
    <ul>
      <li><h4>Mobile-First Design</h4>
        <p>CSS formatting initially calls for a page that is designed for a screen-width < 600px, and provides media queries for scaling up the layout on larger screens.</p>
      </li>
      <li><h4>SPA</h4>
        <p>All functionality for the app is achieved without refreshing the browser, providing the user with a seamless, smooth experience.</p>
      </li>
      <li><h4>Version Control</h4>
        <p>Managed locally with git repositories, which was linked to a cloud-based version control system, GitHub. Over a dozen development branches and more than 50 commits were made during the game's v1 development.</p>
      </li>
      <li><h4>File Structure</h4>
        <p>To allow for modular design, the codebase was divided into several directories and subdirectories to keep each aspect of the code independent and modular. Game logic, authorization, styling, and game rendering in the browser were all separated into independent directories. Authorization and game rendering were further divided into api, ui, and event files. A store.js file was utlilized as an intermediary between files to avoid circular references when necessary.</p>
      </li>
    </ul>

<h2>User Stories</h2>
  <p>Authentication</p>
    <ol>
      <li>User will be able to create a new account. </li>
      <li>User will be able to log in. </li>
      <li>User will be able to change password when logged in. </li>
      <li>User will be able to retreive game stats when logged in. </li>
      <li>User will be able to log out. </li>
    </ol>
  <p>Gameplay</p>
    <ol>
      <li>User will be able to engage in complete game functionality with or without logging in.</li>
      <li>User will be able to click a space on the game board to make a move.</li>
      <li>User will receive notification if attempting to make an illegal move.</li>
      <li>User will be able to see whose turn (x/o) it is at any point during the game.</li>
      <li>User will receive noticification indicating when x or o wins, or if there is a tie.</li>
      <li>User will be able to reset game board at any time.</li>
    </ol>

<h2>Wire Framing</h2>

  ![wire frame](https://i.imgur.com/cqcgZ0d.jpg "wire frame")
  <p> Planning out the design and flow of this application informed my process and I began developing the game engine, user interface, and styling. One feature that I wanted to include from the beginning was a "quick play" option where a user could play the game instantly, without signing in. Having this plan before attempting to do any coding was critical, and I ultimately ensured that my game logic was entirely independent from ajax calls. </p>

  ![win alert](https://i.imgur.com/RuOU3ik.jpg "win alert")
  <p> While developing aspects of the application, I encountered times when my wire frame plan proved to be more complicated to implement than I realized, and I had to maintain design flexibility for the sake of time and efficiency. For instance, having a status bar that shows (1) whose turn it is and (2) the running total of wins and ties is an elegant design, but I had to hold off on implementing the functionality due to time restraints. This is absolutely something that I can incorporate into the project in future revisions. </p>

  <p>More wireframes: [Wireframes and user stories](https://photos.app.goo.gl/fNYaQTQik8AqE5r89)</p>


<h2>Future Directions</h2>
  <p>In future versions of the game, I would like to add several levels of AI to play against, including a perfect AI against which it is impossible to win. I would also like to improve the GUI by adding an integrated status bar showing whose turn it is, who won if the game is over, and a running total of wins for x/o and total number of ties during that session.</p>
<h2>Current Limitations</h2>
  <p>This project was my first fully-fledged web application, and working under a timeline motivated me to make significant progress in each of the 4 project days. However, having a timeline forced me to make development decisions that at times limited funcitonality of the game. One limitation of the v1 development cycle is that I did not add a lot of functionality in the app using the `GET` API request. This could have been utilized to display more complex game statistics, instead of the basic report I display to the user (total number of games played).</p>

___

<h2>Bibiography</h2>
  <h4>Smooth Scrolling</h4>
    <p>https://css-tricks.com/snippets/jquery/smooth-scrolling/</p>
    <p>Very well-commented chunk of code used to enable smooth-scrolling to anchor tags that refer to different parts of the page. I used this to enable the scroll effect to sign-up/log-in.</p>
  <h4>Minimax</h4>
    <p>https://www.neverstopbuilding.com/blog/minimax</p>
    <p>A nice write-up on one dev's implementation of the minimax algorithm in developing a perfect tic tac toe AI. Used when brainstorming future versions of the game</p>
  <h4>Bootstrap Features</h4>
    <p>https://getbootstrap.com/docs/4.0/getting-started/introduction/</p>
<h2></h2>
<h2></h2>

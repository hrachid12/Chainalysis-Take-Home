# Chainalysis Take Home

This project is hosted at https://chainalysis-3772e.web.app/

## Deploy Locally

Clone the repository in the directory of your choice.

```bash
git clone https://github.com/hrachid12/Chainalysis-Take-Home.git
```

Then ensure you are within the cloned directory. Once there, install the required packages

```bash
npm install
```

Once all of the packages are installed, the site can be hosted locally with the following command

```bash
npm start
```

The command should automatically open up the site in your default browser, but the project can be accessed locally at 
http://localhost:3000/


## Questionnaire

### Are there any suboptimal choices in your implementation?

Yes, at the moment the way the comparison is done between the two exchanges is not the most optimal method. The way the 
project is setup at the moment, it only compares the prices between two exact exchanges. This isn't the best choice 
because, if I were to add additional exchanges to the list on each page, I would have to refactor or rewrite the logic so 
that it allows for the site to scale. 

### Is any part of it over-designed?

Yes, I designed to site to dynamically create endpoints and pages for the coins in the CONSTANTS.ts file. It would have 
been much easier to hardcode the Ethereum and Bitcoin pages/endpoints but it requires a lot of work to just add a single 
coin that way. Instead, I put more work in to create the pages and endpoints dynamically so that I have the option to add
coins to the site with ease. 

### If you have to scale your solution to 100 users/second, what changes would you make, if any?

At the moment, the site performs two GET requests on each page load to get the required information from the exchanges.
This would, of course, be terrible if there were 100 visitors to the site per second, since I would be spamming two 
separate API's with 100 requests/second. I would likely need to come up with a different way to retrieve and serve the data.

### What are some other enhancements you would have made, if you had more time?

I'm pretty happy with the functionality of the site and how it gathers the data and dynamically creates the pages for each
coin. If I had more time, though, I would probably spend more time on the UI and design for the site as a whole. It isn't
one of my biggest strengths, so it takes me some time to come up with great looking designs. 
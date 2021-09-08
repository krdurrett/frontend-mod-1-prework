/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, time, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = time;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
  incrementLikes(newLikes){
    this.numberOfLikes+= newLikes;
  }
  addComment(comments){
    this.comments.push(comments);
  }
};
var tweetOne = new Tweet("Kayla", "Can't wait to start Turing!", "0800 090721", 1, ["Excited for you!"])
tweetOne.incrementLikes(3);
tweetOne.addComment("You're gonna kill it");
console.log(tweetOne);
var tweetTwo = new Tweet("Chris", "Another successful year at PhishDicks!", "1000 090521", 5, ["Killer set!"])
tweetTwo.incrementLikes(5);
tweetTwo.addComment("Great to see you!");
console.log(tweetTwo);
var tweetThree = new Tweet("Kayla", "Can't figure out this code!", "2200 090721", 3, ["Ask your cohort!"])
tweetThree.incrementLikes(3);
tweetThree.addComment("Use google!");
console.log(tweetThree);

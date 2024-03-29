
const apiUrl = "https://api.quotable.io/random";

const getQuote = async(url) => {
    const response = await fetch(url); var data = await response.json();
    $(".card-text").text(data.content); $(".card-subtitle").text(" - " + data.author);

}
getQuote(apiUrl);

const tweet = () => {

    const content1 = encodeURIComponent(
        $(".card-text").text() + "\n- by" + $(".card-subtitle").text()
        );
    const tweetUrl = "https://twitter.com/intent/tweet?text="+content1;


    window.open(tweetUrl, "Tweet Window", "width=600, height=300");
};
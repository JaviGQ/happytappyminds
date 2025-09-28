
Papa.parse("tappy_data.csv", {
  download: true,
  header: true,
  complete: function(results) {
    const quotes = results.data;
    
    const cleanQuotes = quotes.filter(q => q.QUOTES?.trim());

    const random = cleanQuotes[Math.floor(Math.random() * cleanQuotes.length)];
    const quoteText = random.QUOTES?.trim();
    const authorText = random.AUTHOR?.trim();

    document.getElementById("quote-text").innerText = `${quoteText}`;

    document.getElementById("quote-author").innerText = authorText
      ? `${authorText}`
      : "";
  }
});

const imageCount = 1000;
const images = [];

for (let i = 1; i <= imageCount; i++) {
  images.push(`images/image (${i}).png`);
}

const randomImage = images[Math.floor(Math.random() * images.length)];
document.getElementById("random-image").src = randomImage;

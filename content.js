// This function will check if a given message contains less than 4 unique words, is fully in uppercase, or contains repeated substrings of length 4 or more characters, or repeated sequences of 3 or more words
function shouldHideMessage(message) {
  // Count the number of uppercase letters in the message
  const uppercaseLetters = message.match(/[A-Z]/g) || [];
  const numUppercaseLetters = uppercaseLetters.length;
  
  if (numUppercaseLetters > 5) {
    return true;
  }
  
  // Check if the message has fewer than 5 unique words
  const words = message.split(/\s+/);
  const uniqueWords = new Set(words);

  if (uniqueWords.size < 5) {
    return true;
  }

  // Check if the message contains repeated substrings of length 4 or more characters
  for (let i = 0; i < message.length - 7; i++) {
    const substring = message.substring(i, i + 4);
    const remaining = message.substring(i + 4);

    if (remaining.includes(substring)) {
      const nextIndex = remaining.indexOf(substring) + 4;
      const nextSubstring = remaining.substring(nextIndex, nextIndex + 4);

      if (nextSubstring === substring) {
        return true;
      }
    }
  }

  // Check if the message contains repeated sequences of 3 or more words
  const wordsArr = message.toLowerCase().split(/\W+/);
  for (let i = 0; i < wordsArr.length - 2; i++) {
    const wordSequence = wordsArr.slice(i, i + 3);
    const remainingWords = wordsArr.slice(i + 3);

    if (remainingWords.join(' ').includes(wordSequence.join(' '))) {
      return true;
    }
  }

  // If none of the conditions are true, return false
  return false;
}


// This function will hide a given chat message element
function hideChatMessage(element) {
  element.style.display = 'none';
}

let lastCheckedMessage = null;

function monitorChat() {
  // Find the chat message elements
  const chatMessages = document.querySelectorAll('.chat-line__message');

  // Loop through each new message element since the last checked message
  for (let i = lastCheckedMessage ? Array.from(chatMessages).indexOf(lastCheckedMessage) + 1 : 0; i < chatMessages.length; i++) {
    const message = chatMessages[i];

    // Get the message text
    const messageText = message.innerText.trim();

    // Check if the message has few unique words
    if (shouldHideMessage(messageText)) {
      // Hide the message element
      hideChatMessage(message);
    }
  }

  // Update the last checked message to the latest one
  lastCheckedMessage = chatMessages[chatMessages.length - 1];
}

// Call the monitorChat function every 10 milliseconds
setInterval(monitorChat, 10);

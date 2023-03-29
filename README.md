# twitch-chat-filter
This is a firefox extension that monitors twitch chat and hides messages that meet these criteria:  

-having fewer than 4 unique words  
-containing more than 5 uppercase letters  
-containing repeated substrings of length 4 or more characters  
-repeated sequences of 3 or more words.  
  
It manages to hide most of the useless spam while keeping real interactions shown.

It does this by checking each new message element.

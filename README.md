# twitch-chat-filter
This is a firefox extension that monitors twitch chat and hides messages that meet these criteria:  

-having fewer than 4 unique words  
-containing more than 5 uppercase letters  
-containing repeated substrings of length 4 or more characters  
-repeated sequences of 3 or more words.  
  
It manages to hide most of the useless spam while keeping real interactions shown.

It does this by checking each new message element.
  
Install:  
1. Download the files and keep them in the same folder.  
2. Type "about:addons" in the URL.  
3. Install addon from file.  
4. Choose manifest.json  
5. Enjoy the less annoying chat.  

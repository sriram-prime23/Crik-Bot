var input = document.getElementById("user");
var btn = document.getElementById("send");
var chatarea = document.getElementById("chatarea");

function go() {
    // Create user message and append
    var mess = input.value.toLowerCase();

    mess.trim();
    
    var chat = document.createElement("div");
    chat.innerHTML = mess;
    var br = document.createElement("br");
    var logo1 = document.createElement("div");
    logo1.id = "userpic";
    logo1.innerHTML = '<img src="free-user-icon-3296-thumb.png" alt="user">';
    chatarea.append(logo1);
    chat.id = "usersend";
    chatarea.append(br);
    chatarea.append(chat);

    // Add bot response
    var botpic = document.createElement("div");
    botpic.id = "botpic";
    chatarea.append(botpic);
    botpic.innerHTML = '<img id="bot" src="ai.jpg" alt="Bot">';


    

    var botchat = document.createElement("div");

    var botanim=document.createElement("div");

    var pulli=document.createElement("p")

   

    pulli.id="pulli"

        botanim.append(pulli);

        botanim.id="bani";

        botanim.innerHTML='<span id="pu">...</span>';
   
        chatarea.append(botanim);

    botchat.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, animi voluptates at amet nihil minima assumenda nulla tempore architecto. Perspiciatis, porro animi. Quod enim corrupti eos corporis assumenda rerum praesentium!";
    botchat.id = "botsend";
    chatarea.append(botchat);

    // Auto-scroll to the bottom after each message
    chatarea.scrollTop = chatarea.scrollHeight;

    // Clear the input field
    // input.value = "";

















    //if else


    if(chat.textContent.includes("over")||chat.textContent.includes("overs")){
        botchat.textContent="one over is an 6 balls in criket"
        
    }
    else if(chat.textContent.includes("hello")||chat.textContent.includes('hai')){
        botchat.textContent="hai how can i assist you ?"
    }

    else if (chat.textContent.match(/captain of india|indian captain|team india captain/)) {
        botchat.textContent = 
        "As of January 2025, Rohit Sharma is the captain of India's cricket team.\n\n" +
        "Full Name:        Rohit Gurunath Sharma\n" +
        "Born:             April 30, 1987, in Bansod, Maharashtra, India\n" +
        "Nickname:         Hitman\n" +
        "Role:             Right-handed batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm off break (though rarely used)\n\n" +
        "Rohit has been one of India's most successful limited-overs batsmen and is also known for his remarkable ability to score big centuries, including three double centuries in ODIs.";
    }
    
    else if (chat.textContent.match(/virat kohli|chiku|king kohli/)) {
        botchat.textContent = 
        "Full Name:        Virat Kohli\n" +
        "Born:             November 5, 1988, in Delhi, India\n" +
        "Nickname:         Chiku\n" +
        "Role:             Right-handed batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Virat Kohli is one of the most successful and consistent modern-day batsmen. He is known for his aggressive batting and has broken numerous records in both ODIs and Test cricket, including being the fastest player to score 8,000, 9,000, and 10,000 runs in ODIs.";
    }
    
    else if (chat.textContent.match(/ms dhoni|mahendra singh dhoni|captain cool/)) {
        botchat.textContent = 
        "Full Name:        Mahendra Singh Dhoni\n" +
        "Born:             July 7, 1981, in Ranchi, Bihar (now Jharkhand), India\n" +
        "Nickname:         Mahi, Captain Cool\n" +
        "Role:             Wicketkeeper-batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm medium (rarely used)\n\n" +
        "MS Dhoni is one of India's most successful captains, known for his calm demeanor and ability to finish games under pressure. Under his leadership, India won the ICC T20 World Cup (2007), the ICC Cricket World Cup (2011), and the ICC Champions Trophy (2013).";
    }
    
    else if (chat.textContent.match(/rohit sharma|hitman|rohit/)) {
        botchat.textContent = 
        "Full Name:        Rohit Gurunath Sharma\n" +
        "Born:             April 30, 1987, in Bansod, Maharashtra, India\n" +
        "Nickname:         Hitman\n" +
        "Role:             Right-handed batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm off break (though rarely used)\n\n" +
        "Rohit has been one of India's most successful limited-overs batsmen and is also known for his remarkable ability to score big centuries, including three double centuries in ODIs.";
    }
    
    else if (chat.textContent.match(/kl rahul|rahul|kl/)) {
        botchat.textContent = 
        "Full Name:        KL Rahul\n" +
        "Born:             April 18, 1992, in Mangalore, Karnataka, India\n" +
        "Nickname:         Rahul, KL\n" +
        "Role:             Top-order batsman, Wicketkeeper\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "KL Rahul is a versatile cricketer, known for his elegant batting. He has represented India across formats, including as a wicketkeeper in limited-overs cricket, and has scored centuries in all formats of the game.";
    }
    
    else if (chat.textContent.match(/hardik pandya|pandya|hardik/)) {
        botchat.textContent = 
        "Full Name:        Hardik Himanshu Pandya\n" +
        "Born:             October 11, 1993, in Surat, Gujarat, India\n" +
        "Nickname:         Hardik\n" +
        "Role:             All-rounder\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm fast-medium\n\n" +
        "Hardik Pandya is known for his explosive batting and aggressive style. He is a key all-rounder for India, capable of swinging games with both bat and ball, especially in limited-overs cricket.";
    }
    
    else if (chat.textContent.match(/shubman gill|gill|shubman/)) {
        botchat.textContent = 
        "Full Name:        Shubman Gill\n" +
        "Born:             September 8, 1999, in Fazilka, Punjab, India\n" +
        "Nickname:         Gill\n" +
        "Role:             Opening batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Shubman Gill is known for his solid technique and stylish stroke play. He is one of the brightest young stars in Indian cricket and has impressed with his performances in both Test and limited-overs formats.";
    }
    
    else if (chat.textContent.match(/jasprit bumrah|bumrah|jasprit/)) {
        botchat.textContent = 
        "Full Name:        Jasprit Jasbirsingh Bumrah\n" +
        "Born:             December 6, 1993, in Ahmedabad, Gujarat, India\n" +
        "Nickname:         Bumrah\n" +
        "Role:             Bowler\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm fast bowler\n\n" +
        "Jasprit Bumrah is one of the best fast bowlers in the world, known for his deadly yorkers and consistency in all formats of the game. He has been a match-winner for India in crucial moments, particularly in limited-overs cricket.";
    }
    
    else if (chat.textContent.match(/ravindra jadeja|jadeja|ravindra/)) {
        botchat.textContent = 
        "Full Name:        Ravindra Jadeja\n" +
        "Born:             December 6, 1988, in Navagam, Gujarat, India\n" +
        "Nickname:         Jaddu\n" +
        "Role:             All-rounder\n" +
        "Batting Style:    Left-hand bat\n" +
        "Bowling Style:    Left-arm orthodox spin\n\n" +
        "Ravindra Jadeja is an all-rounder who plays a crucial role in both batting and bowling for India. His left-arm orthodox spin has been highly effective in limited-overs and Test cricket, while he is also a brilliant fielder.";
    }
    
    else if (chat.textContent.match(/shikhar dhawan|dhawan|gabbar/)) {
        botchat.textContent = 
        "Full Name:        Shikhar Dhawan\n" +
        "Born:             December 5, 1985, in Delhi, India\n" +
        "Nickname:         Gabbar\n" +
        "Role:             Left-handed batsman\n" +
        "Batting Style:    Left-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Shikhar Dhawan is known for his aggressive opening batting. He has been a key figure for India in limited-overs cricket, with his consistency in scoring big runs and excellent partnerships with his opening partners.";
    }
    
    else if (chat.textContent.match(/rishabh pant|pant|rishabh/)) {
        botchat.textContent = 
        "Full Name:        Rishabh Pant\n" +
        "Born:             October 4, 1997, in Roorkee, Uttarakhand, India\n" +
        "Nickname:         Pant\n" +
        "Role:             Wicketkeeper-batsman\n" +
        "Batting Style:    Left-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Rishabh Pant is known for his aggressive and fearless approach. He has been a key player for India in Tests, with some iconic performances, including his match-winning knock in Australia in 2021.";
    }
    
    else if (chat.textContent.match(/mohammed shami|shami|mohammed/)) {
        botchat.textContent = 
        "Full Name:        Mohammed Shami\n" +
        "Born:             September 3, 1990, in Amroha, Uttar Pradesh, India\n" +
        "Nickname:         Shami\n" +
        "Role:             Fast bowler\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm fast bowler\n\n" +
        "Mohammed Shami is known for his pace and ability to swing the ball both ways. He is one of India's premier fast bowlers and has been instrumental in India's success across formats.";
    }
    
    else if (chat.textContent.match(/bhuvneshwar kumar|bhuvi|bhuvneshwar/)) {
        botchat.textContent = 
        "Full Name:        Bhuvneshwar Kumar\n" +
        "Born:             February 5, 1990, in Meerut, Uttar Pradesh, India\n" +
        "Nickname:         Bhuvi\n" +
        "Role:             Bowler\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm medium-fast\n\n" +
        "Bhuvneshwar Kumar is one of India's best swing bowlers. He has been a key figure in India's bowling attack, especially in the limited-overs format, with his ability to swing the ball both at the start and at the death.";
    }
    
    else if (chat.textContent.match(/ravichandran ashwin|ashwin|ravi/)) {
        botchat.textContent = 
        "Full Name:        Ravichandran Ashwin\n" +
        "Born:             September 17, 1986, in Chennai, Tamil Nadu, India\n" +
        "Nickname:         Ashwin\n" +
        "Role:             Bowler\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm off-spin\n\n" +
        "Ravichandran Ashwin is one of the finest spin bowlers in modern-day cricket. He is known for his variation, including the carom ball, and has been successful in both Tests and limited-overs cricket.";
    }
    
    else if (chat.textContent.match(/ajinkya rahane|rahane|ajinkya/)) {
        botchat.textContent = 
        "Full Name:        Ajinkya Rahane\n" +
        "Born:             June 6, 1988, in Ashwi KD, Maharashtra, India\n" +
        "Nickname:         Jinx\n" +
        "Role:             Middle-order batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Ajinkya Rahane is known for his solid technique and calm demeanor. He is a reliable middle-order batsman and has captained India in several matches during the absence of regular captains.";
    }
    
    else if (chat.textContent.match(/suresh raina|raina|suresh/)) {
        botchat.textContent = 
        "Full Name:        Suresh Raina\n" +
        "Born:             November 27, 1986, in Muradnagar, Uttar Pradesh, India\n" +
        "Nickname:         Suresh\n" +
        "Role:             All-rounder\n" +
        "Batting Style:    Left-hand bat\n" +
        "Bowling Style:    Right-arm off break\n\n" +
        "Suresh Raina is an aggressive batsman and a useful off-spin bowler. He has been a key player in India's limited-overs formats, contributing both with the bat and in the field.";
    }
    
    else if (chat.textContent.match(/ishant sharma|ishant|sharma/)) {
        botchat.textContent = 
        "Full Name:        Ishant Sharma\n" +
        "Born:             September 2, 1988, in Delhi, India\n" +
        "Nickname:         Ishu\n" +
        "Role:             Fast bowler\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm fast-medium\n\n" +
        "Ishant Sharma is one of India's leading fast bowlers, known for his height and ability to extract bounce from the pitch. He has been a key figure in India's bowling attack, particularly in Test cricket.";
    }
    
    else if (chat.textContent.match(/manish pandey|manish|pandey/)) {
        botchat.textContent = 
        "Full Name:        Manish Pandey\n" +
        "Born:             September 10, 1989, in Nainital, Uttarakhand, India\n" +
        "Nickname:         Manish\n" +
        "Role:             Middle-order batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Manish Pandey is known for his stylish batting and solid technique. He has represented India in various formats and has been a part of crucial match-winning partnerships.";
    }
    
    else if (chat.textContent.match(/kedar jadhav|kedar|jadhav/)) {
        botchat.textContent = 
        "Full Name:        Kedar Jadhav\n" +
        "Born:             March 26, 1985, in Pune, Maharashtra, India\n" +
        "Nickname:         Kedar\n" +
        "Role:             All-rounder\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm off break\n\n" +
        "Kedar Jadhav is known for his useful contributions with both bat and ball. He has been a part of India's limited-overs team and is particularly known for his unorthodox style of batting.";
    }
    
    else if (chat.textContent.match(/deepak chahar|chahar|deepak/)) {
        botchat.textContent = 
        "Full Name:        Deepak Chahar\n" +
        "Born:             August 7, 1992, in Agra, Uttar Pradesh, India\n" +
        "Nickname:         Chahar\n" +
        "Role:             Bowler\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    Right-arm medium-fast\n\n" +
        "Deepak Chahar is known for his swing bowling and ability to bowl accurate yorkers. He has been a key figure in India's limited-overs attack, especially in the powerplay overs.";
    }
    
    else if (chat.textContent.match(/prithvi shaw|shaw|prithvi/)) {
        botchat.textContent = 
        "Full Name:        Prithvi Shaw\n" +
        "Born:             November 9, 1999, in Virar, Maharashtra, India\n" +
        "Nickname:         Shaw\n" +
        "Role:             Opening batsman\n" +
        "Batting Style:    Right-hand bat\n" +
        "Bowling Style:    None\n\n" +
        "Prithvi Shaw is known for his aggressive and fearless approach to batting. He has made a mark as a young opening batsman for India, with a strong start to his Test career.";
    }
    else if (chat.textContent.match(/who are the best t20 bowlers in the world|best t20 bowler/)) {
        botchat.textContent = 
        "Some of the best T20 bowlers in the world are known for their ability to bowl crucial overs, especially in the death overs:\n\n" +
        "1. Jasprit Bumrah (India): Famous for his yorkers and death over bowling.\n" +
        "2. Rashid Khan (Afghanistan): A world-class leg-spinner, known for his economy rate and wicket-taking ability.\n" +
        "3. Sunil Narine (West Indies): Renowned for his mystery spin.\n" +
        "4. Shaheen Afridi (Pakistan): Known for his fast, lethal deliveries, particularly in T20 cricket.";
    }
    else if (chat.textContent.match(/odi world cup winners|odi wc winner list|world cup champions/)) {
        botchat.textContent = 
        "The ICC Men's Cricket World Cup is one of the most prestigious tournaments in cricket. Below is the list of ODI World Cup winners:\n\n" +
        "1. 1983 - India: India won the 1983 World Cup by defeating the West Indies in the final.\n" +
        "2. 1987 - Australia: Australia won their first World Cup, defeating England in the final.\n" +
        "3. 1992 - Pakistan: Pakistan clinched the 1992 World Cup, defeating England in the final.\n" +
        "4. 1996 - Sri Lanka: Sri Lanka won their first World Cup in 1996, defeating Australia in the final.\n" +
        "5. 1999 - Australia: Australia won their second World Cup, defeating Pakistan in the final.\n" +
        "6. 2003 - Australia: Australia claimed their third World Cup by defeating India in the final.\n" +
        "7. 2007 - Australia: Australia won their fourth World Cup, defeating Sri Lanka in the final.\n" +
        "8. 2011 - India: India won their second World Cup, defeating Sri Lanka in the final.\n" +
        "9. 2015 - Australia: Australia won their fifth World Cup, defeating New Zealand in the final.\n" +
        "10. 2019 - England: England won their first World Cup, defeating New Zealand in a thrilling final.\n" +
        "11. 2023 - Australia: Australia won their sixth World Cup, defeating India in the final.";
    }
    
    
     
       

    

    else{
        botchat.textContent="It looks like I didn't fully understand your question about cricket. Can you please provide a bit more context or rephrase your query? I'll be happy to help once I have a clearer idea of what you're asking!"
    }
    
    
}

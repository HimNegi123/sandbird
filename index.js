async function sendChatbotReply(applicationId, botUserId, messages) {
    const url = `https://api-${applicationId}.sendbird.com/v3/bots/${botUserId}/ai_chatbot_replies`;

    const headers = {
      'Content-Type': 'application/json',
      'Api-Token': '5c82372e4c9b4538caf7c6209a9c720fd8e7e374' // Replace with your actual API token
      };
        
    const body = {
      messages: messages.messages,
    //  use_streaming_response: messages.use_streaming_response // Optional parameter 
    };    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log('Chatbot Reply:', result);
      return result;
    }
     catch (error) {
      console.error('Error sending chatbot reply:', error);
    }
}

// Example usage:
sendChatbotReply(
  'D853134B-51BC-453F-B97B-DBF35E49DA3C', 
  'onboarding_bot', 
  {
    "messages": [
      {
        "role": "user",
        "content": "Hi"
      },
      {
        "role": "assistant",
        "content": "Hi, how can I help you?"
      },
      {
        "role": "user",
        "content": "Tell me about excellence."
      }
    ]
   // "use_streaming_response": false // Optional: false to get the response all at once
  }
);

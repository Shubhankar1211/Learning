/* here are the notes of websockets
WebSockets are a protocol that enables persistent, bi-directional, full-duplex communication between a client (like a browser) and a server over a single, long-lived TCP connection. They are foundational for many real-time web applications that require rapid and low-latency data updates, such as chat apps, live notifications, collaborative editing, gaming, and financial dashboards.



What is a WebSocket?
Definition: A computer communications protocol that provides full-duplex, real-time, two-way interaction between a client and server over one persistent TCP connection.

How it starts: It begins as a standard HTTP connection, but the client requests to "upgrade" the connection. When the server agrees, the connection switches from HTTP to WebSocket protocol.

How it works: Either client or server can send messages independently at any time—unlike HTTP, which requires the client to request and the server to respond each time.



Why are WebSockets used?
Real-time updates: They allow instant data transfer without waiting for repeated HTTP requests (no polling or refreshes needed).

Efficient communication: Greatly reduce overhead compared to HTTP, as no repeated headers or setup/teardown of connections are needed—just one open connection.

Typical use cases: Live chat/messaging (like WhatsApp Web), multiplayer games, collaborative tools (like Google Docs), live financial data, and IoT devices.

 How is WebSocket different from HTTP?
Answer: HTTP is a unidirectional, request-response protocol where each exchange opens and closes a connection. WebSockets keep a single connection open for ongoing, real-time, two-way communication—greatly reducing latency and overhead.

 Give some real-world use cases of WebSockets.
Answer: Chat apps (Slack, WhatsApp Web), live financial dashboards (stock tickers), collaborative tools (Google Docs), live gaming, online auctions, real-time tracking (Uber).




 Give some real-world use cases of WebSockets.
Answer: Chat apps (Slack, WhatsApp Web), live financial dashboards (stock tickers), collaborative tools (Google Docs), live gaming, online auctions, real-time tracking (Uber).


 What ports do WebSockets use?
Answer: WebSockets commonly use TCP port 80 (ws://) for unencrypted and port 443 (wss://) for encrypted communications.


What are the main benefits of using WebSockets?
Answer: Real-time, low-latency, bidirectional communication; reduced overhead; single persistent connection for continuous data exchange.


 How is a WebSocket connection established?
Answer:
The client sends an HTTP request with the Upgrade: websocket header. The server responds with 101 Switching Protocols to confirm. After this handshake, the protocol switches from HTTP to WebSocket, and both client and server can now exchange messages freely until the connection is closed by either side.




 What are typical use cases for WebSockets?
Answer:

Real-time chat/messaging apps

Online multiplayer gaming

Live stock or trading platforms

Collaborative editing tools (e.g., Google Docs, Figma)

IoT device data streaming



 How do you handle WebSocket disconnections and reconnections?
Answer:
Monitor the onclose/onerror events on the client. If disconnected, you can implement a reconnection strategy by attempting to re-establish the link after a certain delay (using exponential backoff or a fixed interval). Always ensure resources are cleaned up between reconnect attempts.




How do you secure a WebSocket connection?
Answer:
Use the wss:// (WebSocket Secure) protocol to establish an encrypted TLS connection. Also, implement authentication through tokens or cookies on connection, use secure origins, and verify client identity to protect against unauthorized access.





How do you secure a WebSocket connection?
Answer:
Use the wss:// (WebSocket Secure) protocol to establish an encrypted TLS connection. Also, implement authentication through tokens or cookies on connection, use secure origins, and verify client identity to protect against unauthorized access.



Explain how you would scale a WebSocket-based system.
Answer:
Use load balancers (supporting sticky sessions if needed), horizontally scale servers, and employ message brokers (e.g., Redis, Kafka) to synchronize messages or user state between server instances. Consider sharding connections and careful resource management for handling high concurrency.




 Does WebSocket use the same ports as HTTP?
Answer:
By default, WebSocket uses port 80 (ws://) for insecure connections and port 443 (wss://) for secure, TLS-encrypted connections, just like HTTP and HTTPS do





Can you send binary data with WebSocket?
Answer:
Yes, WebSocket supports both text and binary messages. You can send binary data using Blob, ArrayBuffer, or typed arrays, enabling use cases like file transfer, streaming, and gaming.

*/
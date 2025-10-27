class PubSub {
    constructor() {
        this.topics = {};
    }

    subscribe(topic, listener) {
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        this.topics[topic].push(listener);
    }

    publish(topic, message) {
        if (this.topics[topic]) {
            this.topics[topic].forEach(listener => listener(message));
        }
    }

    unsubscribe(topic, listener) {
        if (!this.topics[topic]) return;
        this.topics[topic] = this.topics[topic].filter(l => l !== listener);
    }

    subscribeOnce(topic, listener) {
        const wrapper = (message) => {
            listener(message);
            this.unsubscribe(topic, wrapper);
        };
        this.subscribe(topic, wrapper);
    }
}

// Usage example
const pubsub = new PubSub();

pubsub.subscribe('news', (message) => {
    console.log(`Received message: ${message}`);
});

pubsub.publish('news', 'Hello World!');
pubsub.publish('news', 'Another message!');
console.log(pubsub.topics);

/*
Step                  | pubsub.topics
----------------------|-----------------------------
Initial               | {}
Subscribe             | { news: [ƒ1, ƒ2, ƒ3] }
Publish               | { news: [ƒ1, ƒ2, ƒ3] }
Unsubscribe(ƒ2)       | { news: [ƒ1, ƒ3] }
subscribeOnce(ƒ4)     | { news: [ƒ1, ƒ3, wrapperƒ] }
After publish (ƒ4)    | { news: [ƒ1, ƒ3] }
*/

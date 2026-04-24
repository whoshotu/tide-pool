"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClawdBotTaskQueue = void 0;
// Minimal Clawd Bot task queue
class ClawdBotTaskQueue {
    constructor() {
        this.tasks = [];
    }
    add(task) { this.tasks.push(task); }
    next() { return this.tasks.shift(); }
}
exports.ClawdBotTaskQueue = ClawdBotTaskQueue;

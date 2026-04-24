"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClawdBotMemory = void 0;
// Minimal Clawd Bot memory store (in-memory store for P0)
class ClawdBotMemory {
    constructor() {
        this.store = [];
    }
    save(entry) { this.store.push(entry); }
    loadAll() { return this.store; }
}
exports.ClawdBotMemory = ClawdBotMemory;

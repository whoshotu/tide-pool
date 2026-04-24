"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClawProcessService = void 0;
class ClawProcessService {
    constructor() {
        this.sessions = new Map();
    }
    async spawn(sessionId, args) {
        this.sessions.set(sessionId, { args });
        // No actual spawn in scaffold; return success exit code 0
        return 0;
    }
    cancel(sessionId) {
        this.sessions.delete(sessionId);
    }
    async getVersion() {
        return "0.0.0";
    }
    onStream(sessionId, handler) {
        // no-op in scaffold
    }
    onDone(sessionId, handler) {
        // no-op in scaffold
    }
    onError(sessionId, handler) {
        // no-op in scaffold
    }
}
exports.ClawProcessService = ClawProcessService;

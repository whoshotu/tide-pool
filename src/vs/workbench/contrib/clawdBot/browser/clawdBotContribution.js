"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawdBotContribution = void 0;
// Minimal Clawd Bot browser contribution (OpenClaw)
function activateClawdBotContribution(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawdBot', { id: 'clawdBot', version: '0.1.0', name: 'Clawd Bot' });
    }
}
exports.activateClawdBotContribution = activateClawdBotContribution;
